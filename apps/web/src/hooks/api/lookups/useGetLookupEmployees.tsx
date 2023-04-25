import { QueryKeys } from '@spektr/common';
import { useQuery } from '@tanstack/react-query';
import { map } from 'lodash';

import { useRestClient } from '~/hooks/useRestClient';

export const useLookupEmployees = () => {
  const client = useRestClient();

  return useQuery({
    queryKey: [QueryKeys.GetLookupEmployees],
    queryFn: async () => {
      const result = await client.employee.employeeGetListDropDownEmployee({});
      return map(result, (s) => ({ value: s.value || '', text: s.text || '' })) || [];
    },
  });
};
