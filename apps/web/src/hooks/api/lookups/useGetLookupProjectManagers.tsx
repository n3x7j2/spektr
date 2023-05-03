import { QueryKeys } from '@spektr/common';
import { useQuery } from '@tanstack/react-query';
import { map } from 'lodash';

import { useRestClient } from '~/hooks/useRestClient';

export const useGetLookupProjectManagers = () => {
  const client = useRestClient();

  return useQuery({
    queryKey: [QueryKeys.GetLookupProjectManagers],
    queryFn: async () => {
      const result = await client.project.projectGetListDropDownProjectManager({});
      return map(result || [], (s) => ({ value: s.value || '', text: s.text || '' }));
    },
  });
};
