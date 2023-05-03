import { QueryKeys } from '@spektr/common';
import { useQuery } from '@tanstack/react-query';
import { map } from 'lodash';

import { useRestClient } from '~/hooks/useRestClient';

export const useGetLookupPurchaseRequestTypes = () => {
  const client = useRestClient();

  return useQuery({
    queryKey: [QueryKeys.GetLookupPurchaseRequestTypes],
    queryFn: async () => {
      const response = await client.purchaseRequestType.purchaseRequestTypeGetList({ disablePagination: true });
      return map(response.items || [], (s) => ({ value: s.id || '', text: s.name || '', type: s.type || null }));
    },
  });
};
