import { Actions, Segments } from '@spektr/common';
import { notifications } from '@spektr/notifications';
import { ProjectUpdateCombineDto } from '@spektr/rest';
import { omit } from 'lodash';
import Router from 'next/router';
import { useEffect, useMemo } from 'react';

import { Panel } from '~/components';
import { useDiscardFormEvent, useSaveFormEvent } from '~/events';
import { useCreateProject, useGetProject, useUpdateProjectCombine } from '~/hooks/api';
import { useQueryParams } from '~/hooks/useQueryParams';
import { useSavingEnabled } from '~/store';
import { FormHandle } from '~/types/form';
import { Section } from '~/types/section';

import { useFormHandleRefs } from '../../../hooks/useFormHandleRefs';
import { AllowancesContent, AllowancesTitle } from './sections/Allowances';
import { EstimatesAllProductsContent, EstimatesAllProductsTitle } from './sections/EstimatesAllProducts';
import { EstimatesDetailsContent, EstimatesDetailsTitle } from './sections/EstimatesDetails';
import { GeneralInformationContent, GeneralInformationTitle } from './sections/General';
import { OtherInformationContent, OtherInformationTitle } from './sections/Other';
import { ScheduleInformationContent, ScheduleInformationTitle } from './sections/Schedule';
import { WallTypeInformationContent, WallTypeInformationTitle } from './sections/WallType';

const validateAndSetData = async (
  contentRef: FormHandle | null,
  requestBody: ProjectUpdateCombineDto = {},
  dataKey:
    | 'upsertProjectSchedules'
    | 'upsertProjectEstimates'
    | 'upsertProjectWallTypeInformations'
    | 'upsertProjectAllowances',
) => {
  if (contentRef?.isDirty()) {
    const isValid = await contentRef.validate();
    if (isValid) {
      requestBody[dataKey] = contentRef.getData();
    }
  }
};

const InfoPanel = () => {
  const { pid: projectId, action } = useQueryParams('pid', 'action');

  const { data: project } = useGetProject(projectId);
  const { mutateAsync: createProjectAsync, data: createdProject } = useCreateProject();
  const { mutateAsync: updateProjectAsync } = useUpdateProjectCombine();
  const [, setSavingEnabled] = useSavingEnabled();
  const {
    generalContentRef,
    scheduleContentRef,
    estimatesDetailsContentRef,
    wallTypeContentRef,
    allowancesContentRef,
    otherContentRef,
  } = useFormHandleRefs();

  const handleSubmit = async () => {
    let requestBody: ProjectUpdateCombineDto = {};
    let isValid = true;
    if (generalContentRef.current) {
      isValid = await generalContentRef.current.validate();
      const formData = generalContentRef.current.getData();
      if (formData.id) {
        requestBody.updateProject = omit(formData, ['id']);
      } else {
        isValid && (await createProjectAsync({ body: omit(formData, ['id']) }));
        return;
      }
    }
    validateAndSetData(scheduleContentRef.current, requestBody, 'upsertProjectSchedules');
    validateAndSetData(estimatesDetailsContentRef.current, requestBody, 'upsertProjectEstimates');
    validateAndSetData(wallTypeContentRef.current, requestBody, 'upsertProjectWallTypeInformations');
    validateAndSetData(allowancesContentRef.current, requestBody, 'upsertProjectAllowances');
    if (otherContentRef.current) {
      isValid = isValid && (await otherContentRef.current.validate());
      const formData = otherContentRef.current.getData();
      requestBody.updateProject = requestBody.updateProject
        ? { ...requestBody.updateProject, ...omit(formData, ['id']) }
        : omit(formData, ['id']);
    }

    if (!isValid) {
      notifications.clean();
      notifications.show({
        severity: 'error',
        variant: 'filled',
        message: 'Please fix all errors before trying to save',
      });
      throw new Error('Please fix all errors before trying to save');
    } else {
      await updateProjectAsync({ id: projectId, body: requestBody });
    }
  };

  useSaveFormEvent({
    saveForm: async (event) => {
      try {
        await handleSubmit();
        setSavingEnabled(false);
        event?.callback?.();
      } catch (err) {}
    },
  });

  useDiscardFormEvent({
    discardForm: () => {
      generalContentRef.current?.discard();
      scheduleContentRef.current?.discard();
      estimatesDetailsContentRef.current?.discard();
      wallTypeContentRef.current?.discard();
      allowancesContentRef.current?.discard();
      otherContentRef.current?.discard();
    },
  });

  useEffect(() => {
    if (createdProject?.id) {
      Router.push(`/projects/${createdProject.id}/overview`);
    }
  }, [createdProject?.id]);

  const infoSections: Section[] = useMemo(
    () => [
      {
        id: 'generalInfo',
        hide: projectId === Segments.All && action !== Actions.CreateProject,
        defaultExpanded: true,
        slots: {
          Summary: <GeneralInformationTitle />,
          Details: <GeneralInformationContent ref={generalContentRef} />,
        },
        ComponentProps: {
          DetailsProps: { sx: { px: 2, py: 1 } },
        },
      },
      {
        id: 'scheduleInfo',
        hide: !project,
        defaultExpanded: true,
        slots: {
          Summary: <ScheduleInformationTitle />,
          Details: <ScheduleInformationContent ref={scheduleContentRef} />,
        },
        ComponentProps: {
          DetailsProps: { sx: { px: 2, py: 1 } },
        },
      },
      {
        id: 'estimateDetails',
        hide: !project,
        defaultExpanded: true,
        slots: {
          Summary: <EstimatesDetailsTitle />,
          Details: <EstimatesDetailsContent ref={estimatesDetailsContentRef} />,
        },
        ComponentProps: {
          DetailsProps: { sx: { px: 2, py: 1 } },
        },
      },
      {
        id: 'estimateAllProducts',
        hide: !project,
        defaultExpanded: true,
        slots: {
          Summary: <EstimatesAllProductsTitle />,
          Details: <EstimatesAllProductsContent />,
        },
        ComponentProps: {
          DetailsProps: { sx: { px: 2, py: 1 } },
        },
      },
      {
        id: 'wallTypeInfo',
        hide: !project,
        defaultExpanded: true,
        slots: {
          Summary: <WallTypeInformationTitle />,
          Details: <WallTypeInformationContent ref={wallTypeContentRef} />,
        },
        ComponentProps: {
          DetailsProps: { sx: { px: 2, py: 1 } },
        },
      },
      {
        id: 'allowances',
        hide: !project,
        defaultExpanded: true,
        slots: {
          Summary: <AllowancesTitle />,
          Details: <AllowancesContent ref={allowancesContentRef} />,
        },
        ComponentProps: {
          DetailsProps: { sx: { px: 2, py: 1 } },
        },
      },
      {
        id: 'otherInfo',
        hide: !project,
        defaultExpanded: true,
        slots: {
          Summary: <OtherInformationTitle />,
          Details: <OtherInformationContent ref={otherContentRef} />,
        },
        ComponentProps: {
          DetailsProps: { sx: { px: 2, py: 1 } },
        },
      },
    ],
    [
      action,
      allowancesContentRef,
      estimatesDetailsContentRef,
      generalContentRef,
      otherContentRef,
      project,
      projectId,
      scheduleContentRef,
      wallTypeContentRef,
    ],
  );

  return <Panel sections={infoSections} />;
};

export default InfoPanel;
