import { RowId } from '@spektr/data-grid/dist/externals/dx-grid';
import { createGlobalState } from 'react-use';

export const useSelectedRows = createGlobalState<RowId[]>([]);
