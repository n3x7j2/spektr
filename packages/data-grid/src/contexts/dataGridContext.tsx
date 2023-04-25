import { RowId } from '@devexpress/dx-react-grid';
import { DraggableAttributes } from '@spektr/dnd';
import { createContext } from 'react';

export type DragHandleProps = {
  listeners: any;
  attributes: DraggableAttributes;
};

export type DataGridContextType = {
  dragType: string;
  rowReorderingEnabled: boolean;
  selectedRows: RowId[];
  getDragHandleProps: (id: string | number) => DragHandleProps | undefined;
  setDragHandleProps: (id: string | number, props: DragHandleProps) => void;
};

export const DataGridContext = createContext<DataGridContextType>(
  {} as DataGridContextType,
);
