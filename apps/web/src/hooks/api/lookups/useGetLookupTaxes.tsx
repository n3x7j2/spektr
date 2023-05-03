import { QueryKeys } from '@spektr/common';
import { useQuery } from '@tanstack/react-query';
import { map } from 'lodash';

import { useRestClient } from '~/hooks/useRestClient';

export const useGetLookupTaxes = () => {
  const client = useRestClient();

  return useQuery({
    queryKey: [QueryKeys.GetLookupTaxes],
    queryFn: async () => {
      const response = await client.projectShippingLocation.projectShippingLocationGeFederalTaxLookup({});
      return map(response.items || [], (s) => ({ value: s || '', text: s || '' }));
    },
  });
};
