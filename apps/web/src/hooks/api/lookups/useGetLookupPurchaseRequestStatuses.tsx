import { QueryKeys } from '@spektr/common';
import { useQuery } from '@tanstack/react-query';
import { map } from 'lodash';

import { useRestClient } from '~/hooks/useRestClient';

export const useGetLookupPurchaseRequestStatuses = () => {
  const client = useRestClient();

  return useQuery({
    queryKey: [QueryKeys.GetLookupPurchaseRequestStatuses],
    queryFn: async () => {
      const response = await client.purchaseRequestStatus.purchaseRequestStatusGetList({ disablePagination: true });
      return map(response.items || [], (s) => ({
        value: s.id || '',
        text: s.status || '',
        type: s.statusType,
        isCanEdit: s.isCanEdit || false,
        isDefault: s.isDefault || false,
        isCompleted: s.isCompleted || false,
        isInCart: s.isInCart || false,
        isRequested: s.isRequested || false,
      }));
    },
  });
};
