import { RowId } from '@spektr/data-grid/dist/externals/dx-grid';
import { createGlobalState } from 'react-use';

export const useSelectedTeams = createGlobalState<RowId[]>([]);
export const useTempSelectedTeams = createGlobalState<RowId[]>([]);
