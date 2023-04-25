import { ColumnDef, DataGrid } from '@spektr/data-grid';
import { ChangeSet, EditingCell } from '@spektr/data-grid/dist/externals/dx-grid';
import isEqual from 'fast-deep-equal';
import { every, filter, some } from 'lodash';
import { forwardRef, ForwardRefRenderFunction, useEffect, useImperativeHandle, useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import * as Yup from 'yup';

import { useAccordion } from '~/components';
import { NumericEditor } from '~/components/editors';
import { useAddNewEstimateEvent, useRemoveEstimateEvent } from '~/events';
import {
  ProductSubTypeEditor,
  ProductSubTypeFormatter,
  ProductTypeEditor,
  ProductTypeFormatter,
} from '~/features/project/components';
import { useGetEstimates } from '~/hooks/api';
import { useQueryParams } from '~/hooks/useQueryParams';
import { useSavingEnabled } from '~/store';
import { FormHandle } from '~/types/form';

import { useSelectedRows } from '../useSelectedRows';

const validationRules = Yup.object({
  partTypeCodeCategoryId: Yup.string().label('Product Type').required(),
  partTypeCodeId: Yup.string().label('Product Sub-Type').required(),
  estimatedQty: Yup.number().label('Estimated Qty').min(1).required(),
  estimatedNetSqFt: Yup.number().label('Estimated Net SqFt').min(1).required(),
});

const defaultColumns: ColumnDef[] = [
  {
    name: 'partTypeCodeCategoryId',
    title: 'Product Type',
    width: 120,
    sortingEnabled: true,
    editingEnabled: true,
    validationRules,
  },
  {
    name: 'partTypeCodeId',
    title: 'Product Sub-Type',
    width: 150,
    sortingEnabled: true,
    editingEnabled: true,
    validationRules,
  },
  {
    name: 'estimatedQty',
    title: 'Estimated Qty',
    width: 125,
    sortingEnabled: true,
    editingEnabled: true,
    validationRules,
    type: 'sum',
    align: 'right',
  },
  {
    name: 'estimatedNetSqFt',
    title: 'Estimated Net SqFt',
    width: 160,
    sortingEnabled: true,
    editingEnabled: true,
    validationRules,
    type: 'sum',
    align: 'right',
  },
];

const Content: ForwardRefRenderFunction<FormHandle, {}> = (props, ref) => {
  const { pid: projectId } = useQueryParams('pid');
  const { data: estimates = [] } = useGetEstimates(projectId);

  const [editingCells, setEditingCells] = useState<EditingCell[]>([]);
  const [selectedRows, setSelectedRows] = useSelectedRows();
  const [rows, setRows] = useState(estimates);
  const [, setSavingEnabled] = useSavingEnabled();
  const { expanded, toggle } = useAccordion();

  useAddNewEstimateEvent({
    addNewEstimate: () => {
      const newEstimate = {
        id: uuidv4(),
        partTypeCodeCategoryId: '',
        partTypeCodeId: '',
        estimatedQty: 1,
        estimatedNetSqFt: 1,
      };
      setSelectedRows([newEstimate.id]);
      setRows([newEstimate, ...rows]);
      setEditingCells([{ rowId: newEstimate.id, columnName: 'partTypeCodeCategoryId' }]);
    },
  });

  useRemoveEstimateEvent({
    removeEstimate: () => {
      const changedRows = filter(rows, (r) => !some(selectedRows, (sr) => sr === r.id));
      setSelectedRows([]);
      setRows(changedRows);
    },
  });

  useImperativeHandle(ref, () => ({
    isDirty: () => !isEqual(estimates, rows),
    discard: () => {
      setRows(estimates);
    },
    getData: () => {
      return rows;
    },
    validate: async () => {
      const isValid = every(rows, (r) => validationRules.isValidSync(r));
      if (!isValid && !expanded) {
        toggle();
      }
      return isValid;
    },
  }));

  useEffect(() => {
    setRows(estimates);
  }, [estimates]);

  useEffect(() => {
    return () => {
      setSelectedRows([]);
    };
  }, []);

  const handleChange = ({ changed }: ChangeSet) => {
    if (changed) {
      const changedRows = rows.map((row) => {
        return changed[row.id!] ? { ...row, ...changed[row.id!] } : row;
      });
      setRows(changedRows);

      if (!isEqual(changedRows, rows)) {
        setSavingEnabled(true);
      }
    }
  };

  return (
    <DataGrid
      defaultColumns={defaultColumns}
      rows={rows}
      getRowId={(row) => row.id}
      onCommitChanges={handleChange}
      columnReorderingEnabled
      resizingEnabled
      editingCells={editingCells}
      onEditingCellsChange={setEditingCells}
      selectedRows={selectedRows}
      onRowsSelect={setSelectedRows}
      height="100%"
      typeProviderProps={[
        {
          for: ['partTypeCodeCategoryId'],
          formatterComponent: ProductTypeFormatter,
          editorComponent: ProductTypeEditor,
        },
        {
          for: ['partTypeCodeId'],
          formatterComponent: ProductSubTypeFormatter,
          editorComponent: ProductSubTypeEditor,
        },
        {
          for: ['estimatedQty', 'estimatedNetSqFt'],
          editorComponent: NumericEditor,
        },
      ]}
    />
  );
};

export default forwardRef(Content);
