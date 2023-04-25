import { createGlobalState } from 'react-use';

export const useProjectNodeExpanded = createGlobalState<string[]>([]);
