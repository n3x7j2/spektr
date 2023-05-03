import NewProjectIcon from '@mui/icons-material/CreateNewFolder';
import NewDirectiveIcon from '@mui/icons-material/Description';
import NewScopeIcon from '@mui/icons-material/Queue';
import { Button, ButtonProps, Divider, ListItemIcon, Menu, MenuItem } from '@mui/material';
import Link from 'next/link';
import { useState } from 'react';

const ActionsMenu = () => {
  const [anchorEl, setAnchorEl] = useState<HTMLElement | null>(null);
  const open = Boolean(anchorEl);

  const handleClick: ButtonProps['onClick'] = (event) => setAnchorEl(event.currentTarget);
  const handleClose = () => setAnchorEl(null);

  return (
    <>
      <Button onClick={handleClick} variant="outlined" sx={{ minWidth: 100 }}>
        Create
      </Button>
      <Menu
        anchorEl={anchorEl}
        id="account-menu"
        sx={{
          '& .MuiPaper-root': {
            marginTop: '10px',
            minWidth: 200,

            '& .MuiMenuItem-root': {
              py: 1.5,
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
        <MenuItem component={Link} href="/projects/all/overview?action=cp">
          <ListItemIcon>
            <NewProjectIcon htmlColor="#78909c" />
          </ListItemIcon>
          New Project
        </MenuItem>
        <MenuItem onClick={handleClose}>
          <ListItemIcon>
            <NewScopeIcon htmlColor="#78909c" />
          </ListItemIcon>
          New Scope
        </MenuItem>
        <MenuItem onClick={handleClose}>
          <ListItemIcon>
            <NewProjectIcon htmlColor="#78909c" />
          </ListItemIcon>
          New Phase
        </MenuItem>
        <Divider />
        <MenuItem onClick={handleClose}>
          <ListItemIcon>
            <NewDirectiveIcon htmlColor="#78909c" />
          </ListItemIcon>
          New Directive
        </MenuItem>
      </Menu>
    </>
  );
};

export default ActionsMenu;
