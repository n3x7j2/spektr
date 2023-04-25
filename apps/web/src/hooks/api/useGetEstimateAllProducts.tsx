import { QueryKeys, Segments } from '@spektr/common';
import { useQuery } from '@tanstack/react-query';
import { isEmpty } from 'lodash';

import { useRestClient } from '~/hooks/useRestClient';

export const useGetEstimateAllProducts = (projectId?: string) => {
  const client = useRestClient();

  return useQuery({
    queryKey: [QueryKeys.GetEstimateAllProducts, projectId],
    enabled: !isEmpty(projectId) && projectId !== Segments.All,
    queryFn: async () => {
      if (!projectId) {
        return [];
      }

      const response = await client.projectEstimate.projectEstimateGetListSummary({
        projectId,
      });
      return response || [];
    },
  });
};
