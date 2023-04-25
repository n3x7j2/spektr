import {
  Description as DirectiveIcon,
  Domain as DomainIcon,
  Folder as FolderIcon,
  Layers as BillIcon,
  Star as StarIcon,
  StarBorder as StarBorderIcon,
} from '@mui/icons-material';
import DeleteIcon from '@mui/icons-material/Delete';
import { Box, IconButton, Stack, SxProps, Theme } from '@mui/material';
import { NodeTypes } from '@spektr/common';
import { modals } from '@spektr/modals';
import { notifications } from '@spektr/notifications';
import { FavouriteEntityType } from '@spektr/rest';
import { TreeNode } from '@spektr/treeview';
import { first, toLower } from 'lodash';
import React, { FC, useCallback } from 'react';

import { useAddProjectToFavourites, useDeleteProjectFromFavourites, useGetEmployeeId } from '~/hooks/api';

type TreeNodeLabelProps = {
  node: TreeNode;
};

const TreeNodeFavourite = ({ node }: { node: TreeNode }) => {
  const employeeId = useGetEmployeeId();
  const { mutate: addProjectToFavourites } = useAddProjectToFavourites();
  const { mutate: deleteProjectFromFavourites } = useDeleteProjectFromFavourites();
  const handleRemove = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    e.stopPropagation();

    if (!employeeId) {
      notifications.clean();
      notifications.show({
        variant: 'filled',
        severity: 'error',
        message: "You can't use this feature because you aren't an employee.",
      });
      return;
    }

    if (node.exData?.favouriteId) {
      modals.openConfirmModal({
        title: (
          <Stack direction="row" alignItems="center">
            <DeleteIcon color="primary" />
            <Box sx={{ ml: 0.5 }} color="primary.main">
              Remove Project From Favourites
            </Box>
          </Stack>
        ),
        children: <>Are you sure you want to remove the project from favourites?</>,
        labels: { confirm: 'Confirm', cancel: 'Discard' },
        onConfirm: async () => {
          modals.closeAll();
          deleteProjectFromFavourites(node.exData.favouriteId);
        },
        onCancel: () => {
          modals.closeAll();
        },
      });
    }
  };

  const handleAdd = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    e.stopPropagation();
    if (!employeeId) {
      notifications.clean();
      notifications.show({
        variant: 'filled',
        severity: 'error',
        message: "You can't use this feature because you aren't an employee.",
      });
      return;
    }
    addProjectToFavourites({
      body: { employeeId, entityId: node.id, entityType: FavouriteEntityType._0 },
    });
  };

  return (
    <Box ml={1} display="flex" alignItems="center">
      {node.exData?.isFavourite ? (
        <IconButton onClick={handleRemove}>
          <StarIcon sx={{ fontSize: 18 }} htmlColor="#f3aa18" />
        </IconButton>
      ) : (
        <IconButton onClick={handleAdd}>
          <StarBorderIcon sx={{ fontSize: 18 }} htmlColor="#78909c" />
        </IconButton>
      )}
    </Box>
  );
};

const TreeNodeLabel: FC<TreeNodeLabelProps> = ({ node }) => {
  const { nodeType, nodeValue } = node;

  const renderIcon = useCallback(() => {
    const iconStyles: SxProps<Theme> =
      nodeType === NodeTypes.ExtraType
        ? {
            display: 'flex',
            alignItems: 'center',
            position: 'relative',
            '&::before': {
              content: `"${toLower(first(nodeValue))}x"`,
              position: 'absolute',
              textTransform: 'uppercase',
              fontStyle: 'normal',
              letterSpacing: '1.2px',
              fontSize: 9,
              color: '#fff',
              left: 5,
              top: 5,
            },
          }
        : {
            display: 'flex',
            alignItems: 'center',
          };

    switch (nodeType) {
      case NodeTypes.MainScope:
        return <DomainIcon htmlColor="#78909c" />;
      case NodeTypes.NonProductionDirectiveDetail:
      case NodeTypes.ProductionDirectiveDetail:
        return <DirectiveIcon htmlColor="#78909c" />;
      case NodeTypes.Bill:
        return <BillIcon htmlColor="#78909c" />;
      default:
        return (
          <Box component="i" sx={iconStyles}>
            <FolderIcon htmlColor="#78909c" />
          </Box>
        );
    }
  }, [nodeType, nodeValue]);

  return (
    <Stack direction="row" justifyContent="space-between" alignItems="center" width="100%">
      <Stack direction="row" overflow="hidden" alignItems="center">
        <Box>{renderIcon()}</Box>
        <Box sx={{ ml: 1, overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }} title={nodeValue}>
          {nodeValue}
        </Box>
      </Stack>

      {nodeType === NodeTypes.Project && <TreeNodeFavourite node={node} />}
    </Stack>
  );
};

export default TreeNodeLabel;
