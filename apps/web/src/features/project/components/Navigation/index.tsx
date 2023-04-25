import React from 'react';

import { Navbar } from '~/components';
import { useQueryParams } from '~/hooks/useQueryParams';
import { NavItem } from '~/types';

const Navigation = () => {
  const { pid: projectId } = useQueryParams('pid');

  const navItems: NavItem[] = [];

  return <Navbar items={navItems} />;
};

export default Navigation;
