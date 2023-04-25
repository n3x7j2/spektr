import { QueryKeys } from '@spektr/common';
import { useQuery } from '@tanstack/react-query';
import { map } from 'lodash';

import { useRestClient } from '~/hooks/useRestClient';

export const useLookupProjectTypes = () => {
  const client = useRestClient();

  return useQuery({
    queryKey: [QueryKeys.GetLookupProjectTypes],
    queryFn: async () => {
      const result = await client.projectType.projectTypeGetListDropDownProjectType({});
      return map(result, (s) => ({ value: s.value || '', text: s.text || '' })) || [];
    },
  });
};
