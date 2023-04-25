import { QueryKeys, Segments } from '@spektr/common';
import { useQuery } from '@tanstack/react-query';
import { isEmpty } from 'lodash';

import { useRestClient } from '~/hooks/useRestClient';

export const useGetSchedules = (projectId?: string) => {
  const client = useRestClient();

  return useQuery({
    queryKey: [QueryKeys.GetSchedules, projectId],
    enabled: !isEmpty(projectId) && projectId !== Segments.All,
    queryFn: async () => {
      if (!projectId) {
        return [];
      }

      const response = await client.projectSchedule.projectScheduleGetList({
        projectId,
        disablePagination: true,
      });
      return response.items || [];
    },
  });
};
