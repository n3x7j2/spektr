import { RightComponentProps } from '~/features/app/components';
import { useGetProject } from '~/hooks/api';
import { useQueryParams } from '~/hooks/useQueryParams';

import { RightPanelLayout } from '../../components';
import InfoPanel from './panels/InfoPanel';

const RightPanel = (props: RightComponentProps) => {
  const { pid: projectId } = useQueryParams('pid');
  const { isError } = useGetProject(projectId);

  // const isCreateNewProject = useMemo(
  //   () => projectId === Segments.All && action === Actions.CreateProject,
  //   [projectId, action],
  // );

  return (
    <RightPanelLayout
      slots={{
        // InfoComponent: (project && !isError) || isCreateNewProject ? <InfoPanel /> : null,
        InfoComponent: !isError ? <InfoPanel /> : null,
      }}
    />
  );
};

export default RightPanel;
