import { map } from 'lodash';

import { useGetProjectStages } from '../useGetProjectStages';

export const useGetLookupProjectStages = () => {
  const { data: projectStages = [], ...rest } = useGetProjectStages();

  return { data: map(projectStages, (s) => ({ value: s.id || '', text: s.projectStageName })), ...rest };
};
