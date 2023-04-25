import {
  useLookupEmployees,
  useLookupProjectScopes,
  useLookupProjectStages,
  useLookupProjectStatus,
  useLookupProjectTypes,
  useLookupTeams,
} from '~/hooks/api';

export const useProjectLookups = () => {
  const { data: projectScopes = [], isLoading: isLoadingProjectScopes } = useLookupProjectScopes();
  const { data: projectStages = [], isLoading: isLoadingProjectStages } = useLookupProjectStages();
  const { data: projectStatus = [], isLoading: isLoadingProjectStatus } = useLookupProjectStatus();
  const { data: projectTypes = [], isLoading: isLoadingProjectTypes } = useLookupProjectTypes();
  const { data: employees = [], isLoading: isLoadingEmployees } = useLookupEmployees();
  const { data: teams = [], isLoading: isLoadingTeams } = useLookupTeams();

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
