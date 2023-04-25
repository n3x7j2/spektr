import { useGetEnumItems } from '../useGetEnumItems';

export const useLookupProjectScopes = () => {
  return useGetEnumItems('ProjectScope');
};
