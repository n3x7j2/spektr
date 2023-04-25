import LayersIcon from '@mui/icons-material/Layers';
import { Box, Stack } from '@mui/material';
import React from 'react';

interface PageTitleProps {}

const PageTitle = (props: PageTitleProps) => {
  return (
    <Stack direction="row" sx={{ height: 40 }}>
      <Stack direction="row" alignItems="center">
        <LayersIcon htmlColor="#78909c" />
        <Box sx={{ ml: 1.5, fontWeight: 500, fontSize: 18, lineHeight: '24px' }}>Data</Box>
      </Stack>
      <Box></Box>
    </Stack>
  );
};

export default PageTitle;
