import { reduce } from 'lodash';
import { useRouter } from 'next/router';

export const useQueryParams = (...params: string[]) => {
  const { query } = useRouter();
  const result: Record<string, any> = {};

  return reduce(
    params,
    (prev, curr) => {
      prev[curr] = query[curr];
      return prev;
    },
    result,
  );
};
