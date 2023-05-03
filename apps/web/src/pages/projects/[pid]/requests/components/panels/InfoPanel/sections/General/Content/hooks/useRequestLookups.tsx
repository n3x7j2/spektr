import {
  useGetLookupProjectManagers,
  useGetLookupProjects,
  useGetLookupPurchaseRequestStatuses,
  useGetLookupPurchaseRequestTypes,
} from '~/hooks/api';

export const useRequestLookups = () => {
  const { data: requestTypes = [], isLoading: isLoadingRequestTypes } = useGetLookupPurchaseRequestTypes();
  const { data: projects = [], isLoading: isLoadingProjects } = useGetLookupProjects();
  const { data: managers = [], isLoading: isLoadingManagers } = useGetLookupProjectManagers();
  const { data: statuses = [], isLoading: isLoadingStatuses } = useGetLookupPurchaseRequestStatuses();

  return {
    requestTypes,
    projects,
    managers,
    statuses,
    isLoading: isLoadingRequestTypes || isLoadingProjects || isLoadingManagers || isLoadingStatuses,
  };
};
