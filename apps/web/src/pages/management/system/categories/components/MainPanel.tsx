import { Box } from '@mui/material';

import { MainComponentProps } from '~/features/app/components';

import PageTitle from './PageTitle';

const MainPanel = (props: MainComponentProps) => {
  return (
    <Box sx={{ px: 2, pb: 1.5, bgcolor: 'white' }}>
      <PageTitle />
    </Box>
  );
};

export default MainPanel;
