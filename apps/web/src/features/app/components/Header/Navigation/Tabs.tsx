import { ComponentsProps, styled, Tabs } from '@mui/material';

const StyledTabs = styled((props: ComponentsProps['MuiTabs']) => (
  <Tabs {...props} TabIndicatorProps={{ sx: { display: 'none' } }} />
))({
  height: 80,
  width: '100%',

  '& .MuiTabs-flexContainer': {
    height: '100%',
  },
});

export default StyledTabs;
