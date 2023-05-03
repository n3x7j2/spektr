import { QueryKeys } from '@spektr/common';
import { useQuery } from '@tanstack/react-query';
import { map } from 'lodash';

import { useRestClient } from '~/hooks/useRestClient';

export const useGetLookupProjects = () => {
  const client = useRestClient();

  return useQuery({
    queryKey: [QueryKeys.GetLookupProjects],
    queryFn: async () => {
      const result = await client.project.projectGetListDropDownProject({});
      return map(result || [], (p) => ({
        value: p.projectId || '',
        text: p.projectName || '',
        projectNumber: p.projectNumber || '',
      }));
    },
  });
};
