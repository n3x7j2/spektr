import { createContext } from 'react';

import { TreeNode } from '../models/treeViewProps';

export type TreeItemContextType = {
  node: TreeNode;
};

export const TreeItemContext = createContext<TreeItemContextType>({} as TreeItemContextType);
