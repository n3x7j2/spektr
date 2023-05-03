import { QueryKeys } from '@spektr/common';
import { notifications } from '@spektr/notifications';
import { useMutation, useQueryClient } from '@tanstack/react-query';

import { useRestClient } from '../useRestClient';

export const useDeletePurchaseRequest = () => {
  const queryClient = useQueryClient();
  const client = useRestClient();

  return useMutation({
    mutationFn: async (params: { projectId: string; requestId: string }) => {
      return await client.purchaseRequest.purchaseRequestDelete({
        id: params.requestId,
      });
    },
    onSuccess: (data, { projectId }) => {
      queryClient.invalidateQueries({ queryKey: [QueryKeys.GetPurchaseRequests, projectId] });
      notifications.clean();
      notifications.show({
        severity: 'success',
        variant: 'filled',
        message: 'The request deleted successfully',
      });
    },
  });
};
