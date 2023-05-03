import {
  ChevronRight as ChevronRightIcon,
  ExpandMore as ExpandMoreIcon,
  Folder as FolderIcon,
} from '@mui/icons-material';
import { TreeItem as MuiTreeItem, treeItemClasses, TreeItemProps as MuiTreeItemProps } from '@mui/lab';
import { Box, CircularProgress, styled } from '@mui/material';
import { clsx } from 'clsx';
import { filter, includes, size, some } from 'lodash';
import { ComponentType, forwardRef, memo, useCallback, useMemo } from 'react';

import { useTreeItem } from '../hooks/useTreeItem';
import { useTreeView } from '../hooks/useTreeView';
import { TreeNode } from '../models/treeViewProps';
import TreeItemProvider from './TreeItemProvider';

type TreeItemProps = MuiTreeItemProps & { level: number };

const StyledTreeItem = styled(MuiTreeItem)<TreeItemProps>(({ theme, level }) => ({
  [`& .${treeItemClasses.content}`]: {
    minHeight: 40,
    paddingLeft: theme.spacing(level),
    '&.Mui-expanded': {
      fontWeight: theme.typography.fontWeightRegular,
    },
    '&:hover': {
      backgroundColor: '#dce1e3',
      borderRadius: 4,
    },
    '&.Mui-focused, &.Mui-selected, &.Mui-selected.Mui-focused': {
      backgroundColor: '#367bf5 !important',
      color: '#fff',
      borderRadius: 4,

      [`& .${treeItemClasses.iconContainer}`]: {
        svg: {
          color: '#fff',
        },
      },

      [`& .${treeItemClasses.label}`]: {
        svg: {
          color: '#fff',
        },
      },
    },
    [`& .${treeItemClasses.iconContainer}`]: {
      svg: {
        fontSize: 24,
      },
    },
    [`& .${treeItemClasses.label}`]: {
      display: 'flex',
      alignItems: 'center',
      height: 40,
      whiteSpace: 'nowrap',
      overflow: 'hidden',
      textOverflow: 'ellipsis',
      fontSize: 13,
    },
  },

  [`& .${treeItemClasses.group}`]: {
    marginLeft: 0,
  },
}));

const NodeContent: TreeItemProps['ContentComponent'] = forwardRef(function NodeContent(props, ref) {
  const { label, classes, className, nodeId } = props;

  const { nodes, expanded = [], selected, onNodeToggle, onNodeSelect } = useTreeView();
  const { node } = useTreeItem();
  const { hasChildren } = node;

  const childNodes = useMemo(() => filter(nodes, (n) => n.parentNodeId === nodeId), [nodes, nodeId]);

  const isExpanded = size(childNodes) > 0 && some(expanded, (nid) => nid === nodeId);
  const isSelected = nodeId === selected;

  const renderExpandIcon = useCallback(() => {
    if (!hasChildren) return null;

    return isExpanded ? <ExpandMoreIcon htmlColor="#78909c" /> : <ChevronRightIcon htmlColor="#b4c1c8" />;
  }, [hasChildren, isExpanded]);

  return (
    <Box
      className={clsx(className, classes.root, {
        [classes.expanded]: isExpanded,
        [classes.selected]: isSelected,
      })}
      ref={ref as any}
    >
      <Box className={classes.iconContainer} onClick={(e) => onNodeToggle(e, node)}>
        {renderExpandIcon()}
      </Box>
      <Box className={classes.label} onClick={(e) => onNodeSelect(e, node)}>
        {label ? (
          label
        ) : (
          <>
            <FolderIcon htmlColor="#78909c" />
            <Box sx={{ ml: 1 }}>{node.nodeValue}</Box>
          </>
        )}
      </Box>
    </Box>
  );
});

const TreeItem = memo(function TreeItem(props: {
  node: TreeNode;
  label?: ComponentType<{ node: TreeNode }>;
  level?: number;
  isRoot?: boolean;
}) {
  const { node, label: LabelComponent, level = 1, isRoot = false, ...restProps } = props;
  const { nodeId, hasChildren } = node;
  const { nodes, loading = [] } = useTreeView();
  const childNodes = filter(nodes, (n) => n.parentNodeId === node.nodeId);

  const renderLoadingProgress = useCallback(() => {
    return includes(loading, nodeId) && hasChildren ? (
      <Box
        sx={(theme) => ({
          display: 'flex',
          height: 40,
          alignItems: 'center',
          fontSize: 13,
          paddingLeft: theme.spacing(level),
          paddingRight: theme.spacing(1),
        })}
      >
        <CircularProgress size={18} />
        <Box sx={{ ml: 1 }}>Loading</Box>
      </Box>
    ) : null;
  }, [loading, nodeId, hasChildren, level]);

  return (
    <TreeItemProvider node={node}>
      <StyledTreeItem
        nodeId={node.nodeId}
        level={level}
        label={LabelComponent ? <LabelComponent node={node} /> : undefined}
        ContentComponent={NodeContent}
        {...(isRoot ? restProps : {})}
        sx={{
          borderBottom: isRoot ? '1px solid #e3e5e5' : 'none',
          px: isRoot ? 1 : 0,
        }}
      >
        {renderLoadingProgress()}
        {childNodes.map((n) => (
          <TreeItem key={n.nodeId} node={n} label={LabelComponent} level={level + 1} />
        ))}
      </StyledTreeItem>
    </TreeItemProvider>
  );
});

export default TreeItem;
