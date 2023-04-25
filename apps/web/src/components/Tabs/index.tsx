import { TabList } from '@mui/lab';
import { ComponentsProps, styled } from '@mui/material';

const StyledTabs = styled((props: ComponentsProps['MuiTabs']) => <TabList {...props} />)({
  height: 40,

  '& .MuiTabs-flexContainer': {
    height: '100%',
  },

  '& .MuiTabs-indicator': {
    backgroundColor: '#78909c',
  },
});

export default StyledTabs;
