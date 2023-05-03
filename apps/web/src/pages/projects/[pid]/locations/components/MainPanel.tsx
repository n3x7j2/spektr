import { Box } from '@mui/material';
import { QueryParams, Segments } from '@spektr/common';
import { ColumnDef, DataGrid, VirtualTable } from '@spektr/data-grid';
import { RowId } from '@spektr/data-grid/dist/externals/dx-grid';
import { first } from 'lodash';
import Router from 'next/router';
import { useEffect, useRef, useState } from 'react';

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
  const { pid: projectId, lid: locationId } = useQueryParams(QueryParams.ProjectId, QueryParams.LocationId);
  const { data: project } = useGetProject(projectId);
  const { data: shippingLocations = [] } = useGetShippingLocations(projectId);
  const vtRef = useRef();
  const [selectedRows, setSelectedRows] = useState<RowId[]>([]);

  const handleSelect = (rowIds: RowId[]) => {
    const selectedRowId = first(rowIds);
    Router.push(`/projects/${projectId}/locations?lid=${selectedRowId}`);
  };

  useEffect(() => {
    setSelectedRows([locationId]);
    (vtRef.current as any)?.scrollToRow(locationId);
  }, [vtRef, locationId]);

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
            rows={shippingLocations}
            height="calc(100vh - 238px)"
            getRowId={(row) => row.id}
            resizingEnabled
            columnReorderingEnabled
            selectedRows={selectedRows}
            onRowsSelect={handleSelect}
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
