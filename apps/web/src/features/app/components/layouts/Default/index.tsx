import { Box, Stack } from '@mui/material';
import React, { ComponentType, PropsWithChildren, useCallback, useEffect, useState } from 'react';
import { HandlerProps, ReflexContainer, ReflexElement, ReflexSplitter } from 'react-reflex';

import { NavItem } from '~/types';

import Footer from '../../Footer';
import Header from '../../Header';

type PanelDimension = {
  panelWidth?: number;
  panelHeight?: number;
};

export type LeftComponentProps = PropsWithChildren & PanelDimension;

export type MainComponentProps = PropsWithChildren & PanelDimension;

export type RightComponentProps = PropsWithChildren & PanelDimension;

interface DefaultLayoutProps {
  navItems: NavItem[];
  slots: {
    LeftComponent: ComponentType<LeftComponentProps>;
    MainComponent: ComponentType<MainComponentProps>;
    RightComponent: ComponentType<RightComponentProps>;
  };
}

const DefaultLayout = (props: DefaultLayoutProps) => {
  const {
    navItems,
    slots: { LeftComponent, MainComponent, RightComponent },
  } = props;

  const [leftPanelDimension, setLeftPanelDimension] = useState<PanelDimension>({});
  const [mainPanelDimension, setMainPanelDimension] = useState<PanelDimension>({});
  const [rightPanelDimension, setRightPanelDimension] = useState<PanelDimension>({});

  const handleResizePanel = useCallback((event: HandlerProps, panel: 'Left' | 'Main' | 'Right') => {
    const { domElement } = event;
    if (domElement && domElement instanceof HTMLElement) {
      const dimension = {
        panelWidth: domElement.offsetWidth,
        panelHeight: domElement.offsetHeight,
      };
      if (panel === 'Left') {
        setLeftPanelDimension(dimension);
      }
      if (panel === 'Main') {
        setMainPanelDimension(dimension);
      }
      if (panel === 'Right') {
        setRightPanelDimension(dimension);
      }
    }
  }, []);

  return (
    <>
      <Box sx={{ height: '100vh' }}>
        <Header navItems={navItems} />
        <Box sx={{ height: 'calc(100vh - 122px)' }}>
          <ReflexContainer orientation="vertical">
            <ReflexElement
              className="left-panel"
              minSize={300}
              size={300}
              onResize={(e) => handleResizePanel(e, 'Left')}
            >
              <LeftComponent {...leftPanelDimension} />
            </ReflexElement>
            <ReflexSplitter propagate={true} />
            <ReflexElement className="main-panel" onResize={(e) => handleResizePanel(e, 'Main')}>
              <MainComponent {...mainPanelDimension} />
            </ReflexElement>
            <ReflexSplitter propagate={true} />
            <ReflexElement
              className="right-panel"
              flex={0.32}
              minSize={400}
              onResize={(e) => handleResizePanel(e, 'Right')}
            >
              <RightComponent {...rightPanelDimension} />
            </ReflexElement>
          </ReflexContainer>
        </Box>
        <Footer />
      </Box>
    </>
  );
};

export default DefaultLayout;
