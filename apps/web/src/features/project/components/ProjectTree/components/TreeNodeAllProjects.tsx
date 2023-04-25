import ContactsIcon from '@mui/icons-material/ImportContacts';
import { styled, Typography } from '@mui/material';
import { Segments } from '@spektr/common';
import { clsx } from 'clsx';
import Link from 'next/link';

import { useQueryParams } from '~/hooks/useQueryParams';

const StyledLink = styled(Link)({
  display: 'flex',
  alignItems: 'center',
  height: 40,
  padding: '0 8px 0 31px',
  textDecoration: 'none',

  '&.active': {
    backgroundColor: '#367bf5',
    borderRadius: 4,
    color: '#fff !important',

    '&:hover': {
      backgroundColor: '#367bf5',
    },

    svg: {
      color: '#fff !important',
    },
  },

  '&:hover': {
    backgroundColor: '#dce1e3',
    borderRadius: 4,
  },

  '&:active, &:visited': {
    color: 'inherit',
  },
});

const TreeNodeAllProjects = () => {
  const { pid: projectId } = useQueryParams('pid');
  return (
    <StyledLink className={clsx({ active: projectId === Segments.All })} href="/projects/all/overview">
      <ContactsIcon htmlColor="#78909c" />
      <Typography pl={1} pt={0.5} variant="body2">
        All Projects
      </Typography>
    </StyledLink>
  );
};

export default TreeNodeAllProjects;
