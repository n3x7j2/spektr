import { ColumnDef, DataGrid } from '@spektr/data-grid';
import { ChangeSet } from '@spektr/data-grid/dist/externals/dx-grid';
import isEqual from 'fast-deep-equal';
import { every } from 'lodash';
import { forwardRef, ForwardRefRenderFunction, useEffect, useImperativeHandle, useState } from 'react';
import * as Yup from 'yup';

import { useAccordion } from '~/components';
import { NumericEditor } from '~/components/editors';
import { useGetWallTypes } from '~/hooks/api';
import { useQueryParams } from '~/hooks/useQueryParams';
import { useSavingEnabled } from '~/store';
import { FormHandle } from '~/types/form';

const validationRules = Yup.object({
  quantity: Yup.number().label('Quantity').min(0),
});

const defaultColumns: ColumnDef[] = [
  {
    name: 'categoryName',
    title: 'Category',
    width: 150,
    sortingEnabled: true,
  },
  {
    name: 'categoryTypeName',
    title: 'Type',
    width: 300,
    sortingEnabled: true,
  },
  {
    name: 'quantity',
    title: 'Quantity',
    width: 120,
    sortingEnabled: true,
    editingEnabled: true,
    type: 'sum',
    align: 'right',
  },
];

const Content: ForwardRefRenderFunction<FormHandle, {}> = (props, ref) => {
  const { pid: projectId } = useQueryParams('pid');
  const { data: wallTypes = [] } = useGetWallTypes(projectId);

  const [rows, setRows] = useState(wallTypes);
  const [, setSavingEnabled] = useSavingEnabled();
  const { expanded, toggle } = useAccordion();

  useEffect(() => {
    setRows(wallTypes);
  }, [wallTypes]);

  useImperativeHandle(ref, () => ({
    isDirty: () => !isEqual(wallTypes, rows),
    discard: () => {
      setRows(wallTypes);
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
      height="100%"
      typeProviderProps={[
        {
          for: ['quantity'],
          editorComponent: NumericEditor,
        },
      ]}
    />
  );
};

export default forwardRef(Content);
