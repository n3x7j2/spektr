import { QueryKeys } from '@spektr/common';
import { useQuery } from '@tanstack/react-query';

import { useRestClient } from '~/hooks/useRestClient';

export const useGetAppConfig = () => {
  const client = useRestClient();

  return useQuery({
    queryKey: [QueryKeys.GetAppConfigData],
    queryFn: async () => {
      return await client.erpApplicationConfiguration.erpApplicationConfigurationGet();
    },
  });
};
