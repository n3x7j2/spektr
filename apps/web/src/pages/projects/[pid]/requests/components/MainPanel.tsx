import { Box } from '@mui/material';
import { QueryParams, Segments } from '@spektr/common';
import { ColumnDef, DataGrid } from '@spektr/data-grid';
import { RowId } from '@spektr/data-grid/dist/externals/dx-grid';
import { first } from 'lodash';
import Router from 'next/router';
import { useEffect, useRef, useState } from 'react';

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
  const { pid: projectId, rid: requestId } = useQueryParams(QueryParams.ProjectId, QueryParams.RequestId);
  const { data: project } = useGetProject(projectId);
  const { data: requests = [] } = useGetPurchaseRequests(projectId);
  const vtRef = useRef();
  const [selectedRows, setSelectedRows] = useState<RowId[]>([]);

  const handleSelect = (rowIds: RowId[]) => {
    const selectedRowId = first(rowIds);
    Router.push(`/projects/${projectId}/requests?rid=${selectedRowId}`);
  };

  useEffect(() => {
    setSelectedRows([requestId]);
    (vtRef.current as any)?.scrollToRow(requestId);
  }, [vtRef, requestId]);

  return (
    <Box sx={{ px: 2, pb: 1.5, bgcolor: 'white' }}>
      {projectId === Segments.All ? (
        <>TODO</>
      ) : (
        <>
          <PageTitle projectName={project?.projectName} />
          <DataGrid
            ref={vtRef}
            defaultColumns={columns}
            rows={requests}
            height="calc(100vh - 238px)"
            getRowId={(row) => row.id}
            resizingEnabled
            columnReorderingEnabled
            selectedRows={selectedRows}
            onRowsSelect={handleSelect}
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
