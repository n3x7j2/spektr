import { TreeView as MuiTreeView } from '@mui/lab';
import { filter, isNil } from 'lodash';
import { forwardRef, useMemo } from 'react';
import { Components, Virtuoso } from 'react-virtuoso';

import { TreeNode, TreeViewProps } from '../models/treeViewProps';
import TreeItem from './TreeItem';
import TreeViewProvider from './TreeViewProvider';

const TreeView = forwardRef(function TreeView(props: TreeViewProps, ref: any) {
  const { nodes, loading = [], wrapperStyles, onNodeToggle, onNodeSelect, TreeItemProps, ...TreeViewProps } = props;
  const { expanded, selected } = TreeViewProps;

  const rootNodes = useMemo(() => filter(nodes, (n) => isNil(n.parentNodeId)), [nodes]);

  const components: Components<TreeNode> = {
    List: forwardRef(function TreeList(props, ref) {
      const { children, context, ...restProps } = props;
      return (
        <MuiTreeView ref={ref} {...TreeViewProps} {...restProps}>
          {children}
        </MuiTreeView>
      );
    }),
    Item: (props) => {
      const { item, children, context, ...restProps } = props;
      return <TreeItem key={item.nodeId} node={item} label={TreeItemProps?.label} isRoot {...restProps} />;
    },
  };

  return (
    <TreeViewProvider
      nodes={nodes}
      loading={loading}
      expanded={expanded}
      selected={selected}
      onNodeToggle={onNodeToggle}
      onNodeSelect={onNodeSelect}
    >
      <Virtuoso ref={ref} style={wrapperStyles} data={rootNodes} overscan={20} components={components} />
    </TreeViewProvider>
  );
});

export default TreeView;
