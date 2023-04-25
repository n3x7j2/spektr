import { useContext } from 'react';

import { TreeViewContext } from '../contexts/treeViewContext';

export const useTreeView = () => {
  const treeViewContext = useContext(TreeViewContext);

  if (!treeViewContext) {
    throw new Error('useTreeView has to be used within <TreeViewProvider>');
  }

  return treeViewContext;
};
