import { QueryKeys } from '@spektr/common';
import { useQuery } from '@tanstack/react-query';
import { map } from 'lodash';

import { useRestClient } from '~/hooks/useRestClient';

export const useGetLookupPartTypeCodes = () => {
  const client = useRestClient();

  return useQuery({
    queryKey: [QueryKeys.GetLookupPartTypeCodes],
    queryFn: async () => {
      const result = await client.partTypeCode.partTypeCodeGetListDropDownPartTypeCode({});
      return map(result, (s) => ({ value: s.value || '', text: s.text || '' })) || [];
    },
  });
};
