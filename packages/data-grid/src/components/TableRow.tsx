import { Table } from '@devexpress/dx-react-grid-material-ui';
import { TableRow as MuiTableRow } from '@mui/material';
import { DropActions } from '@spektr/common';
import { useCombinedRefs, useDraggable, useDroppable } from '@spektr/dnd';
import { clsx } from 'clsx';
import { includes, omit } from 'lodash';
import { memo } from 'react';

import { useDataGrid } from '../hooks/useDataGrid';

const TableRow = memo(function TableRow(props: Table.DataRowProps) {
  const {
    tableRow: { rowId, row },
    ...restProps
  } = props;

  const { dragType, rowReorderingEnabled, selectedRows, setDragHandleProps } = useDataGrid();

  const { setNodeRef: setDroppableNodeRef, isOver } = useDroppable({
    id: rowId!,
    disabled: !rowReorderingEnabled,
    data: {
      action: DropActions.RowReorder,
    },
  });

  const {
    setNodeRef: setDraggableNodeRef,
    isDragging,
    listeners,
    attributes,
  } = useDraggable({
    id: rowId!,
    data: {
      type: dragType,
      row: row,
    },
  });

  setDragHandleProps(rowId!, { listeners, attributes });

  const setNodeRef = useCombinedRefs(setDroppableNodeRef, setDraggableNodeRef);

  return (
    <MuiTableRow
      ref={setNodeRef}
      {...omit(restProps, ['forwardedRef', 'row'])}
      className={clsx({
        'TableSelectRow-over': isOver,
        'TableSelectRow-dragging': isDragging,
        'TableSelectRow-selected': includes(selectedRows, rowId),
      })}
    />
  );
});

export default TableRow;
