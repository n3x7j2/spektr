import { QueryKeys } from '@spektr/common';
import { useQuery } from '@tanstack/react-query';
import { map } from 'lodash';

import { useRestClient } from '~/hooks/useRestClient';

export const useLookupProjectStatus = () => {
  const client = useRestClient();

  return useQuery({
    queryKey: [QueryKeys.GetLookupProjectStatus],
    queryFn: async () => {
      const result = await client.project.projectGetListDropDownProjectStatus({});
      return map(result, (s) => ({ value: s.value || 0, text: s.text || '' })) || [];
    },
  });
};
