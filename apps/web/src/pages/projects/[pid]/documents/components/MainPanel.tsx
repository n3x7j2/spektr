import { Box } from '@mui/material';
import { Segments } from '@spektr/common';
import { ColumnDef, DataGrid } from '@spektr/data-grid';
import { RowId } from '@spektr/data-grid/dist/externals/dx-grid';
import { useState } from 'react';

import { DateFormatter } from '~/components';
import { MainComponentProps } from '~/features/app/components';
import { useGetDocuments, useGetProject } from '~/hooks/api';
import { useQueryParams } from '~/hooks/useQueryParams';

import PageTitle from './PageTitle';

const columns: ColumnDef[] = [
  {
    name: 'documentId',
    title: 'Document #',
    width: 150,
    sortingEnabled: true,
    groupingEnabled: true,
  },
  {
    name: 'documentType',
    title: 'Document Type',
    width: 250,
    sortingEnabled: true,
    groupingEnabled: true,
  },
  {
    name: 'title',
    title: 'Document Title',
    width: 300,
    sortingEnabled: true,
    groupingEnabled: true,
  },
  {
    name: 'dateSent',
    title: 'Date Sent',
    width: 140,
    sortingEnabled: true,
    groupingEnabled: true,
  },
  {
    name: 'status',
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
  const { data: documents = [], isLoading: isLoadingDocuments } = useGetDocuments(projectId);

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
            rows={documents}
            height="calc(100vh - 238px)"
            getRowId={(row) => row.id}
            resizingEnabled
            columnReorderingEnabled
            selectedRows={selectedRows}
            onRowsSelect={setSelectedRows}
            searchingEnabled
            exportingEnabled
            fileName="Documents.xlsx"
            typeProviderProps={[
              {
                for: ['dateSent'],
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
