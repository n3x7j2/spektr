import { Box, MenuItem, MenuList, Paper, Popper, TabProps } from '@mui/material';
import { Modules, useHover, useTimeout } from '@spektr/common';
import { findIndex, startsWith } from 'lodash';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { ComponentProps, useCallback, useEffect, useState } from 'react';

import { useQueryParams } from '~/hooks/useQueryParams';
import { NavItem } from '~/types';

import Tab from './Tab';
import Tabs from './Tabs';

interface NavigationProps {
  items: NavItem[];
}

type TabMenuProps = ComponentProps<typeof Tab> & {
  items: NavItem[];
};

const TabMenu = (props: TabMenuProps) => {
  const { items, ...rest } = props;

  const { asPath } = useRouter();
  const [anchorEl, setAnchorEl] = useState<HTMLElement | null>(null);
  const open = Boolean(anchorEl);

  const handleMouseOver: TabProps['onMouseOver'] = (event) => setAnchorEl(event.currentTarget);
  const { start: handleClose, clear: clearHandleClose } = useTimeout(() => setAnchorEl(null), 300);

  return (
    <>
      <Tab {...rest} onMouseOver={handleMouseOver} onMouseLeave={handleClose} />
      {items.length > 0 && (
        <Popper open={open} anchorEl={anchorEl} placement="bottom-start" sx={{ zIndex: 1000 }}>
          <Paper elevation={2}>
            <MenuList
              onMouseEnter={clearHandleClose}
              onMouseLeave={handleClose}
              sx={{
                marginTop: '10px',
                minWidth: 130,

                '& .MuiMenuItem-root': {
                  color: '#78909c',
                  py: 0.75,
                  fontSize: 13,
                  lineHeight: '20px',
                  letterSpacing: '0.25px',

                  '&.Mui-selected': {
                    borderLeft: '5px solid #78909c',
                  },
                },
              }}
            >
              {items.map(({ path, text, startsWith: target, disabled = false, exact = true }) => {
                return (
                  <MenuItem
                    selected={exact ? asPath === path : startsWith(asPath, target)}
                    key={path}
                    disabled={disabled}
                    component={Link}
                    href={path}
                  >
                    {text}
                  </MenuItem>
                );
              })}
            </MenuList>
          </Paper>
        </Popper>
      )}
    </>
  );
};

const Navigation = (props: NavigationProps) => {
  const { items } = props;

  const { pid: projectId } = useQueryParams('pid');
  const { asPath } = useRouter();

  const activeIndex = findIndex(items, ({ exact = true, path, startsWith: target }) =>
    exact ? asPath === path : startsWith(asPath, target),
  );

  const tabValue = activeIndex < 0 ? false : activeIndex;

  const getChildren = useCallback(
    (item: NavItem) => {
      switch (item.module) {
        case Modules.Projects:
          return item.children ? item.children({ projectId }) : [];
        default:
          return item.children ? item.children() : [];
      }
    },
    [projectId],
  );

  return (
    <Box sx={{ height: 80 }}>
      <Tabs value={tabValue} variant="scrollable" scrollButtons="auto">
        {items.map((item) => {
          const items = getChildren(item);
          return (
            <TabMenu
              key={item.path}
              icon={item.icon}
              LinkComponent={Link}
              href={item.path}
              label={item.text}
              items={items}
              disableRipple
            />
          );
        })}
      </Tabs>
    </Box>
  );
};

export default Navigation;
