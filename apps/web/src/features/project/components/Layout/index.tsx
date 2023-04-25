import { ComponentType } from 'react';

import { DefaultLayout as Layout, MainComponentProps, RightComponentProps } from '~/features/app/components';
import { defaultNavItems } from '~/features/app/constants';

import LeftPanel from './LeftPanel';

interface ProjectLayoutProps {
  slots: {
    MainComponent: ComponentType<MainComponentProps>;
    RightComponent: ComponentType<RightComponentProps>;
  };
}

const ProjectLayout = (props: ProjectLayoutProps) => {
  const {
    slots: { MainComponent, RightComponent },
  } = props;

  return (
    <Layout
      navItems={defaultNavItems}
      slots={{
        LeftComponent: LeftPanel,
        MainComponent,
        RightComponent,
      }}
    />
  );
};

export default ProjectLayout;
