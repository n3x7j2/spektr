import PurchasingIcon from '@mui/icons-material/AttachMoney';
import ProductionIcon from '@mui/icons-material/Build';
import DashboardIcon from '@mui/icons-material/Dashboard';
import ProjectsIcon from '@mui/icons-material/ImportContacts';
import InventoryIcon from '@mui/icons-material/Inventory';
import SalesIcon from '@mui/icons-material/ShoppingBag';
import { Modules, Segments } from '@spektr/common';
import { isEmpty, toLower } from 'lodash';

import { NavItem } from '~/types';

export const navItems: NavItem[] = [
  {
    path: '/dashboard',
    text: 'Dashboard',
    module: Modules.Dashboard,
    icon: <DashboardIcon htmlColor="#78909c" />,
  },
  {
    path: '/sales',
    text: 'Sales & Estimating',
    module: Modules.SalesEstimating,
    icon: <SalesIcon htmlColor="#78909c" />,
  },
  {
    path: '/projects/all/overview',
    text: 'Projects',
    module: Modules.Projects,
    icon: <ProjectsIcon htmlColor="#78909c" />,
    exact: false,
    startsWith: '/projects',
    children: (data?: any) => {
      const projectId = isEmpty(data?.projectId) ? 'all' : toLower(data.projectId);
      return [
        {
          path: `/projects/${projectId}/overview`,
          text: 'Overview',
          module: Modules.Projects,
        },
        {
          path: `/projects/${projectId}/locations`,
          text: 'Locations',
          module: Modules.Projects,
          disabled: projectId === Segments.All,
        },
        {
          path: `/projects/${projectId}/directives`,
          text: 'Directives',
          module: Modules.Projects,
          disabled: projectId === Segments.All,
        },
        {
          path: `/projects/${projectId}/systems`,
          text: 'Systems',
          module: Modules.Projects,
          disabled: projectId === Segments.All,
        },
        {
          path: `/projects/${projectId}/requests`,
          text: 'Requests',
          module: Modules.Projects,
          disabled: projectId === Segments.All,
        },
        {
          path: `/projects/${projectId}/services`,
          text: 'Services',
          module: Modules.Projects,
          disabled: projectId === Segments.All,
        },
        {
          path: `/projects/${projectId}/boms`,
          text: 'BOM',
          module: Modules.Projects,
          disabled: projectId === Segments.All,
        },
        {
          path: `/projects/${projectId}/contacts`,
          text: 'Contacts',
          module: Modules.Projects,
        },
        {
          path: `/projects/${projectId}/documents`,
          text: 'Documents',
          module: Modules.Projects,
          disabled: projectId === Segments.All,
        },
        {
          path: `/projects/${projectId}/reports`,
          text: 'Reports',
          module: Modules.Projects,
          disabled: projectId === Segments.All,
        },
      ];
    },
  },
  {
    path: '/production',
    text: 'Production',
    module: Modules.Production,
    icon: <ProductionIcon htmlColor="#78909c" />,
  },
  {
    path: '/inventory/components',
    text: 'Inventory',
    module: Modules.Inventory,
    icon: <InventoryIcon htmlColor="#78909c" />,
    exact: false,
    startsWith: '/inventory',
    children: () => [
      {
        path: '/inventory/components',
        text: 'Components',
        module: Modules.Inventory,
      },
      {
        path: '/inventory/items',
        text: 'Items',
        module: Modules.Inventory,
      },
      {
        path: '/inventory/suppliers',
        text: 'Suppliers',
        module: Modules.Inventory,
      },
      {
        path: '/inventory/services',
        text: 'Services',
        module: Modules.Inventory,
      },
      {
        path: '/inventory/locations',
        text: 'Locations',
        module: Modules.Inventory,
      },
      {
        path: '/inventory/reports',
        text: 'Reports',
        module: Modules.Inventory,
      },
    ],
  },
  {
    path: '/purchasing/orders',
    text: 'Purchasing',
    module: Modules.Purchasing,
    icon: <PurchasingIcon htmlColor="#78909c" />,
    exact: false,
    startsWith: '/purchasing',
    children: () => [
      {
        path: '/purchasing/orders',
        text: 'Orders',
        module: Modules.Purchasing,
      },
      {
        path: '/purchasing/requests',
        text: 'Requests',
        module: Modules.Purchasing,
      },
      {
        path: '/purchasing/suppliers',
        text: 'Suppliers',
        module: Modules.Purchasing,
      },
      {
        path: '/purchasing/services',
        text: 'Services',
        module: Modules.Purchasing,
      },
      {
        path: '/purchasing/reports',
        text: 'Reports',
        module: Modules.Purchasing,
      },
    ],
  },
];
