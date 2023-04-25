import { createContext } from 'react';

import { TreeNode } from '../models/treeViewProps';

export type TreeViewContextType = {
  nodes: TreeNode[];
  loading?: string[];
  expanded?: string[];
  selected?: string;
  onNodeToggle: (event: React.SyntheticEvent<Element, Event>, node: TreeNode) => void;
  onNodeSelect: (event: React.SyntheticEvent<Element, Event>, node: TreeNode) => void;
};

export const TreeViewContext = createContext<TreeViewContextType>({} as TreeViewContextType);
