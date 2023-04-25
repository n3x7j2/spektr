import { Stack } from '@mui/material';
import { TreeNode, TreeView } from '@spektr/treeview';
import { find, startsWith } from 'lodash';
import Router, { useRouter } from 'next/router';
import React from 'react';

import { managementNodes } from '../../constants';
import TreeNodeLabel from './components/TreeNodeLabel';

interface ManagementTreeProps {}

const ManagementTree = (props: ManagementTreeProps) => {
  const { asPath } = useRouter();
  const activeNodeId = find(managementNodes, (n) => startsWith(asPath, n.nodeId))?.nodeId;
  const handleSelect = (event: React.SyntheticEvent<Element, Event>, node: TreeNode) => {
    event.stopPropagation();
    Router.push(node.id);
  };

  return (
    <Stack sx={{ height: 'calc(100vh - 162px)' }}>
      <TreeView
        nodes={managementNodes}
        wrapperStyles={{ height: '100%' }}
        selected={activeNodeId}
        onNodeToggle={() => {}}
        onNodeSelect={handleSelect}
        TreeItemProps={{
          label: TreeNodeLabel,
        }}
      />
    </Stack>
  );
};

export default ManagementTree;
