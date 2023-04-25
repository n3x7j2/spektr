import { QueryKeys } from '@spektr/common';
import { useQuery } from '@tanstack/react-query';

import { useRestClient } from '~/hooks/useRestClient';

export const useGetCategories = () => {
  const client = useRestClient();

  return useQuery({
    queryKey: [QueryKeys.GetCategories],
    queryFn: async () => {
      const response = await client.inventorySubCategory.inventorySubCategoryGetList({
        disablePagination: true,
      });
      return response.items || [];
    },
  });
};
