import { Box } from '@mui/material';
import { Segments } from '@spektr/common';
import { ColumnDef, DataGrid, VirtualTable } from '@spektr/data-grid';
import { RowId } from '@spektr/data-grid/dist/externals/dx-grid';
import { first } from 'lodash';
import Router from 'next/router';
import { useEffect, useRef, useState } from 'react';

import DateFormatter from '~/components/formatters/DateFormatter';
import { MainComponentProps } from '~/features/app/components';
import { useGetProjects } from '~/hooks/api';
import { useQueryParams } from '~/hooks/useQueryParams';

import PageTitle from './PageTitle';

const columns: ColumnDef[] = [
  {
    name: 'projectTeamName',
    title: 'Team',
    width: 150,
    sortingEnabled: true,
    groupingEnabled: true,
  },
  {
    name: 'projectName',
    title: 'Project Name',
    width: 300,
    sortingEnabled: true,
    groupingEnabled: true,
  },
  {
    name: 'projectNumber',
    title: 'Project Number',
    width: 150,
    sortingEnabled: true,
    groupingEnabled: true,
  },
  {
    name: 'projectManagerName',
    title: 'Project Manager',
    width: 150,
    sortingEnabled: true,
    groupingEnabled: true,
  },
  {
    name: 'creationTime',
    title: 'Site Date',
    width: 100,
    sortingEnabled: true,
    groupingEnabled: true,
  },
  {
    name: 'projectStatusName',
    title: 'Status',
    width: 100,
    align: 'right',
    sortingEnabled: true,
    groupingEnabled: true,
  },
];

const MainPanel = (props: MainComponentProps) => {
  const { data: projects = [] } = useGetProjects();
  const { pid: projectId } = useQueryParams('pid');
  const vtRef = useRef();

  const [selectedRows, setSelectedRows] = useState<RowId[]>([]);

  const handleSelect = (rowIds: RowId[]) => {
    const selectedRowId = first(rowIds);
    Router.push(`/projects/${selectedRowId}/overview`);
  };

  useEffect(() => {
    if (projectId !== Segments.All) {
      setSelectedRows([projectId]);
      (vtRef.current as any)?.scrollToRow(projectId);
    } else {
      setSelectedRows([]);
      (vtRef.current as any)?.scrollToRow(VirtualTable.TOP_POSITION);
    }
  }, [vtRef, projectId]);

  return (
    <Box sx={{ px: 2, pb: 1.5, bgcolor: 'white' }}>
      <PageTitle />
      <DataGrid
        ref={vtRef}
        defaultColumns={columns}
        rows={projects}
        height="calc(100vh - 238px)"
        getRowId={(row) => row.id}
        searchingEnabled
        resizingEnabled
        columnReorderingEnabled
        selectedRows={selectedRows}
        onRowsSelect={handleSelect}
        exportingEnabled
        fileName="Projects.xlsx"
        typeProviderProps={[
          {
            for: ['creationTime'],
            formatterComponent: DateFormatter,
          },
        ]}
      />
    </Box>
  );
};

export default MainPanel;
