import { QueryKeys } from '@spektr/common';
import { useQuery } from '@tanstack/react-query';

import { useRestClient } from '~/hooks/useRestClient';

export const useGetTeams = () => {
  const client = useRestClient();

  return useQuery({
    queryKey: [QueryKeys.GetTeams],
    queryFn: async () => {
      const result = await client.team.teamGetList({ maxResultCount: 100 });
      return result.items || [];
    },
  });
};
