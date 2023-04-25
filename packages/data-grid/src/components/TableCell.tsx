import { Table, VirtualTable } from '@devexpress/dx-react-grid-material-ui';
import { Box } from '@mui/material';
import { UniqueIdentifier, useDndMonitor } from '@spektr/dnd';
import { clsx } from 'clsx';
import { find, omit } from 'lodash';
import React, { useState } from 'react';
import { AnySchema } from 'yup';

import { useDataGrid } from '../hooks/useDataGrid';
import DragIcon from './icons/DragIcon';
import DropIcon from './icons/DropIcon';

type ValidationError = { hasError: boolean; message?: string };

const validate = (row: any, columnName: string, rules: AnySchema) => {
  let error: ValidationError = { hasError: false };
  try {
    rules.validateSync(row, { abortEarly: false });
  } catch (err: any) {
    const er = find(err.inner || [], (e) => e.path === columnName);
    if (er) {
      error = { hasError: true, message: er.message };
    }
  }

  return error;
};

const DragHandle = React.memo(function DragHandle(props: any) {
  return (
    <Box
      component="span"
      {...props}
      sx={{
        cursor: 'move',
        display: 'inline-flex',
        height: '100%',
        alignItems: 'center',
      }}
    >
      <DragIcon />
    </Box>
  );
});

const DropHandle = React.memo(function DropHandle(props: any) {
  const { rowId, ...restProps } = props;
  return (
    <Box
      component="span"
      {...restProps}
      sx={{
        display: 'inline-flex',
        height: '100%',
        alignItems: 'center',
      }}
    >
      <DropIcon />
    </Box>
  );
});

const TableCell = (props: Table.DataCellProps) => {
  const {
    tableRow: { rowId },
  } = props;
  const { onClick, ...restProps } = props as any;
  const {
    row,
    column: { name: columnName, editingEnabled, disabledIf, validationRules },
  } = restProps;

  const [activeId, setActiveId] = useState<UniqueIdentifier | null>(null);

  useDndMonitor({
    onDragStart: ({ active }) => {
      if (active) {
        setActiveId(active.id);
      }
    },
    onDragEnd: () => setActiveId(null),
    onDragCancel: () => setActiveId(null),
  });

  const { getDragHandleProps } = useDataGrid();
  const dragHandleProps = getDragHandleProps(rowId!);

  const { listeners, attributes } = dragHandleProps || {
    listeners: {},
    attributes: {},
  };

  const error = editingEnabled && validationRules ? validate(row, columnName, validationRules) : { hasError: false };

  if (editingEnabled && (!disabledIf || (disabledIf && !disabledIf(row)))) {
    return (
      <VirtualTable.Cell
        {...restProps}
        tabIndex={0}
        onFocus={onClick}
        className={clsx({ 'has-error': error.hasError })}
        title={error.message || 'Click to edit'}
      />
    );
  }

  return (
    <VirtualTable.Cell
      {...restProps}
      className={clsx({ 'has-error': error.hasError })}
      title={error.message || (columnName === 'drag' ? 'Drag' : '')}
    >
      {columnName === 'drag' ? (
        !activeId || activeId === rowId ? (
          <DragHandle {...listeners} {...omit(attributes, ['tabIndex'])} />
        ) : (
          <DropHandle rowId={rowId} />
        )
      ) : (
        props.children
      )}
    </VirtualTable.Cell>
  );
};

export default TableCell;
