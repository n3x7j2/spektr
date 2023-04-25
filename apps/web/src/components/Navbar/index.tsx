import { Box } from '@mui/material';
import { findIndex, startsWith } from 'lodash';
import Link from 'next/link';
import { useRouter } from 'next/router';
import React from 'react';

import { NavItem } from '~/types';

import Tab from './Tab';
import Tabs from './Tabs';

interface NavbarProps {
  items: NavItem[];
}

const Navbar = (props: NavbarProps) => {
  const { items } = props;

  const { asPath } = useRouter();

  const activeItemIndex = findIndex(items, ({ exact = true, path, startsWith: target }) =>
    exact ? asPath === path : startsWith(asPath, target),
  );

  const tabValue = activeItemIndex < 0 ? false : activeItemIndex;

  return (
    <Box sx={{ height: 40 }}>
      <Tabs value={tabValue} variant="scrollable" scrollButtons="auto">
        {items.map((item) => (
          <Tab key={item.path} icon={item.icon} LinkComponent={Link} href={item.path} label={item.text} disableRipple />
        ))}
      </Tabs>
    </Box>
  );
};

export default Navbar;
