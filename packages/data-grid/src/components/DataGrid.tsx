import {
  CustomTreeData,
  DataTypeProvider,
  EditingState,
  FilteringState,
  GroupingState,
  IntegratedFiltering,
  IntegratedGrouping,
  IntegratedSelection,
  IntegratedSorting,
  IntegratedSummary,
  RowId,
  SearchState,
  SelectionState,
  SortingState,
  SummaryState,
  TreeDataState,
} from '@devexpress/dx-react-grid';
import { GridExporter } from '@devexpress/dx-react-grid-export';
import {
  DragDropProvider,
  ExportPanel,
  Grid,
  GroupingPanel,
  SearchPanel,
  TableColumnReordering,
  TableColumnResizing,
  TableFilterRow,
  TableGroupRow,
  TableHeaderRow,
  TableInlineCellEditing,
  TableSelection,
  TableSummaryRow,
  TableTreeColumn,
  Toolbar,
  VirtualTable,
} from '@devexpress/dx-react-grid-material-ui';
import { DragTypes, DropActions } from '@spektr/common';
import { arrayMove, DragEndEvent, DragOverlay, useDndMonitor } from '@spektr/dnd';
import saveAs from 'file-saver';
import { differenceWith, filter, findIndex, first, includes, uniq, xor } from 'lodash';
import { forwardRef, useCallback, useMemo, useRef, useState } from 'react';
import { v4 as uuidv4 } from 'uuid';

import { findChildIds, findParentIds, getChildRows } from '../helpers/treeUtils';
import { useColumns } from '../hooks/useColumns';
import { DataGridProps } from '../models/dataGridProps';
import DataGridProvider from './DataGridProvider';
import Table from './Table';
import TableCell from './TableCell';
import TableRow from './TableRow';
import TableRowOverlay from './TableRowOverlay';
import TableSelectionRow from './TableSelectionRow';

const DataGrid = forwardRef<any, DataGridProps>(function DataGrid(props, ref: any) {
  const {
    height,
    rows,
    defaultColumns,
    searchingEnabled = false,
    resizingEnabled = false,
    columnReorderingEnabled = false,
    treeViewEnabled = false,
    treeViewColumn,
    treeViewExpandedRows = [],
    dragType = DragTypes.TableRow,
    overlayFields = [],
    editingCells,
    rowReorderingEnabled = false,
    exportingEnabled = false,
    typeProviderProps = [],
    multiSelect = false,
    selectedRows = [],
    fileName = `${uuidv4()}.xlsx`,
    getRowId,
    onEditingCellsChange,
    onCommitChanges,
    onRowOrderChange,
    onRowsSelect,
    onTreeViewExpandedRows,
  } = props;

  if (treeViewEnabled && !treeViewColumn) {
    throw new Error('treeViewColumn is required if treeViewEnabled = true');
  }

  const columns = rowReorderingEnabled ? [{ name: 'drag', title: ' ', width: 40 }, ...defaultColumns] : defaultColumns;

  const selectedRowIds = useMemo(() => {
    const firstRow = first(selectedRows);

    return multiSelect ? selectedRows : firstRow ? [firstRow] : [];
  }, [multiSelect, selectedRows]);

  const selectionEnabled = !!onRowsSelect;

  const {
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
  } = useColumns({
    columns,
    resizingEnabled,
    commitChangesDefined: !!onCommitChanges,
  });

  const toolbarEnabled = useMemo(
    () => searchingEnabled || columnGroupingEnabled || exportingEnabled,
    [searchingEnabled, columnGroupingEnabled, exportingEnabled],
  );

  const exporterRef = useRef<any>(null);

  const handleExport = useCallback(
    (options: object) => {
      if (exporterRef.current) {
        exporterRef.current.exportGrid(options);
      }
    },
    [exporterRef],
  );

  const handleSave = (workbook: any) => {
    workbook.xlsx.writeBuffer().then((buffer: any) => {
      saveAs(new Blob([buffer], { type: 'application/octet-stream' }), fileName);
    });
  };

  const [activeRow, setActiveRow] = useState<any>();

  const handleDragEnd = (event: DragEndEvent) => {
    const { active, over } = event;

    if (over && !!onRowOrderChange && over.data.current?.action === DropActions.RowReorder) {
      if (active.id !== over.id) {
        if (!!getRowId) {
          const oldIndex = findIndex(rows, (r) => getRowId(r) === active.id);
          const newIndex = findIndex(rows, (r) => getRowId(r) === over.id);
          onRowOrderChange(arrayMove(rows, oldIndex, newIndex));
        } else {
          onRowOrderChange(arrayMove(rows, active.id as number, over.id as number));
        }
      }
    }
    // Stop overlay.
    setActiveRow(null);
  };

  const handleRowsSelect = useCallback(
    (rowIds: RowId[]) => {
      if (onRowsSelect) {
        if (!multiSelect) {
          const selectedRowId = first(differenceWith(rowIds, selectedRowIds));
          onRowsSelect(selectedRowId ? [selectedRowId] : selectedRowIds);
        } else {
          if (treeViewEnabled && rowIds.length !== 0 && rowIds.length !== rows.length) {
            const changedRowIds = xor(rowIds, selectedRowIds);
            if (changedRowIds.length > 0) {
              const changedRowId = changedRowIds[0];
              if (rowIds.length > selectedRowIds.length) {
                onRowsSelect(
                  uniq([
                    ...selectedRowIds,
                    ...findParentIds(rows, changedRowId),
                    changedRowId,
                    ...findChildIds(rows, changedRowId),
                  ]),
                );
                return;
              } else {
                const excludeRowIds = [changedRowId, ...findChildIds(rows, changedRowId)];
                onRowsSelect(filter(selectedRowIds, (id) => !includes(excludeRowIds, id)));
                return;
              }
            }
          }
          onRowsSelect(rowIds);
        }
      }
    },
    [multiSelect, onRowsSelect, rows, selectedRowIds, treeViewEnabled],
  );

  useDndMonitor({
    onDragStart: ({ active }) => {
      const row = active.data.current?.row;
      if (active && row) {
        setActiveRow(row);
      }
    },
    onDragEnd: handleDragEnd,
    onDragCancel: () => setActiveRow(null),
  });

  return (
    <>
      <DataGridProvider dragType={dragType} rowReorderingEnabled={rowReorderingEnabled} selectedRows={selectedRowIds}>
        <Grid rows={rows} columns={columns} getRowId={getRowId}>
          {typeProviderProps.map((props) => (
            <DataTypeProvider key={props.for.join('-')} {...props} />
          ))}
          <DragDropProvider />
          {!rowReorderingEnabled && (
            <SortingState
              columnSortingEnabled={false}
              columnExtensions={sortingColumns}
              defaultSorting={defaultSorting}
            />
          )}
          <FilteringState columnFilteringEnabled={false} columnExtensions={filteringColumns} />
          <SearchState />
          {selectionEnabled && <SelectionState selection={selectedRowIds} onSelectionChange={handleRowsSelect} />}
          {!rowReorderingEnabled && (
            <GroupingState
              columnGroupingEnabled={false}
              columnExtensions={groupingColumns}
              defaultGrouping={defaultGrouping}
            />
          )}
          {editingEnabled && (
            <EditingState
              editingCells={editingCells ? editingCells : undefined}
              columnEditingEnabled={false}
              columnExtensions={editingColumns}
              onCommitChanges={onCommitChanges!}
              onEditingCellsChange={onEditingCellsChange ? onEditingCellsChange : undefined}
            />
          )}
          {treeViewEnabled && (
            <TreeDataState expandedRowIds={treeViewExpandedRows} onExpandedRowIdsChange={onTreeViewExpandedRows} />
          )}
          <SummaryState totalItems={defaultSummary} />
          {!rowReorderingEnabled && <IntegratedSorting columnExtensions={sortingColumns} />}
          <IntegratedFiltering columnExtensions={filteringColumns} />
          {selectionEnabled && <IntegratedSelection />}
          {!rowReorderingEnabled && <IntegratedGrouping columnExtensions={groupingColumns} />}
          {treeViewEnabled && <CustomTreeData getChildRows={getChildRows} />}
          <IntegratedSummary />
          <VirtualTable
            ref={ref}
            columnExtensions={columnDefs}
            cellComponent={TableCell}
            rowComponent={TableRow}
            tableComponent={Table}
            estimatedRowHeight={45}
            height={height}
          />
          {resizingEnabled && <TableColumnResizing defaultColumnWidths={defaultColumnWidths} />}
          {columnReorderingEnabled && <TableColumnReordering defaultOrder={columnDefs.map((c) => c.columnName)} />}
          <TableHeaderRow showSortingControls={!rowReorderingEnabled} />
          {selectionEnabled && !treeViewEnabled && (
            <TableSelection
              selectByRowClick={!multiSelect}
              showSelectionColumn={multiSelect}
              showSelectAll={multiSelect}
              rowComponent={TableSelectionRow}
              selectionColumnWidth={40}
            />
          )}
          {columnFilteringEnabled && <TableFilterRow />}
          {treeViewEnabled && (
            <TableTreeColumn
              for={treeViewColumn!}
              showSelectionControls={selectionEnabled}
              showSelectAll={multiSelect}
            />
          )}

          {columnGroupingEnabled && !rowReorderingEnabled && <TableGroupRow />}
          <TableSummaryRow />
          {editingEnabled && <TableInlineCellEditing startEditAction="click" selectTextOnEditStart />}
          {toolbarEnabled && <Toolbar />}
          {searchingEnabled && <SearchPanel />}
          {columnGroupingEnabled && !rowReorderingEnabled && <GroupingPanel showGroupingControls />}
          {exportingEnabled && <ExportPanel startExport={handleExport} />}
        </Grid>
        <DragOverlay>
          <TableRowOverlay row={activeRow} fields={overlayFields} />
        </DragOverlay>
      </DataGridProvider>
      {exportingEnabled && (
        <GridExporter
          ref={exporterRef}
          getRowId={getRowId}
          rows={rows}
          columns={columns}
          selection={selectedRowIds}
          onSave={handleSave}
        />
      )}
    </>
  );
});

export default DataGrid;
