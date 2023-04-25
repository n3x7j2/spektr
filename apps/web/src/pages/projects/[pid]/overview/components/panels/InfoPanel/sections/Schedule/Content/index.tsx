import { ColumnDef, DataGrid } from '@spektr/data-grid';
import { ChangeSet } from '@spektr/data-grid/dist/externals/dx-grid';
import isEqual from 'fast-deep-equal';
import { every } from 'lodash';
import { forwardRef, ForwardRefRenderFunction, useEffect, useImperativeHandle, useState } from 'react';
import * as Yup from 'yup';

import { DateFormatter, useAccordion } from '~/components';
import { DateEditor } from '~/components/editors';
import { ScheduleStatusEditor, ScheduleStatusFormatter } from '~/features/project/components';
import { useGetSchedules } from '~/hooks/api';
import { useQueryParams } from '~/hooks/useQueryParams';
import { useSavingEnabled } from '~/store';
import { FormHandle } from '~/types/form';

const validationRules = Yup.object({
  eventDate: Yup.date().label('Date').typeError('Invalid Date').nullable(),
});

const defaultColumns: ColumnDef[] = [
  {
    name: 'eventTypeName',
    title: 'Event',
    width: 180,
    sortingEnabled: true,
  },
  {
    name: 'eventDate',
    title: 'Date',
    width: 120,
    sortingEnabled: true,
    editingEnabled: true,
    validationRules,
  },
  {
    name: 'note',
    title: 'Notes',
    width: 120,
    sortingEnabled: true,
    editingEnabled: true,
    getCellValue: (row) => row.note || '',
  },
  {
    name: 'status',
    title: 'Status',
    width: 100,
    align: 'right',
    sortingEnabled: true,
    editingEnabled: true,
    popperPlacement: 'bottom-end',
  },
];

const Content: ForwardRefRenderFunction<FormHandle, {}> = (props, ref) => {
  const { pid: projectId } = useQueryParams('pid');
  const { data: schedules = [] } = useGetSchedules(projectId);

  const [rows, setRows] = useState(schedules);
  const [, setSavingEnabled] = useSavingEnabled();
  const { expanded, toggle } = useAccordion();

  useEffect(() => {
    setRows(schedules);
  }, [schedules]);

  useImperativeHandle(ref, () => ({
    isDirty: () => !isEqual(schedules, rows),
    discard: () => {
      setRows(schedules);
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
          for: ['eventDate'],
          editorComponent: DateEditor,
          formatterComponent: DateFormatter,
        },
        {
          for: ['status'],
          editorComponent: ScheduleStatusEditor,
          formatterComponent: ScheduleStatusFormatter,
        },
      ]}
    />
  );
};

export default forwardRef(Content);
