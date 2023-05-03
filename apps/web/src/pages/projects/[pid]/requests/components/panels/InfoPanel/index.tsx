import { QueryParams } from '@spektr/common';
import { notifications } from '@spektr/notifications';
import { omit } from 'lodash';
import Router from 'next/router';
import { useEffect, useMemo } from 'react';

import { Panel } from '~/components';
import { useDiscardFormEvent, useSaveFormEvent } from '~/events';
import { useCreateShippingLocation, useGetProject, useUpdateShippingLocation } from '~/hooks/api';
import { useQueryParams } from '~/hooks/useQueryParams';
import { useSavingEnabled } from '~/store';
import { Section } from '~/types/section';

import { useFormHandleRefs } from '../../../hooks/useFormHandleRefs';
import { GeneralInformationContent, GeneralInformationTitle } from './sections/General';
import { RequestedItemsContent, RequestedItemsTitle } from './sections/RequestedItems';

const InfoPanel = () => {
  const { pid: projectId } = useQueryParams(QueryParams.ProjectId);

  const { data: project } = useGetProject(projectId);
  const { mutateAsync: createShippingLocationAsync, data: createdLocation } = useCreateShippingLocation();
  const { mutateAsync: updateShippingLocationAsync } = useUpdateShippingLocation();
  const [, setSavingEnabled] = useSavingEnabled();
  const { generalContentRef, requestedItemsContentRef } = useFormHandleRefs();

  const handleSubmit = async () => {
    let isValid = true;
    if (generalContentRef.current) {
      isValid = await generalContentRef.current.validate();

      if (!isValid) {
        notifications.clean();
        notifications.show({
          severity: 'error',
          variant: 'filled',
          message: 'Please fix all errors before trying to save',
        });
        throw new Error('Please fix all errors before trying to save');
      }

      const formData = generalContentRef.current.getData();

      const body: any = { ...omit(formData, ['id']), projectId };
      if (project) {
        if (!formData.id) {
          isValid && (await createShippingLocationAsync({ projectId, body }));
          return;
        } else {
          await updateShippingLocationAsync({ projectId, locationId: formData.id, body });
        }
      }
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
      requestedItemsContentRef.current?.discard();
    },
  });

  useEffect(() => {
    if (createdLocation?.id) {
      Router.push(`/projects/${projectId}/requests?rid=${createdLocation.id}`);
    }
  }, [createdLocation?.id, projectId]);

  const infoSections: Section[] = useMemo(
    () => [
      {
        id: 'generalInfo',
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
        id: 'requestedItems',
        defaultExpanded: true,
        slots: {
          Summary: <RequestedItemsTitle />,
          Details: <RequestedItemsContent ref={requestedItemsContentRef} />,
        },
        ComponentProps: {
          DetailsProps: { sx: { px: 2, py: 1 } },
        },
      },
    ],
    [generalContentRef, requestedItemsContentRef],
  );

  return <Panel sections={infoSections} />;
};

export default InfoPanel;
