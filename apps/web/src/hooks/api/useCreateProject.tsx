import { QueryKeys } from '@spektr/common';
import { notifications } from '@spektr/notifications';
import { ProjectCreateDto } from '@spektr/rest';
import { useMutation, useQueryClient } from '@tanstack/react-query';

import { useRestClient } from '../useRestClient';

export const useCreateProject = () => {
  const queryClient = useQueryClient();
  const client = useRestClient();

  return useMutation({
    mutationFn: async (formData: { body: ProjectCreateDto }) => {
      return await client.project.projectCreate({
        requestBody: formData.body,
      });
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: [QueryKeys.GetProjects] });
      queryClient.invalidateQueries({ queryKey: [QueryKeys.GetProjectNodes] });

      notifications.show({
        severity: 'success',
        variant: 'filled',
        message: 'The project created successfully',
      });
    },
  });
};
