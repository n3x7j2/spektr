import { PropsWithChildren } from 'react';

import { TreeViewContext } from '../contexts/treeViewContext';
import { TreeNode } from '../models/treeViewProps';

type Props = PropsWithChildren & {
  nodes: TreeNode[];
  loading?: string[];
  expanded?: string[];
  selected?: string;
  onNodeToggle: (event: React.SyntheticEvent<Element, Event>, node: TreeNode) => void;
  onNodeSelect: (event: React.SyntheticEvent<Element, Event>, node: TreeNode) => void;
};

const TreeViewProvider = (props: Props) => {
  const { nodes, loading, expanded, selected, onNodeToggle, onNodeSelect, children } = props;

  return (
    <TreeViewContext.Provider
      value={{
        nodes,
        loading,
        expanded,
        selected,
        onNodeToggle,
        onNodeSelect,
      }}
    >
      {children}
    </TreeViewContext.Provider>
  );
};

export default TreeViewProvider;
