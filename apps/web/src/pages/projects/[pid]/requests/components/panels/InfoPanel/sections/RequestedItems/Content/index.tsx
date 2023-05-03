import { QueryParams } from '@spektr/common';
import { ColumnDef, DataGrid } from '@spektr/data-grid';
import { ChangeSet, EditingCell } from '@spektr/data-grid/dist/externals/dx-grid';
import isEqual from 'fast-deep-equal';
import { every, filter, some } from 'lodash';
import { forwardRef, ForwardRefRenderFunction, useEffect, useImperativeHandle, useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import * as Yup from 'yup';

import { DateFormatter, useAccordion } from '~/components';
import { DateEditor, NumericEditor } from '~/components/editors';
import { useAddNewItemEvent, useRemoveItemEvent } from '~/events';
import {
  InventoryItemEditor,
  InventoryItemFormatter,
  RequestStatusEditor,
  RequestStatusFormatter,
} from '~/features/project/components';
import { useGetEstimates } from '~/hooks/api';
import { useQueryParams } from '~/hooks/useQueryParams';
import { useSavingEnabled } from '~/store';
import { FormHandle } from '~/types/form';

import { useSelectedRows } from '../useSelectedRows';

const validationRules = Yup.object({
  inventoryItemId: Yup.string().label('Item').required(),
  lots: Yup.number().label('Lots').min(1).required(),
  quantity: Yup.number().label('Quantity').min(1).required(),
  quantityUOMId: Yup.string().label('Unit').required(),
  dateRequired: Yup.date().label('Date Required').typeError('Invalid Date').nullable().required(),
  purchaseRequestStatusId: Yup.string().label('Status').required(),
});

const defaultColumns: ColumnDef[] = [
  {
    name: 'inventoryItemId',
    title: 'Item',
    width: 120,
    sortingEnabled: true,
    editingEnabled: true,
    validationRules,
  },
  {
    name: 'lots',
    title: 'Lots',
    width: 150,
    sortingEnabled: true,
    editingEnabled: true,
    validationRules,
  },
  {
    name: 'notes',
    title: 'Notes',
    width: 125,
    sortingEnabled: true,
    editingEnabled: true,
    validationRules,
  },
  {
    name: 'quantity',
    title: 'Quantity',
    width: 160,
    sortingEnabled: true,
    editingEnabled: true,
    validationRules,
  },
  {
    name: 'quantityUOMId',
    title: 'Unit',
    width: 160,
    sortingEnabled: true,
    editingEnabled: true,
    validationRules,
  },
  {
    name: 'dateRequired',
    title: 'Date Required',
    width: 160,
    sortingEnabled: true,
    editingEnabled: true,
    validationRules,
  },
  {
    name: 'purchaseRequestStatusId',
    title: 'Status',
    width: 160,
    sortingEnabled: true,
    editingEnabled: true,
    validationRules,
  },
];

const Content: ForwardRefRenderFunction<FormHandle, {}> = (props, ref) => {
  const { pid: projectId } = useQueryParams(QueryParams.ProjectId);
  const { data: estimates = [] } = useGetEstimates(projectId);

  const [editingCells, setEditingCells] = useState<EditingCell[]>([]);
  const [selectedRows, setSelectedRows] = useSelectedRows();
  const [rows, setRows] = useState(estimates);
  const [, setSavingEnabled] = useSavingEnabled();
  const { expanded, toggle } = useAccordion();

  useAddNewItemEvent({
    addNewItem: () => {
      const newItem = {
        id: uuidv4(),
        inventoryItemId: null,
        lots: 1,
        notes: '',
        quantity: 1,
        quantityUOMId: null,
        dateRequired: null,
        purchaseRequestStatusId: null,
      };
      setSelectedRows([newItem.id]);
      setRows([newItem, ...rows]);
      setEditingCells([{ rowId: newItem.id, columnName: 'inventoryItemId' }]);
    },
  });

  useRemoveItemEvent({
    removeItem: () => {
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
    // eslint-disable-next-line react-hooks/exhaustive-deps
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
          for: ['inventoryItemId'],
          editorComponent: InventoryItemEditor,
          formatterComponent: InventoryItemFormatter,
        },
        {
          for: ['lots', 'quantity'],
          editorComponent: NumericEditor,
        },
        {
          for: ['dateRequired'],
          editorComponent: DateEditor,
          formatterComponent: DateFormatter,
        },
        {
          for: ['purchaseRequestStatusId'],
          editorComponent: RequestStatusEditor,
          formatterComponent: RequestStatusFormatter,
        },
      ]}
    />
  );
};

export default forwardRef(Content);
