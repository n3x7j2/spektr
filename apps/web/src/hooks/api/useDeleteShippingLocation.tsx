import { QueryKeys } from '@spektr/common';
import { notifications } from '@spektr/notifications';
import { useMutation, useQueryClient } from '@tanstack/react-query';

import { useRestClient } from '../useRestClient';

export const useDeleteShippingLocation = () => {
  const queryClient = useQueryClient();
  const client = useRestClient();

  return useMutation({
    mutationFn: async (params: { projectId: string; locationId: string }) => {
      return await client.projectShippingLocation.projectShippingLocationDeleteProjectShippingLocation({
        id: params.locationId,
      });
    },
    onSuccess: (data, { projectId }) => {
      queryClient.invalidateQueries({ queryKey: [QueryKeys.GetShippingLocations, projectId] });
      notifications.clean();
      notifications.show({
        severity: 'success',
        variant: 'filled',
        message: 'The shipping location deleted successfully',
      });
    },
  });
};
