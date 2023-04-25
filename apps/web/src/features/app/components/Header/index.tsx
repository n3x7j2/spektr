import { Stack } from '@mui/material';

import { NavItem } from '~/types';

import Actions from './Actions';
import Brand from './Brand';
import Navigation from './Navigation';

interface HeaderProps {
  navItems: NavItem[];
}

const Header = ({ navItems }: HeaderProps) => {
  return (
    <Stack direction="row" justifyContent="space-between">
      <Stack direction="row">
        <Brand />
        <Navigation items={navItems} />
      </Stack>
      <Actions />
    </Stack>
  );
};

export default Header;
