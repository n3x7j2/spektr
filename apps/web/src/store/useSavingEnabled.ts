import { createGlobalState } from 'react-use';

export const useSavingEnabled = createGlobalState<boolean>(false);
