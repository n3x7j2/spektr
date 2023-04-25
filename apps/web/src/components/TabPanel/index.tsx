import { TabPanel, TabPanelProps } from '@mui/lab';
import { styled } from '@mui/material';

const StyledTabPanel = styled((props: TabPanelProps) => (
  <TabPanel {...props} />
))({
  padding: 0,
});

export default StyledTabPanel;
