import {
  ChangeSet,
  Column,
  DataTypeProviderProps,
  EditingCell,
  Filter,
  RowId,
  SummaryType,
} from '@devexpress/dx-react-grid';
import { PopperPlacementType } from '@mui/material';
import { AnySchema } from 'yup';

type SortingColumnDef = {
  sortingEnabled?: boolean;
  direction?: 'asc' | 'desc';
  compare?: (a: any, b: any) => number;
};

type FilteringColumnDef = {
  filteringEnabled?: boolean;
  predicate?: (value: any, filter: Filter, row: any) => boolean;
};

type GroupingColumnDef = {
  groupingEnabled?: boolean;
  groupingByDefault?: boolean;
  criteria?: (value: any) => { key: string | number; value?: any };
};

type EditingColumnDef = {
  editingEnabled?: boolean;
  disabledIf?: (row: any) => boolean;
  validationRules?: AnySchema;
  popperWidth?: string;
  popperPlacement?: PopperPlacementType;
};

type SummaryColumnDef = {
  type?: SummaryType;
};

export type ColumnDef = Column &
  SortingColumnDef &
  FilteringColumnDef &
  GroupingColumnDef &
  EditingColumnDef &
  SummaryColumnDef & {
    width?: number;
    align?: 'left' | 'right' | 'center';
    wordWrapEnabled?: boolean;
  };

export type DataGridProps = {
  height?: string | number;
  rows: Array<any>;
  defaultColumns: Array<ColumnDef>;
  getRowId?: (row: any) => RowId;
  getCellValue?: (row: any, columnName: string) => any;
  typeProviderProps?: DataTypeProviderProps[];
  searchingEnabled?: boolean;
  resizingEnabled?: boolean;
  columnReorderingEnabled?: boolean;
  dragType?: string;
  overlayFields?: string[];
  editingCells?: EditingCell[];
  onEditingCellsChange?: (editingRowIds: EditingCell[]) => void;
  onTreeItemOrderChange?: (rows: Array<any>) => void;
  rowReorderingEnabled?: boolean;
  onRowOrderChange?: (rows: Array<any>) => void;
  multiSelect?: boolean;
  selectedRows?: RowId[];
  onRowsSelect?: (rowIds: RowId[]) => void;
  exportingEnabled?: boolean;
  fileName?: string;
  onCommitChanges?: (changes: ChangeSet) => void;
};
