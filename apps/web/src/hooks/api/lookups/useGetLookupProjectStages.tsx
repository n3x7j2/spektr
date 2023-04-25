import { map } from 'lodash';

import { useGetProjectStages } from '../useGetProjectStages';

export const useLookupProjectStages = () => {
  const { data: projectStages = [], ...rest } = useGetProjectStages();

  return { data: map(projectStages, (s) => ({ value: s.id || '', text: s.projectStageName })), ...rest };
};
