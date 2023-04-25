import { RowId } from '@devexpress/dx-react-grid';
import { PropsWithChildren } from 'react';

import { DataGridContext, DragHandleProps } from '../contexts/dataGridContext';

type Props = PropsWithChildren & {
  dragType: string;
  rowReorderingEnabled: boolean;
  selectedRows: RowId[];
};

const DataGridProvider = (props: Props) => {
  const { dragType, rowReorderingEnabled, selectedRows, children } = props;
  const dragHandleProps = new Map<string | number, DragHandleProps>();
  const setDragHandleProps = (id: string | number, props: DragHandleProps) => {
    if (id) {
      dragHandleProps.set(id, props);
    }
  };

  const getDragHandleProps = (id: string | number) => {
    return dragHandleProps.get(id);
  };

  return (
    <DataGridContext.Provider
      value={{
        dragType,
        rowReorderingEnabled,
        selectedRows,
        getDragHandleProps,
        setDragHandleProps,
      }}
    >
      {children}
    </DataGridContext.Provider>
  );
};

export default DataGridProvider;
