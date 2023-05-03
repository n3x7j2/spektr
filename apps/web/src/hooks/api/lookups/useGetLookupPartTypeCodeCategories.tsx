import { QueryKeys } from '@spektr/common';
import { useQuery } from '@tanstack/react-query';
import { map } from 'lodash';

import { useRestClient } from '~/hooks/useRestClient';

export const useGetLookupPartTypeCodeCategories = () => {
  const client = useRestClient();

  return useQuery({
    queryKey: [QueryKeys.GetLookupPartTypeCodeCategories],
    queryFn: async () => {
      const result = await client.partTypeCodeCategory.partTypeCodeCategoryGetListDropDownPartTypeCodeCategory({});
      return map(result || [], (s) => ({ value: s.value || '', text: s.text || '' }));
    },
  });
};
