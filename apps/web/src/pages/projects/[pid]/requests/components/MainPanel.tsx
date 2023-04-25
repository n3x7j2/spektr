import { Box } from '@mui/material';
import { Segments } from '@spektr/common';
import { ColumnDef, DataGrid } from '@spektr/data-grid';
import { RowId } from '@spektr/data-grid/dist/externals/dx-grid';
import { useState } from 'react';

import DateFormatter from '~/components/formatters/DateFormatter';
import { MainComponentProps } from '~/features/app/components';
import { useGetProject, useGetPurchaseRequests } from '~/hooks/api';
import { useQueryParams } from '~/hooks/useQueryParams';

import PageTitle from './PageTitle';

const columns: ColumnDef[] = [
  {
    name: 'purchaseRequestNumber',
    title: 'Request #',
    width: 150,
    sortingEnabled: true,
    groupingEnabled: true,
  },
  {
    name: 'purchaseRequestTypeName',
    title: 'Request Type',
    width: 250,
    sortingEnabled: true,
    groupingEnabled: true,
  },
  {
    name: 'description',
    title: 'Description',
    width: 300,
    sortingEnabled: true,
    groupingEnabled: true,
  },
  {
    name: 'dateTimeRequested',
    title: 'Date Requested',
    width: 140,
    sortingEnabled: true,
    groupingEnabled: true,
  },
  {
    name: 'purchaseRequestStatusName',
    title: 'Status',
    width: 100,
    sortingEnabled: true,
    groupingEnabled: true,
    align: 'right',
  },
];

const MainPanel = (props: MainComponentProps) => {
  const { pid: projectId } = useQueryParams('pid');
  const { data: project, isLoading: isLoadingProject, isError: isProjectError } = useGetProject(projectId);
  const { data: purchaseRequests = [], isLoading: isLoadingPurchaseRequests } = useGetPurchaseRequests(projectId);

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
            rows={purchaseRequests}
            height="calc(100vh - 238px)"
            getRowId={(row) => row.id}
            resizingEnabled
            columnReorderingEnabled
            selectedRows={selectedRows}
            onRowsSelect={setSelectedRows}
            searchingEnabled
            exportingEnabled
            fileName="Purchase-Requests.xlsx"
            typeProviderProps={[
              {
                for: ['dateTimeRequested'],
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
