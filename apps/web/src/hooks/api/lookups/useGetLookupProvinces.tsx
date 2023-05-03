import { QueryKeys } from '@spektr/common';
import { useQuery } from '@tanstack/react-query';
import { map } from 'lodash';

import { useRestClient } from '~/hooks/useRestClient';

export const useGetLookupProvinces = (countryId?: string | null) => {
  const client = useRestClient();

  return useQuery({
    queryKey: [QueryKeys.GetLookupProvinces, countryId],
    queryFn: async () => {
      if (countryId) {
        const result = await client.countriesStatesProvince.countriesStatesProvinceGetListDropDownCountryState({
          countryId,
        });
        return map(result, (s) => ({ value: s.value || '', text: s.text || '' })) || [];
      } else {
        return [];
      }
    },
  });
};
