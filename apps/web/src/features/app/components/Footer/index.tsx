import AirplayIcon from '@mui/icons-material/Airplay';
import LanIcon from '@mui/icons-material/Lan';
import MessageIcon from '@mui/icons-material/Message';
import RssFeedIcon from '@mui/icons-material/RssFeed';
import CartIcon from '@mui/icons-material/ShoppingCart';
import StorageIcon from '@mui/icons-material/Storage';
import { Button, Stack } from '@mui/material';
import React from 'react';

const Footer = () => {
  return (
    <Stack
      direction="row"
      sx={{ borderTop: '1px solid #c6cacc', height: 40, padding: 0.5 }}
      justifyContent="space-between"
    >
      <Stack direction="row" alignItems="center">
        <Button variant="s-outlined" endIcon={<RssFeedIcon htmlColor="#069697" />}>
          Good Connection
        </Button>
        <Button variant="s-outlined" sx={{ px: 1, ml: 1, minWidth: 'auto' }}>
          <AirplayIcon sx={{ fontSize: 20 }} />
        </Button>
        <Button variant="s-outlined" sx={{ px: 1, ml: 1, minWidth: 'auto' }}>
          <StorageIcon sx={{ fontSize: 20 }} />
        </Button>
        <Button variant="s-outlined" sx={{ px: 1, ml: 1, minWidth: 'auto' }}>
          <LanIcon sx={{ fontSize: 20 }} />
        </Button>
      </Stack>
      <Stack direction="row" alignItems="center">
        <Button
          variant="s-contained"
          startIcon={<CartIcon />}
          sx={{ backgroundColor: '#78909c', '&:hover': { backgroundColor: '#78909c' } }}
        >
          Cart - Unavailable
        </Button>
        <Button variant="s-contained" startIcon={<MessageIcon />} sx={{ ml: 1 }}>
          Notes - Unavailable
        </Button>
      </Stack>
    </Stack>
  );
};

export default Footer;
