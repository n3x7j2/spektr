import { SingleSelectTreeViewProps, TreeItemProps as MuiTreeItemProps } from '@mui/lab';
import { ComponentType, CSSProperties } from 'react';

export type TreeNode = {
  id: string;
  nodeId: string;
  parentNodeId: string | null;
  nodeValue: string;
  nodeType: string;
  hasChildren: boolean;
  exData?: any;
};

export type TreeItemProps = Omit<MuiTreeItemProps, 'nodeId'> & {
  node: TreeNode;
};

export type TreeViewProps = Omit<
  SingleSelectTreeViewProps,
  | 'defaultCollapseIcon'
  | 'defaultExpandIcon'
  | 'defaultParentIcon'
  | 'defaultEndIcon'
  | 'defaultChecked'
  | 'defaultValue'
  | 'defaultSelected'
  | 'defaultExpanded'
  | 'multiSelect'
  | 'disabledItemsFocusable'
  | 'onNodeToggle'
  | 'onNodeSelect'
> & {
  nodes: TreeNode[];
  loading?: string[];
  wrapperStyles?: CSSProperties;
  TreeItemProps?: {
    label?: ComponentType<{ node: TreeNode }>;
  };
  onNodeToggle: (event: React.SyntheticEvent<Element, Event>, node: TreeNode) => void;
  onNodeSelect: (event: React.SyntheticEvent<Element, Event>, node: TreeNode) => void;
};
