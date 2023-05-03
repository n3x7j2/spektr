import LayersIcon from '@mui/icons-material/Layers';
import { Box, Stack } from '@mui/material';
import React from 'react';

import ActionsMenu from './ActionsMenu';

interface PageTitleProps {
  projectName?: string | null;
}

const PageTitle = ({ projectName }: PageTitleProps) => {
  return (
    <Stack direction="row" sx={{ height: 40, justifyContent: 'space-between' }}>
      <Stack direction="row" alignItems="center">
        <LayersIcon htmlColor="#78909c" />
        <Box sx={{ ml: 1.5, fontWeight: 500, fontSize: 18, lineHeight: '24px' }}>Requests: {projectName}</Box>
      </Stack>
      <Box>
        <ActionsMenu />
      </Box>
    </Stack>
  );
};

export default PageTitle;
