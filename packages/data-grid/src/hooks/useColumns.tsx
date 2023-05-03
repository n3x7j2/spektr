import { SummaryType } from '@devexpress/dx-react-grid';
import { filter, isNil, map, some } from 'lodash';
import { useMemo } from 'react';

import { ColumnDef } from '../models/dataGridProps';

export const useColumns = (params: {
  columns: Array<ColumnDef>;
  commitChangesDefined: boolean;
  resizingEnabled: boolean;
}) => {
  const { columns, commitChangesDefined, resizingEnabled } = params;
  const editingColumns = useMemo(
    () =>
      map(columns, (c) => ({
        columnName: c.name,
        editingEnabled: c.editingEnabled || false,
      })),
    [columns],
  );

  const columnEditingEnabled = useMemo(() => some(editingColumns, (c) => !!c.editingEnabled), [editingColumns]);

  const editingEnabled = useMemo(
    () => columnEditingEnabled && commitChangesDefined,
    [columnEditingEnabled, commitChangesDefined],
  );

  if (columnEditingEnabled && !commitChangesDefined) {
    throw new Error('onCommitChanges is required if editingEnabled = true set for any column.');
  }

  const columnDefs = useMemo(
    () =>
      map(columns, (c) => ({
        columnName: c.name,
        width: resizingEnabled ? c.width || 180 : c.width,
        align: c.align,
        wordWrapEnabled: c.wordWrapEnabled,
      })),
    [columns, resizingEnabled],
  );

  const defaultColumnWidths = useMemo(
    () =>
      map(columnDefs, (c) => ({
        columnName: c.columnName,
        width: c.width || 180,
      })),
    [columnDefs],
  );

  const sortingColumns = useMemo(
    () =>
      map(columns, (c) => ({
        columnName: c.name,
        sortingEnabled: c.sortingEnabled || false,
        compare: c.compare,
      })),
    [columns],
  );

  const defaultSorting = useMemo(
    () =>
      map(
        filter(columns, (c) => !isNil(c.direction)),
        (c) => ({
          columnName: c.name,
          direction: c.direction || 'asc',
        }),
      ),
    [columns],
  );

  const defaultSummary = useMemo(
    () =>
      map(
        filter(columns, (c) => !isNil(c.summaryType)),
        (c) => ({
          columnName: c.name,
          type: (c.summaryType || 'sum') as SummaryType,
        }),
      ),
    [columns],
  );

  const filteringColumns = useMemo(
    () =>
      map(columns, (c) => ({
        columnName: c.name,
        filteringEnabled: c.filteringEnabled || false,
        predicate: c.predicate,
      })),
    [columns],
  );

  const columnFilteringEnabled = useMemo(() => some(filteringColumns, (c) => !!c.filteringEnabled), [filteringColumns]);

  const groupingColumns = useMemo(
    () =>
      map(columns, (c) => ({
        columnName: c.name,
        groupingEnabled: c.groupingEnabled || false,
        criteria: c.criteria,
      })),
    [columns],
  );

  const columnGroupingEnabled = useMemo(() => some(groupingColumns, (c) => !!c.groupingEnabled), [groupingColumns]);

  const defaultGrouping = useMemo(
    () =>
      map(
        filter(columns, (c) => !!c.groupingByDefault),
        (c) => ({
          columnName: c.name,
        }),
      ),
    [columns],
  );

  return {
    columnDefs,
    defaultColumnWidths,
    sortingColumns,
    defaultSorting,
    defaultSummary,
    filteringColumns,
    groupingColumns,
    defaultGrouping,
    columnFilteringEnabled,
    columnGroupingEnabled,
    editingColumns,
    editingEnabled,
  };
};
