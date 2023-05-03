import { QueryKeys } from '@spektr/common';
import { useQuery } from '@tanstack/react-query';
import { map } from 'lodash';

import { useRestClient } from '~/hooks/useRestClient';

export const useGetProjectCloneItemNodes = () => {
  const client = useRestClient();

  return useQuery({
    queryKey: [QueryKeys.GetProjectCloneItemNodes],
    queryFn: async () => {
      const result = await client.project.projectGetProjectCloneItemTreeNode();
      return map(result || [], (item) => ({
        id: item.id! - 1,
        parentId: item.parentId! === 0 ? null : item.parentId! - 1,
        name: item.projectCloneItem?.text || '',
        originId: item.id!,
        originParentId: item.parentId!,
      }));
    },
  });
};
