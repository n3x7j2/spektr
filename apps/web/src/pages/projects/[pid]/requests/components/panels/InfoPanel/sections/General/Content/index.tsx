import { yupResolver } from '@hookform/resolvers/yup';
import { Grid, Skeleton } from '@mui/material';
import { Actions, QueryParams } from '@spektr/common';
import { filter, find, first, keys } from 'lodash';
import Router from 'next/router';
import { forwardRef, ForwardRefRenderFunction, useCallback, useEffect, useImperativeHandle, useMemo } from 'react';
import { Controller, useForm } from 'react-hook-form';
import * as Yup from 'yup';

import { Autocomplete, DatePicker, TextField, useAccordion } from '~/components';
import { toDayJs } from '~/helpers';
import { useGetEmployeeId, useGetPurchaseRequest } from '~/hooks/api';
import { useQueryParams } from '~/hooks/useQueryParams';
import { useSavingEnabled } from '~/store';
import { FormHandle } from '~/types/form';

import { defaultValues, mapRequestToFormFields } from './helpers';
import { useRequestLookups } from './hooks/useRequestLookups';
import { FormKeys } from './types';

const validationSchema = Yup.object({});

const Content: ForwardRefRenderFunction<FormHandle, {}> = (props, ref) => {
  const {
    pid: projectId,
    rid: requestId,
    action,
  } = useQueryParams(QueryParams.ProjectId, QueryParams.RequestId, QueryParams.Action);
  const { data: request, isLoading: isLoadingRequest } = useGetPurchaseRequest(requestId);

  const [, setSavingEnabled] = useSavingEnabled();
  const isCreateNewRequest = useMemo(() => !request && action === Actions.CreateRequest, [request, action]);

  const { expanded, toggle } = useAccordion();

  const {
    control,
    setFocus,
    setValue,
    formState: { touchedFields, errors, isDirty },
    trigger,
    reset,
    getValues,
    watch,
  } = useForm({
    defaultValues,
    resolver: yupResolver(validationSchema),
    mode: 'all',
    criteriaMode: 'firstError',
  });

  const watchProjectId = watch('projectId');

  const employeeId = useGetEmployeeId();
  const { requestTypes, projects, managers, statuses, isLoading: isLoadingLookups } = useRequestLookups();
  const isLoading = useMemo(
    () => (isCreateNewRequest ? false : isLoadingRequest) || isLoadingLookups,
    [isLoadingLookups, isLoadingRequest, isCreateNewRequest],
  );

  const isTouched = keys(touchedFields).length > 0;

  const resetForm = useCallback(() => {
    if (request) {
      const selectedProject = find(projects, (p) => p.value === request.projectId);
      reset({ ...mapRequestToFormFields(request), projectNumber: selectedProject?.projectNumber || '' });
    } else {
      const defaultProject = find(projects, (p) => p.value === projectId);
      const defaultStatus = find(statuses, (s) => !!s.isDefault);
      const defaultRequestor = find(managers, (m) => m.value === employeeId);
      reset({
        ...defaultValues,
        projectId: defaultProject?.value || null,
        projectNumber: defaultProject?.projectNumber || '',
        requestedById: defaultRequestor?.value || null,
        purchaseRequestStatusId: defaultStatus?.value || null,
      });
    }
  }, [employeeId, managers, projectId, projects, request, reset, statuses]);

  useEffect(() => {
    resetForm();
  }, [resetForm]);

  useEffect(() => {
    const selectedProject = find(projects, (p) => p.value === watchProjectId);
    setValue('projectNumber', selectedProject?.projectNumber || '');
  }, [projects, setValue, watchProjectId]);

  useEffect(() => {
    const firstError = first(keys(errors));
    if (firstError) {
      setTimeout(() => setFocus(firstError as FormKeys), 100);
    }
  }, [errors, setFocus]);

  useEffect(() => {
    if (isCreateNewRequest) {
      setTimeout(() => setFocus('purchaseRequestTypeId'), 100);
    }
  }, [isCreateNewRequest, setFocus]);

  useEffect(() => {
    if (isDirty) {
      setSavingEnabled(true);
    }
  }, [isDirty, setSavingEnabled]);

  useImperativeHandle(ref, () => ({
    isDirty: () => isDirty,
    discard: () => {
      if (isCreateNewRequest) {
        Router.push(`/projects/${projectId}/requests`);
      } else {
        resetForm();
      }
    },
    getData: () => {
      return getValues();
    },
    validate: async () => {
      if (isTouched) {
        const isValid = await trigger();
        if (!isValid && !expanded) {
          toggle();
        }
        return isValid;
      }

      return true;
    },
  }));

  return (
    <Grid container spacing={1.5}>
      <Grid item xs={8}>
        {isLoading ? (
          <Skeleton variant="rounded" width="100%" height={36} />
        ) : (
          <Controller
            name="purchaseRequestTypeId"
            control={control}
            render={({ field: { onChange, ref, ...restProps } }) => (
              <Autocomplete
                {...restProps}
                inputRef={ref}
                onChange={(event, newValue) => onChange(newValue?.value || null)}
                options={requestTypes}
                label="Request Type *"
                fullWidth
              />
            )}
          />
        )}
      </Grid>
      <Grid item xs={4}>
        {isLoading ? (
          <Skeleton variant="rounded" width="100%" height={36} />
        ) : (
          <Controller
            name="purchaseRequestNumber"
            control={control}
            render={({ field: { ref, ...restProps } }) => (
              <TextField {...restProps} inputRef={ref} label="Request Number" readOnly fullWidth />
            )}
          />
        )}
      </Grid>
      <Grid item xs={8}>
        {isLoading ? (
          <Skeleton variant="rounded" width="100%" height={36} />
        ) : (
          <Controller
            name="projectId"
            control={control}
            render={({ field: { onChange, ref, ...restProps } }) => (
              <Autocomplete
                {...restProps}
                inputRef={ref}
                onChange={(event, newValue) => onChange(newValue?.value || null)}
                options={projects}
                label="Project Name *"
                readOnly={isCreateNewRequest}
                fullWidth
              />
            )}
          />
        )}
      </Grid>
      <Grid item xs={4}>
        {isLoading ? (
          <Skeleton variant="rounded" width="100%" height={36} />
        ) : (
          <Controller
            name="projectNumber"
            control={control}
            render={({ field: { ref, ...restProps } }) => (
              <TextField {...restProps} inputRef={ref} label="Project Number" readOnly fullWidth />
            )}
          />
        )}
      </Grid>
      <Grid item xs={8}>
        {isLoading ? (
          <Skeleton variant="rounded" width="100%" height={36} />
        ) : (
          <Controller
            name="requestedById"
            control={control}
            render={({ field: { onChange, ref, ...restProps } }) => (
              <Autocomplete
                {...restProps}
                inputRef={ref}
                onChange={(event, newValue) => onChange(newValue?.value || null)}
                options={managers}
                label="Requested By *"
                fullWidth
              />
            )}
          />
        )}
      </Grid>
      <Grid item xs={4}></Grid>
      <Grid item xs={8}>
        {isLoading ? (
          <Skeleton variant="rounded" width="100%" height={84} />
        ) : (
          <Controller
            name="description"
            control={control}
            render={({ field: { ref, ...restProps } }) => (
              <TextField {...restProps} inputRef={ref} label="Description" multiline rows={3} fullWidth />
            )}
          />
        )}
      </Grid>
      <Grid item xs={4}>
        <Grid container spacing={1.5}>
          <Grid item xs={12}>
            {isLoading ? (
              <Skeleton variant="rounded" width="100%" height={36} />
            ) : (
              <Controller
                name="dateTimeRequested"
                control={control}
                render={({ field: { onChange, ref, value, ...restProps } }) => (
                  <DatePicker
                    {...restProps}
                    inputRef={ref}
                    value={toDayJs(value)}
                    onChange={(newValue) => onChange(newValue?.toDate())}
                    label="Date Requested *"
                    error={!!errors.dateTimeRequested}
                    title={errors.dateTimeRequested?.message}
                    fullWidth
                  />
                )}
              />
            )}
          </Grid>
          <Grid item xs={12}>
            {isLoading ? (
              <Skeleton variant="rounded" width="100%" height={36} />
            ) : (
              <Controller
                name="purchaseRequestStatusId"
                control={control}
                render={({ field: { onChange, ref, ...restProps } }) => (
                  <Autocomplete
                    {...restProps}
                    inputRef={ref}
                    onChange={(event, newValue) => onChange(newValue?.value || null)}
                    options={filter(statuses, (s) => s.type === 0)}
                    label="Status *"
                    readOnly={!!request}
                    fullWidth
                  />
                )}
              />
            )}
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default forwardRef(Content);
