import { Box } from '@mui/material';
import { Segments } from '@spektr/common';
import { ColumnDef, DataGrid } from '@spektr/data-grid';
import { RowId } from '@spektr/data-grid/dist/externals/dx-grid';
import { useState } from 'react';

import DateFormatter from '~/components/formatters/DateFormatter';
import { MainComponentProps } from '~/features/app/components';
import { useGetProject, useGetServiceTasks } from '~/hooks/api';
import { useQueryParams } from '~/hooks/useQueryParams';

import PageTitle from './PageTitle';

const columns: ColumnDef[] = [
  {
    name: 'projectNumber',
    title: 'Project #',
    width: 100,
    sortingEnabled: true,
    groupingEnabled: true,
  },
  {
    name: 'purchaseOrderNumber',
    title: 'PO #',
    width: 80,
    sortingEnabled: true,
    groupingEnabled: true,
  },
  {
    name: 'serviceTaskNr',
    title: 'S.Task #',
    width: 100,
    sortingEnabled: true,
    groupingEnabled: true,
  },
  {
    name: 'serviceTypeName',
    title: 'Task',
    width: 90,
    sortingEnabled: true,
    groupingEnabled: true,
  },
  {
    name: 'supplierName',
    title: 'Supplier',
    width: 100,
    sortingEnabled: true,
    groupingEnabled: true,
  },
  {
    name: 'componentName',
    title: 'Component',
    width: 120,
    sortingEnabled: true,
    groupingEnabled: true,
  },
  {
    name: 'serviceDate',
    title: 'Service Date',
    width: 120,
    sortingEnabled: true,
    groupingEnabled: true,
  },
  {
    name: 'estQty',
    title: 'Est. Qty',
    width: 100,
    sortingEnabled: true,
    groupingEnabled: true,
  },
  {
    name: 'estQtyUnitName',
    title: 'Unit',
    width: 80,
    sortingEnabled: true,
    groupingEnabled: true,
  },
  {
    name: 'taskStatus',
    title: 'Status',
    width: 80,
    sortingEnabled: true,
    groupingEnabled: true,
    align: 'right',
  },
];

const MainPanel = (props: MainComponentProps) => {
  const { pid: projectId } = useQueryParams('pid');
  const { data: project, isLoading: isLoadingProject, isError: isProjectError } = useGetProject(projectId);
  const { data: serviceTasks = [], isLoading: isLoadingServiceTasks } = useGetServiceTasks(projectId);

  const [selectedRows, setSelectedRows] = useState<RowId[]>([]);

  return (
    <Box sx={{ px: 2, pb: 1.5, bgcolor: 'white' }}>
      {projectId === Segments.All ? (
        <>TODO</>
      ) : (
        <>
          <PageTitle projectName={project?.projectName} />
          <DataGrid
            defaultColumns={columns}
            rows={serviceTasks}
            height="calc(100vh - 238px)"
            getRowId={(row) => row.id}
            resizingEnabled
            columnReorderingEnabled
            selectedRows={selectedRows}
            onRowsSelect={setSelectedRows}
            searchingEnabled
            exportingEnabled
            fileName="Services.xlsx"
            typeProviderProps={[
              {
                for: ['serviceDate'],
                formatterComponent: DateFormatter,
              },
            ]}
          />
        </>
      )}
    </Box>
  );
};

export default MainPanel;
