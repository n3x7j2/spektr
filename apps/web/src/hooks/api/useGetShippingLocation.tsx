import { QueryKeys } from '@spektr/common';
import { useQuery } from '@tanstack/react-query';

import { useRestClient } from '~/hooks/useRestClient';

export const useGetShippingLocation = (locationId?: string) => {
  const client = useRestClient();

  return useQuery({
    queryKey: [QueryKeys.GetShippingLocation, locationId],
    queryFn: async () => {
      if (locationId) {
        return await client.projectShippingLocation.projectShippingLocationGet({ id: locationId });
      }

      return null;
    },
  });
};
