import { useContext } from 'react';

import { TreeItemContext } from '../contexts/treeItemContext';

export const useTreeItem = () => {
  const treeItemContext = useContext(TreeItemContext);

  if (!treeItemContext) {
    throw new Error('useTreeItem has to be used within <TreeItemProvider>');
  }

  return treeItemContext;
};
