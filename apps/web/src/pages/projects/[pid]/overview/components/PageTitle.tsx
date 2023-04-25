import StoriesIcon from '@mui/icons-material/AutoStories';
import { Box, Stack } from '@mui/material';
import React from 'react';

interface PageTitleProps {
  projectName?: string | null;
}

const PageTitle = ({ projectName }: PageTitleProps) => {
  return (
    <Stack direction="row" sx={{ height: 40 }}>
      <Stack direction="row" alignItems="center">
        <StoriesIcon htmlColor="#78909c" />
        <Box sx={{ ml: 1.5, fontWeight: 500, fontSize: 18, lineHeight: '24px' }}>
          Overview: {projectName || 'All Projects'}
        </Box>
      </Stack>
      <Box></Box>
    </Stack>
  );
};

export default PageTitle;
