import AddCircleIcon from '@mui/icons-material/AddCircle';
import DeleteIcon from '@mui/icons-material/Delete';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import { Box, IconButton, IconButtonProps, ListItemIcon, Menu, MenuItem, Stack } from '@mui/material';
import { QueryParams } from '@spektr/common';
import { modals } from '@spektr/modals';
import Link from 'next/link';
import { useState } from 'react';

import { useDeleteShippingLocation, useGetProject, useGetShippingLocation } from '~/hooks/api';
import { useQueryParams } from '~/hooks/useQueryParams';

const ActionsMenu = () => {
  const [anchorEl, setAnchorEl] = useState<HTMLElement | null>(null);
  const open = Boolean(anchorEl);
  const { pid: projectId, lid: locationId } = useQueryParams(QueryParams.ProjectId, QueryParams.LocationId);
  const { data: project } = useGetProject(projectId);
  const { data: location } = useGetShippingLocation(locationId);
  const { mutate: deleteShippingLocation } = useDeleteShippingLocation();

  const handleClick: IconButtonProps['onClick'] = (event) => setAnchorEl(event.currentTarget);
  const handleClose = () => setAnchorEl(null);

  const handleDelete = () => {
    modals.openConfirmModal({
      title: (
        <Stack direction="row" alignItems="center">
          <DeleteIcon color="primary" />
          <Box sx={{ ml: 0.5 }} color="primary.main">
            Delete Shipping Location
          </Box>
        </Stack>
      ),
      children: <>Are you sure you want to delete the shipping location?</>,
      labels: { confirm: 'Confirm', cancel: 'Discard' },
      onConfirm: async () => {
        modals.closeAll();
        deleteShippingLocation({ projectId, locationId });
      },
      onCancel: () => {
        modals.closeAll();
      },
    });
  };

  return (
    <>
      <IconButton sx={{ color: '#78909c' }} onClick={handleClick}>
        <MoreVertIcon htmlColor="#78909c" />
      </IconButton>
      <Menu
        anchorEl={anchorEl}
        sx={{
          '& .MuiPaper-root': {
            marginTop: '5px',
            minWidth: 200,

            '& .MuiMenuItem-root': {
              py: 1,
              fontSize: 13,
              lineHeight: '20px',
              letterSpacing: '0.25px',
            },
          },
        }}
        open={open}
        onClose={handleClose}
        onClick={handleClose}
        transformOrigin={{ horizontal: 'right', vertical: 'top' }}
        anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
      >
        <MenuItem component={Link} href={`/projects/${project?.id}/locations?action=cl`}>
          <ListItemIcon>
            <AddCircleIcon htmlColor="#78909c" />
          </ListItemIcon>
          Add New Location
        </MenuItem>
        <MenuItem disabled={!location} onClick={handleDelete}>
          <ListItemIcon>
            <DeleteIcon htmlColor="#78909c" />
          </ListItemIcon>
          Delete Location
        </MenuItem>
      </Menu>
    </>
  );
};

export default ActionsMenu;
