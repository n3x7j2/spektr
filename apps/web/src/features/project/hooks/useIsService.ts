import { createGlobalState } from 'react-use';

export const useIsService = createGlobalState<boolean>(false);
