import { QueryKeys } from '@spektr/common';
import { notifications } from '@spektr/notifications';
import { useMutation, useQueryClient } from '@tanstack/react-query';

import { useRestClient } from '../useRestClient';

export const useDeleteProjectFromFavourites = () => {
  const queryClient = useQueryClient();
  const client = useRestClient();

  return useMutation({
    mutationFn: async (id: string) => {
      return await client.favourite.favouriteDelete({ id });
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: [QueryKeys.GetProjectNodes] });
      notifications.clean();
      notifications.show({
        severity: 'success',
        variant: 'filled',
        message: 'The project removed from favourites successfully',
      });
    },
  });
};
