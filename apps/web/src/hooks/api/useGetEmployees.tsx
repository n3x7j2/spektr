import { QueryKeys } from '@spektr/common';
import { useQuery } from '@tanstack/react-query';

import { useRestClient } from '~/hooks/useRestClient';

export const useGetEmployees = () => {
  const client = useRestClient();

  return useQuery({
    queryKey: [QueryKeys.GetEmployees],
    queryFn: async () => {
      const response = await client.employee.employeeGetList({
        maxResultCount: 1000,
      });
      return response.items || [];
    },
  });
};
