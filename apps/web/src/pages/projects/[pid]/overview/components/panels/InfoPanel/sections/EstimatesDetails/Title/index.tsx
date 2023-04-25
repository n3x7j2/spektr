import { Box, Stack } from '@mui/material';
import React from 'react';

import ActionsMenu from './ActionsMenu';

const Title = () => {
  return (
    <Stack direction="row" width="100%" justifyContent="space-between" alignItems="center">
      <Box>Estimates - Details</Box>
      <ActionsMenu />
    </Stack>
  );
};

export default Title;
