import { QueryKeys } from '@spektr/common';
import { InventoryItemStatus } from '@spektr/rest';
import { useQuery } from '@tanstack/react-query';
import { map } from 'lodash';

import { useRestClient } from '~/hooks/useRestClient';

export const useGetLookupInventoryItems = (projectId?: string, isService: boolean = false) => {
  const client = useRestClient();

  return useQuery({
    queryKey: [QueryKeys.GetLookupInventoryItems, projectId, isService],
    queryFn: async () => {
      if (!projectId) {
        return [];
      }
      const response = await client.inventoryItem.inventoryItemGetList({
        projectId,
        isService,
        disablePagination: true,
      });
      return map(response.items || [], (s) => ({
        value: s.id || '',
        text: `${s.status === InventoryItemStatus._0 ? `(Draft) ` : ''}${s.imageDescription || ''}`,
      }));
    },
  });
};
