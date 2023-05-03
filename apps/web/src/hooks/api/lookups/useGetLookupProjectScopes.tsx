import { useGetEnumItems } from '../useGetEnumItems';

export const useGetLookupProjectScopes = () => {
  return useGetEnumItems('ProjectScope');
};
