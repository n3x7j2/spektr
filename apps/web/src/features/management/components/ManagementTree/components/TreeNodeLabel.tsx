import { Box, Stack } from '@mui/material';
import { TreeNode } from '@spektr/treeview';
import { FC } from 'react';

type TreeNodeLabelProps = {
  node: TreeNode;
};

const TreeNodeLabel: FC<TreeNodeLabelProps> = ({ node }) => {
  const { exData, nodeValue } = node;

  return (
    <Stack direction="row" justifyContent="space-between" alignItems="center" width="100%">
      <Stack direction="row" overflow="hidden" alignItems="center">
        <Box sx={{ display: 'flex', alignItems: 'center' }}>{exData?.icon}</Box>
        <Box sx={{ ml: 1, overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }} title={nodeValue}>
          {nodeValue}
        </Box>
      </Stack>
    </Stack>
  );
};

export default TreeNodeLabel;
