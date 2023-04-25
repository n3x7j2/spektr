import { Box } from '@mui/material';
import { Segments } from '@spektr/common';
import { ColumnDef, DataGrid } from '@spektr/data-grid';
import { RowId } from '@spektr/data-grid/dist/externals/dx-grid';
import { useState } from 'react';

import BooleanFormatter from '~/components/formatters/BooleanFormatter';
import { MainComponentProps } from '~/features/app/components';
import { useGetProject, useGetShippingLocations } from '~/hooks/api';
import { useQueryParams } from '~/hooks/useQueryParams';

import PageTitle from './PageTitle';

const columns: ColumnDef[] = [
  {
    name: 'destinationName',
    title: 'Destination Name',
    width: 200,
    sortingEnabled: true,
    groupingEnabled: true,
  },
  {
    name: 'contactOnSite',
    title: 'Contact On Site',
    width: 200,
    sortingEnabled: true,
    groupingEnabled: true,
  },
  {
    name: 'contactPhoneNumber',
    title: 'Phone',
    width: 150,
    sortingEnabled: true,
    groupingEnabled: true,
  },
  {
    name: 'contactEmail',
    title: 'Email',
    width: 200,
    sortingEnabled: true,
    groupingEnabled: true,
  },
  {
    name: 'directionsMap',
    title: 'Directions/Map',
    width: 150,
    align: 'right',
    sortingEnabled: true,
    groupingEnabled: true,
  },
];

const MainPanel = (props: MainComponentProps) => {
  const { pid: projectId } = useQueryParams('pid');
  const { data: project, isLoading: isLoadingProject, isError: isProjectError } = useGetProject(projectId);
  const { data: shippingLocations = [], isLoading: isLoadingShippingLocations } = useGetShippingLocations(projectId);

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
            rows={shippingLocations}
            height="calc(100vh - 238px)"
            resizingEnabled
            columnReorderingEnabled
            selectedRows={selectedRows}
            onRowsSelect={setSelectedRows}
            searchingEnabled
            exportingEnabled
            fileName="Shipping-Locations.xlsx"
            typeProviderProps={[{ for: ['directionsMap'], formatterComponent: BooleanFormatter }]}
          />
        </>
      )}
    </Box>
  );
};

export default MainPanel;
