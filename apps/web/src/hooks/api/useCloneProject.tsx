import { QueryKeys } from '@spektr/common';
import { notifications } from '@spektr/notifications';
import { ProjectCloneDto } from '@spektr/rest';
import { useMutation, useQueryClient } from '@tanstack/react-query';

import { useRestClient } from '../useRestClient';

export const useCloneProject = () => {
  const queryClient = useQueryClient();
  const client = useRestClient();

  return useMutation({
    mutationFn: async (formData: { body: ProjectCloneDto }) => {
      return await client.project.projectClone({
        requestBody: formData.body,
      });
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: [QueryKeys.GetProjects] });
      queryClient.invalidateQueries({ queryKey: [QueryKeys.GetProjectNodes] });

      notifications.show({
        severity: 'success',
        variant: 'filled',
        message: 'The project duplicated successfully',
      });
    },
  });
};
