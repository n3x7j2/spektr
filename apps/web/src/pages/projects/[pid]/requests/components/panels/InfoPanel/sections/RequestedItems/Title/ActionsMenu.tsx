import AddCircleIcon from '@mui/icons-material/AddCircle';
import DeleteIcon from '@mui/icons-material/Delete';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import { Box, IconButton, IconButtonProps, ListItemIcon, Menu, MenuItem } from '@mui/material';
import { useState } from 'react';

import { useAccordion } from '~/components';
import { addNewItem, removeItem } from '~/events';

import { useSelectedRows } from '../useSelectedRows';

const ActionsMenu = () => {
  const [anchorEl, setAnchorEl] = useState<HTMLElement | null>(null);
  const open = Boolean(anchorEl);
  const { expanded, toggle } = useAccordion();
  const [selectedRows] = useSelectedRows();

  const handleClick: IconButtonProps['onClick'] = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => setAnchorEl(null);

  const handleAddNew = () => {
    if (!expanded) {
      toggle();
    }
    addNewItem();
  };

  return (
    <Box onClick={(event) => event.stopPropagation()}>
      <IconButton onClick={handleClick}>
        <MoreVertIcon />
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
        <MenuItem onClick={handleAddNew}>
          <ListItemIcon>
            <AddCircleIcon htmlColor="#78909c" />
          </ListItemIcon>
          Add New
        </MenuItem>
        <MenuItem disabled={selectedRows.length === 0} onClick={() => removeItem()}>
          <ListItemIcon>
            <DeleteIcon htmlColor="#78909c" />
          </ListItemIcon>
          Remove
        </MenuItem>
      </Menu>
    </Box>
  );
};

export default ActionsMenu;
