import { PropsWithChildren } from 'react';

import { TreeItemContext } from '../contexts/treeItemContext';
import { TreeNode } from '../models/treeViewProps';

type Props = PropsWithChildren & {
  node: TreeNode;
};

const TreeItemProvider = (props: Props) => {
  const { node, children } = props;

  return (
    <TreeItemContext.Provider
      value={{
        node,
      }}
    >
      {children}
    </TreeItemContext.Provider>
  );
};

export default TreeItemProvider;
