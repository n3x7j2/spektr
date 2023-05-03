import { QueryKeys } from '@spektr/common';
import { useQuery } from '@tanstack/react-query';
import { map } from 'lodash';

import { useRestClient } from '~/hooks/useRestClient';

export const useGetLookupCountries = () => {
  const client = useRestClient();

  return useQuery({
    queryKey: [QueryKeys.GetLookupCountries],
    queryFn: async () => {
      const result = await client.country.countryGetListDropDownCountry({});
      return map(result || [], (s) => ({ value: s.value || '', text: s.text || '' }));
    },
  });
};
