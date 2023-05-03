import { TableSelection } from '@devexpress/dx-react-grid-material-ui';
import { TableRow as MuiTableRow } from '@mui/material';
import { DropActions } from '@spektr/common';
import { useCombinedRefs, useDraggable, useDroppable } from '@spektr/dnd';
import { clsx } from 'clsx';
import { includes, omit } from 'lodash';
import { memo } from 'react';

import { useDataGrid } from '../hooks/useDataGrid';

const TableSelectionRow = memo(function TableSelectionRow(props: TableSelection.RowProps) {
  const {
    tableRow: { rowId, row },
    onToggle,
    selectByRowClick,
    highlighted,
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
      onClick={(e) => {
        if (!selectByRowClick) return;
        e.stopPropagation();
        onToggle();
      }}
      className={clsx({
        'TableSelectRow-over': isOver,
        'TableSelectRow-dragging': isDragging,
        'TableSelectRow-selected': includes(selectedRows, rowId),
      })}
    />
  );
});

export default TableSelectionRow;
