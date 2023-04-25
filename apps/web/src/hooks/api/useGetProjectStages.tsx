import { QueryKeys } from '@spektr/common';
import { useQuery } from '@tanstack/react-query';

import { useRestClient } from '~/hooks/useRestClient';

export const useGetProjectStages = () => {
  const client = useRestClient();

  return useQuery({
    queryKey: [QueryKeys.GetProjectStages],
    queryFn: async () => {
      const response = await client.projectStage.projectStageGetList({ disablePagination: true });
      return response.items || [];
    },
  });
};
