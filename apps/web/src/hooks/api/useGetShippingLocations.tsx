import { QueryKeys, Segments } from '@spektr/common';
import { useQuery } from '@tanstack/react-query';
import { isEmpty } from 'lodash';

import { useRestClient } from '~/hooks/useRestClient';

export const useGetShippingLocations = (projectId?: string) => {
  const client = useRestClient();

  return useQuery({
    queryKey: [QueryKeys.GetShippingLocations, projectId],
    enabled: !isEmpty(projectId) && projectId !== Segments.All,
    queryFn: async () => {
      if (!projectId) {
        return [];
      }

      const response = await client.projectShippingLocation.projectShippingLocationGetProjectShippingLocationList({
        projectId,
        disablePagination: true,
      });
      return response.items || [];
    },
  });
};
