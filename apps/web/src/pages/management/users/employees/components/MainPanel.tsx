import { Box } from '@mui/material';
import { ColumnDef, DataGrid } from '@spektr/data-grid';
import { RowId } from '@spektr/data-grid/dist/externals/dx-grid';
import { filter, isEmpty, join, trim } from 'lodash';
import { useState } from 'react';

import { MainComponentProps } from '~/features/app/components';
import { useGetEmployees } from '~/hooks/api';

import PageTitle from './PageTitle';

const columns: ColumnDef[] = [
  {
    name: 'employeeType',
    title: 'Employee Type',
    width: 200,
    sortingEnabled: true,
    groupingEnabled: true,
  },
  {
    name: 'employeeName',
    title: 'Employee Name',
    width: 200,
    sortingEnabled: true,
    groupingEnabled: true,
    getCellValue: (row) =>
      join(
        filter([row.firstName, row.middleName, row.lastName], (n) => !isEmpty(trim(n))),
        ' ',
      ),
  },
  {
    name: 'position',
    title: 'Employee Position',
    width: 350,
    sortingEnabled: true,
    groupingEnabled: true,
  },
  {
    name: 'employeeStatus',
    title: 'Status',
    align: 'right',
    sortingEnabled: true,
    groupingEnabled: true,
  },
];

const MainPanel = (props: MainComponentProps) => {
  const { data: employees = [] } = useGetEmployees();
  const [selectedRows, setSelectedRows] = useState<RowId[]>([]);

  return (
    <Box sx={{ px: 2, pb: 1.5, bgcolor: 'white' }}>
      <PageTitle />
      <DataGrid
        defaultColumns={columns}
        rows={employees}
        height="calc(100vh - 238px)"
        getRowId={(row) => row.id}
        resizingEnabled
        columnReorderingEnabled
        selectedRows={selectedRows}
        onRowsSelect={setSelectedRows}
        searchingEnabled
        exportingEnabled
        fileName="Employees.xlsx"
      />
    </Box>
  );
};

export default MainPanel;
