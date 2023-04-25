import { ComponentsProps, styled, Tab } from '@mui/material';

const StyledTab = styled((props: ComponentsProps['MuiTab']) => <Tab {...props} />)({
  padding: 0,
  minHeight: 'auto',

  '&.Mui-selected': {
    color: '#78909c',
  },
});

export default StyledTab;
