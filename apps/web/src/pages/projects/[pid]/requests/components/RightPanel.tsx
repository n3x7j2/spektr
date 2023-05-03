import { Actions, QueryParams } from '@spektr/common';
import { some } from 'lodash';
import { useMemo } from 'react';

import { RightComponentProps } from '~/features/app/components';
import { useGetPurchaseRequest, useGetPurchaseRequests } from '~/hooks/api';
import { useQueryParams } from '~/hooks/useQueryParams';

import { RightPanelLayout } from '../../components';
import InfoPanel from './panels/InfoPanel';

const RightPanel = (props: RightComponentProps) => {
  const {
    pid: projectId,
    rid: requestId,
    action,
  } = useQueryParams(QueryParams.ProjectId, QueryParams.RequestId, QueryParams.Action);

  const { data: request } = useGetPurchaseRequest(requestId);
  const { data: requests = [] } = useGetPurchaseRequests(projectId);

  const isShowInfoPanel = useMemo(
    () => some(requests, (l) => l.id === requestId) || (!request && action === Actions.CreateRequest),
    [action, request, requestId, requests],
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
