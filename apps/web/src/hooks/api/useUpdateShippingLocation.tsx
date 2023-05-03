import { QueryKeys } from '@spektr/common';
import { notifications } from '@spektr/notifications';
import { ProjectShippingLocationUpdateDto } from '@spektr/rest';
import { useMutation, useQueryClient } from '@tanstack/react-query';

import { useRestClient } from '../useRestClient';

export const useUpdateShippingLocation = () => {
  const queryClient = useQueryClient();
  const client = useRestClient();

  return useMutation({
    mutationFn: async (formData: { projectId: string; locationId: string; body: ProjectShippingLocationUpdateDto }) => {
      return await client.projectShippingLocation.projectShippingLocationUpdateProjectShippingLocation({
        id: formData.locationId,
        requestBody: formData.body,
      });
    },
    onSuccess: (data, { projectId, locationId }) => {
      queryClient.invalidateQueries({ queryKey: [QueryKeys.GetShippingLocations, projectId] });
      queryClient.invalidateQueries({ queryKey: [QueryKeys.GetShippingLocation, locationId] });

      notifications.show({
        severity: 'success',
        variant: 'filled',
        message: 'The location updated successfully',
      });
    },
  });
};
