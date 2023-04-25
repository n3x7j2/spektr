import SystemIcon from '@mui/icons-material/Settings';
import { Box, Stack } from '@mui/material';
import React from 'react';

interface PageTitleProps {}

const PageTitle = (props: PageTitleProps) => {
  return (
    <Stack direction="row" sx={{ height: 40 }}>
      <Stack direction="row" alignItems="center">
        <SystemIcon htmlColor="#78909c" />
        <Box sx={{ ml: 1.5, fontWeight: 500, fontSize: 18, lineHeight: '24px' }}>Fields</Box>
      </Stack>
      <Box></Box>
    </Stack>
  );
};

export default PageTitle;
