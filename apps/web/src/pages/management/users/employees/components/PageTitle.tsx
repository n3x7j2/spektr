import UsersIcon from '@mui/icons-material/Person';
import { Box, Stack } from '@mui/material';
import React from 'react';

interface PageTitleProps {}

const PageTitle = (props: PageTitleProps) => {
  return (
    <Stack direction="row" sx={{ height: 40 }}>
      <Stack direction="row" alignItems="center">
        <UsersIcon htmlColor="#78909c" />
        <Box sx={{ ml: 1.5, fontWeight: 500, fontSize: 18, lineHeight: '24px' }}>Users</Box>
      </Stack>
      <Box></Box>
    </Stack>
  );
};

export default PageTitle;
