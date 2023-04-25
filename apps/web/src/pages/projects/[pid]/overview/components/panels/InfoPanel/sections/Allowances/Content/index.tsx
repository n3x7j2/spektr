import { ColumnDef, DataGrid } from '@spektr/data-grid';
import { ChangeSet } from '@spektr/data-grid/dist/externals/dx-grid';
import isEqual from 'fast-deep-equal';
import { every } from 'lodash';
import { forwardRef, ForwardRefRenderFunction, useEffect, useImperativeHandle, useState } from 'react';
import * as Yup from 'yup';

import { useAccordion } from '~/components';
import { NumericEditor } from '~/components/editors';
import { useGetAllowances } from '~/hooks/api';
import { useQueryParams } from '~/hooks/useQueryParams';
import { useSavingEnabled } from '~/store';
import { FormHandle } from '~/types/form';

const validationRules = Yup.object({
  quantity: Yup.number().label('Quantity').min(0),
});

const defaultColumns: ColumnDef[] = [
  {
    name: 'typeName',
    title: 'Type',
    width: 450,
    sortingEnabled: true,
  },
  {
    name: 'quantity',
    title: 'Quantity',
    width: 120,
    sortingEnabled: true,
    editingEnabled: true,
    align: 'right',
  },
];

const Content: ForwardRefRenderFunction<FormHandle, {}> = (props, ref) => {
  const { pid: projectId } = useQueryParams('pid');
  const { data: allowances = [] } = useGetAllowances(projectId);

  const [rows, setRows] = useState(allowances);
  const [, setSavingEnabled] = useSavingEnabled();
  const { expanded, toggle } = useAccordion();

  useEffect(() => {
    setRows(allowances);
  }, [allowances]);

  useImperativeHandle(ref, () => ({
    isDirty: () => !isEqual(allowances, rows),
    discard: () => {
      setRows(allowances);
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
