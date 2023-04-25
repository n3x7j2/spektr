import ToolsIcon from '@mui/icons-material/Build';
import ProjectsIcon from '@mui/icons-material/ImportContacts';
import FilesIcon from '@mui/icons-material/Inventory2';
import UsersIcon from '@mui/icons-material/Person';
import SystemIcon from '@mui/icons-material/Settings';
import DataIcon from '@mui/icons-material/Storage';
import { TreeNode } from '@spektr/treeview';

export const managementNodes: TreeNode[] = [
  {
    hasChildren: false,
    id: '/management/projects',
    nodeId: '/management/projects',
    nodeType: 'Link',
    nodeValue: 'Projects',
    parentNodeId: null,
    exData: {
      icon: <ProjectsIcon htmlColor="#78909c" />,
    },
  },
  {
    hasChildren: false,
    id: '/management/users/employees',
    nodeId: '/management/users',
    nodeType: 'Link',
    nodeValue: 'Users',
    parentNodeId: null,
    exData: {
      icon: <UsersIcon htmlColor="#78909c" />,
    },
  },
  {
    hasChildren: false,
    id: '/management/files',
    nodeId: '/management/files',
    nodeType: 'Link',
    nodeValue: 'Files',
    parentNodeId: null,
    exData: {
      icon: <FilesIcon htmlColor="#78909c" />,
    },
  },
  {
    hasChildren: false,
    id: '/management/tools',
    nodeId: '/management/tools',
    nodeType: 'Link',
    nodeValue: 'Tools',
    parentNodeId: null,
    exData: {
      icon: <ToolsIcon htmlColor="#78909c" />,
    },
  },
  {
    hasChildren: false,
    id: '/management/system/fields',
    nodeId: '/management/system',
    nodeType: 'Link',
    nodeValue: 'System',
    parentNodeId: null,
    exData: {
      icon: <SystemIcon htmlColor="#78909c" />,
    },
  },
  {
    hasChildren: false,
    id: '/management/data',
    nodeId: '/management/data',
    nodeType: 'Link',
    nodeValue: 'Data',
    parentNodeId: null,
    exData: {
      icon: <DataIcon htmlColor="#78909c" />,
    },
  },
];
