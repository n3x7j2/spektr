import { QueryKeys } from '@spektr/common';
import { notifications } from '@spektr/notifications';
import { ProjectShippingLocationCreateDto } from '@spektr/rest';
import { useMutation, useQueryClient } from '@tanstack/react-query';

import { useRestClient } from '../useRestClient';

export const useCreateShippingLocation = () => {
  const queryClient = useQueryClient();
  const client = useRestClient();

  return useMutation({
    mutationFn: async (formData: { projectId: string; body: ProjectShippingLocationCreateDto }) => {
      return await client.projectShippingLocation.projectShippingLocationCreateProjectShippingLocation({
        projectId: formData.projectId,
        requestBody: formData.body,
      });
    },
    onSuccess: (data, { projectId }) => {
      queryClient.invalidateQueries({ queryKey: [QueryKeys.GetShippingLocations, projectId] });

      notifications.show({
        severity: 'success',
        variant: 'filled',
        message: 'The location created successfully',
      });
    },
  });
};
