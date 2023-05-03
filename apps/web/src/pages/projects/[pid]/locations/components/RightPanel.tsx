import { Actions, QueryParams } from '@spektr/common';
import { some } from 'lodash';
import { useMemo } from 'react';

import { RightComponentProps } from '~/features/app/components';
import { useGetShippingLocation, useGetShippingLocations } from '~/hooks/api';
import { useQueryParams } from '~/hooks/useQueryParams';

import { RightPanelLayout } from '../../components';
import InfoPanel from './panels/InfoPanel';

const RightPanel = (props: RightComponentProps) => {
  const {
    pid: projectId,
    lid: locationId,
    action,
  } = useQueryParams(QueryParams.ProjectId, QueryParams.LocationId, QueryParams.Action);

  const { data: location } = useGetShippingLocation(locationId);
  const { data: locations = [] } = useGetShippingLocations(projectId);

  const isShowInfoPanel = useMemo(
    () => some(locations, (l) => l.id === locationId) || (!location && action === Actions.CreateLocation),
    [action, location, locationId, locations],
  );
  return (
    <RightPanelLayout
      slots={{
        InfoComponent: isShowInfoPanel ? <InfoPanel /> : null,
      }}
    />
  );
};

export default RightPanel;
