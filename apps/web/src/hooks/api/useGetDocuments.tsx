import { QueryKeys, Segments } from '@spektr/common';
import { useQuery } from '@tanstack/react-query';
import { isEmpty } from 'lodash';

import { useRestClient } from '~/hooks/useRestClient';

export const useGetDocuments = (projectId?: string) => {
  const client = useRestClient();

  return useQuery({
    queryKey: [QueryKeys.GetDocuments, projectId],
    enabled: !isEmpty(projectId) && projectId !== Segments.All,
    queryFn: async () => {
      if (!projectId) {
        return [];
      }

      const response = await client.projectDocumentType.projectDocumentTypeGetAllDocument({
        projectId,
      });
      return response || [];
    },
  });
};
