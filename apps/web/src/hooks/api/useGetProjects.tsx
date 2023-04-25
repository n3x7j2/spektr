import { QueryKeys } from '@spektr/common';
import { useQuery } from '@tanstack/react-query';

import { useRestClient } from '~/hooks/useRestClient';

export const useGetProjects = () => {
  const client = useRestClient();

  return useQuery({
    queryKey: [QueryKeys.GetProjects],
    queryFn: async () => {
      const response = await client.project.projectGetList({ disablePagination: true });
      return response.items || [];
    },
  });
};
