import { createGlobalState } from 'react-use';

import { ProjectNodeParams } from './useGetProjectNodes';

export const useProjectNodeParams = createGlobalState<ProjectNodeParams>({});
