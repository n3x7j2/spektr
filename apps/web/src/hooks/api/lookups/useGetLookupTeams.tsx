import { QueryKeys } from '@spektr/common';
import { useQuery } from '@tanstack/react-query';
import { map } from 'lodash';

import { useRestClient } from '~/hooks/useRestClient';

export const useGetLookupTeams = () => {
  const client = useRestClient();

  return useQuery({
    queryKey: [QueryKeys.GetLookupTeams],
    queryFn: async () => {
      const result = await client.team.teamGetListDropDownTeam({});
      return map(result || [], (s) => ({ value: s.value || '', text: s.text || '' }));
    },
  });
};
