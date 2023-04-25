import { QueryKeys } from '@spektr/common';
import { useQuery } from '@tanstack/react-query';

import { useRestClient } from '~/hooks/useRestClient';

export const useGetFieldGroups = () => {
  const client = useRestClient();

  return useQuery({
    queryKey: [QueryKeys.GetFieldGroups],
    queryFn: async () => {
      const response = await client.inventoryDynamicFieldGroupDefinition.inventoryDynamicFieldGroupDefinitionGetList({
        disablePagination: true,
      });
      return response.items || [];
    },
  });
};
