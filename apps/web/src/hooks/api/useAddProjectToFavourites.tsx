import { QueryKeys } from '@spektr/common';
import { notifications } from '@spektr/notifications';
import { FavouriteCreateDto } from '@spektr/rest';
import { useMutation, useQueryClient } from '@tanstack/react-query';

import { useRestClient } from '../useRestClient';

export const useAddProjectToFavourites = () => {
  const queryClient = useQueryClient();
  const client = useRestClient();

  return useMutation({
    mutationFn: async (formData: { body: FavouriteCreateDto }) => {
      return await client.favourite.favouriteCreate({ requestBody: formData.body });
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: [QueryKeys.GetProjectNodes] });
      notifications.clean();
      notifications.show({
        severity: 'success',
        variant: 'filled',
        message: 'The project added to favourites successfully',
      });
    },
  });
};
