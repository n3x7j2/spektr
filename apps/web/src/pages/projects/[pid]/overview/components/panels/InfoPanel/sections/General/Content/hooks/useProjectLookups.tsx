import {
  useGetLookupEmployees,
  useGetLookupProjectScopes,
  useGetLookupProjectStages,
  useGetLookupProjectStatus,
  useGetLookupProjectTypes,
  useGetLookupTeams,
} from '~/hooks/api';

export const useProjectLookups = () => {
  const { data: projectScopes = [], isLoading: isLoadingProjectScopes } = useGetLookupProjectScopes();
  const { data: projectStages = [], isLoading: isLoadingProjectStages } = useGetLookupProjectStages();
  const { data: projectStatus = [], isLoading: isLoadingProjectStatus } = useGetLookupProjectStatus();
  const { data: projectTypes = [], isLoading: isLoadingProjectTypes } = useGetLookupProjectTypes();
  const { data: employees = [], isLoading: isLoadingEmployees } = useGetLookupEmployees();
  const { data: teams = [], isLoading: isLoadingTeams } = useGetLookupTeams();

  return {
    projectScopes,
    projectStages,
    projectStatus,
    projectTypes,
    employees,
    teams,
    isLoading:
      isLoadingProjectScopes ||
      isLoadingProjectStages ||
      isLoadingProjectStatus ||
      isLoadingProjectTypes ||
      isLoadingEmployees ||
      isLoadingTeams,
  };
};
