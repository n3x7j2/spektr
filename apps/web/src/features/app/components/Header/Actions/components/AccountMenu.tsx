import ExitToAppIcon from '@mui/icons-material/ExitToApp';
import HelpIcon from '@mui/icons-material/Help';
import PersonIcon from '@mui/icons-material/Person';
import SettingsIcon from '@mui/icons-material/Settings';
import { Avatar, Divider, IconButton, IconButtonProps, ListItemIcon, Menu, MenuItem } from '@mui/material';
import Link from 'next/link';
import { signOut } from 'next-auth/react';
import { useState } from 'react';

const AccountMenu = () => {
  const [anchorEl, setAnchorEl] = useState<HTMLElement | null>(null);
  const open = Boolean(anchorEl);

  const handleClick: IconButtonProps['onClick'] = (event) => {
    event.stopPropagation();
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => setAnchorEl(null);

  return (
    <>
      <IconButton
        onClick={handleClick}
        size="small"
        aria-controls={open ? 'account-menu' : undefined}
        aria-haspopup="true"
        aria-expanded={open ? 'true' : undefined}
      >
        <Avatar>AB</Avatar>
      </IconButton>
      <Menu
        anchorEl={anchorEl}
        id="account-menu"
        sx={{
          '& .MuiPaper-root': {
            marginTop: '15px',
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
        <MenuItem onClick={handleClose}>
          <ListItemIcon>
            <PersonIcon htmlColor="#78909c" />
          </ListItemIcon>
          Manage your Profile
        </MenuItem>
        <MenuItem onClick={handleClose}>
          <ListItemIcon>
            <HelpIcon htmlColor="#78909c" />
          </ListItemIcon>
          Help
        </MenuItem>
        <MenuItem component={Link} href="/management/system/fields" target="_blank">
          <ListItemIcon>
            <SettingsIcon htmlColor="#78909c" />
          </ListItemIcon>
          Admin Panel
        </MenuItem>
        <Divider />
        <MenuItem onClick={() => signOut({ redirect: true, callbackUrl: '/' })}>
          <ListItemIcon>
            <ExitToAppIcon htmlColor="#78909c" />
          </ListItemIcon>
          Sign out
        </MenuItem>
      </Menu>
    </>
  );
};

export default AccountMenu;
