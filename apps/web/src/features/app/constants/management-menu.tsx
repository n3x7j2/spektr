import ToolsIcon from '@mui/icons-material/Build';
import ProjectsIcon from '@mui/icons-material/ImportContacts';
import FilesIcon from '@mui/icons-material/Inventory2';
import UsersIcon from '@mui/icons-material/Person';
import SystemIcon from '@mui/icons-material/Settings';
import DataIcon from '@mui/icons-material/Storage';
import { Modules } from '@spektr/common';

import { NavItem } from '~/types';

export const navItems: NavItem[] = [
  {
    path: '/management/projects',
    text: 'Projects',
    module: Modules.ProjectsManagement,
    icon: <ProjectsIcon htmlColor="#78909c" />,
  },
  {
    path: '/management/users/employees',
    text: 'Users',
    module: Modules.UsersManagement,
    icon: <UsersIcon htmlColor="#78909c" />,
    exact: false,
    startsWith: '/management/users',
    children: () => [
      {
        path: '/management/users/employees',
        text: 'Employees',
        module: Modules.UsersManagement,
      },
      {
        path: '/management/users/customers',
        text: 'Customers',
        module: Modules.UsersManagement,
      },
    ],
  },
  {
    path: '/management/files',
    text: 'Files',
    module: Modules.FilesManagement,
    icon: <FilesIcon htmlColor="#78909c" />,
  },
  {
    path: '/management/tools',
    text: 'Tools',
    module: Modules.ToolsManagement,
    icon: <ToolsIcon htmlColor="#78909c" />,
  },
  {
    path: '/management/system/fields',
    text: 'System',
    module: Modules.SystemManagement,
    icon: <SystemIcon htmlColor="#78909c" />,
    exact: false,
    startsWith: '/management/system',
    children: () => [
      {
        path: '/management/system/fields',
        text: 'Fields',
        module: Modules.SystemManagement,
      },
      {
        path: '/management/system/field-groups',
        text: 'Field Groups',
        module: Modules.SystemManagement,
      },
      {
        path: '/management/system/categories',
        text: 'Categories',
        module: Modules.SystemManagement,
      },
      {
        path: '/management/system/lookups',
        text: 'Lookups',
        module: Modules.SystemManagement,
      },
    ],
  },
  {
    path: '/management/data',
    text: 'Data',
    module: Modules.DataManagement,
    icon: <DataIcon htmlColor="#78909c" />,
  },
];
