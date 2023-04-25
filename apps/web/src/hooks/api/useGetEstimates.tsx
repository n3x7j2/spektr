import { QueryKeys, Segments } from '@spektr/common';
import { useQuery } from '@tanstack/react-query';
import { isEmpty } from 'lodash';

import { useRestClient } from '~/hooks/useRestClient';

export const useGetEstimates = (projectId?: string) => {
  const client = useRestClient();

  return useQuery({
    queryKey: [QueryKeys.GetEstimates, projectId],
    enabled: !isEmpty(projectId) && projectId !== Segments.All,
    queryFn: async () => {
      if (!projectId) {
        return [];
      }

      const response = await client.projectEstimate.projectEstimateGetList({
        projectId,
        disablePagination: true,
      });
      return response.items || [];
    },
  });
};
