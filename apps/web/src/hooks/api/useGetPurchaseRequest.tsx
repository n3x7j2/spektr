import { QueryKeys } from '@spektr/common';
import { useQuery } from '@tanstack/react-query';

import { useRestClient } from '~/hooks/useRestClient';

export const useGetPurchaseRequest = (requestId?: string) => {
  const client = useRestClient();

  return useQuery({
    queryKey: [QueryKeys.GetPurchaseRequest, requestId],
    queryFn: async () => {
      if (requestId) {
        return await client.purchaseRequest.purchaseRequestGet({ id: requestId });
      }

      return null;
    },
  });
};
