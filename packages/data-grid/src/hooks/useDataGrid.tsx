import { useContext } from 'react';

import { DataGridContext } from '../contexts/dataGridContext';

export const useDataGrid = () => {
  const dataGridContext = useContext(DataGridContext);

  if (!dataGridContext) {
    throw new Error('useDataGrid has to be used within <DataGridProvider>');
  }

  return dataGridContext;
};
