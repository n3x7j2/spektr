import { QueryKeys } from '@spektr/common';
import { useQuery } from '@tanstack/react-query';

import { useRestClient } from '~/hooks/useRestClient';

export const useGetFields = () => {
  const client = useRestClient();

  return useQuery({
    queryKey: [QueryKeys.GetFields],
    queryFn: async () => {
      const response = await client.fieldDefinition.fieldDefinitionGetAll({});
      return response.items || [];
    },
  });
};
