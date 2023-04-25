import { yupResolver } from '@hookform/resolvers/yup';
import { Grid, Skeleton } from '@mui/material';
import { Actions, Segments } from '@spektr/common';
import { first, isEmpty, keys, pickBy } from 'lodash';
import Router from 'next/router';
import { forwardRef, ForwardRefRenderFunction, useEffect, useImperativeHandle, useMemo } from 'react';
import { Controller, useForm } from 'react-hook-form';
import * as Yup from 'yup';

import { Autocomplete, Checkbox, DatePicker, TextField, useAccordion } from '~/components';
import { toDayJs } from '~/helpers';
import { useGetProject } from '~/hooks/api';
import { useQueryParams } from '~/hooks/useQueryParams';
import { useSavingEnabled } from '~/store';
import { FormHandle } from '~/types/form';

import { defaultValues, mapProjectToFormFields } from './helpers';
import { useProjectLookups } from './hooks/useProjectLookups';
import { FormKeys } from './types';

const validationSchema = Yup.object({
  projectName: Yup.string().label('Project Name').required(),
  projectManagerId: Yup.string().label('Project Manager').required(),
  projectTeamId: Yup.string().label('Team').required(),
  projectTypeId: Yup.string().label('Project Type').required(),
  projectStageId: Yup.string().label('Project Stage').required(),
  projectCreationDateTime: Yup.date().label('Project Creation Date').typeError('Invalid Date').nullable().required(),
  projectCompletionDateTime: Yup.date().label('Project Completion Date').typeError('Invalid Date').nullable(),
});

const Content: ForwardRefRenderFunction<FormHandle, {}> = (props, ref) => {
  const { pid: projectId, action } = useQueryParams('pid', 'action');
  const { data: project, isLoading: isLoadingProject } = useGetProject(projectId);
  const [, setSavingEnabled] = useSavingEnabled();
  const isCreateNewProject = useMemo(
    () => projectId === Segments.All && action === Actions.CreateProject,
    [projectId, action],
  );

  const {
    projectScopes,
    projectStages,
    projectStatus,
    projectTypes,
    employees,
    teams,
    isLoading: isLoadingLookups,
  } = useProjectLookups();

  const isLoading = useMemo(
    () => (isCreateNewProject ? false : isLoadingProject) || isLoadingLookups,
    [isLoadingLookups, isLoadingProject, isCreateNewProject],
  );

  const { expanded, toggle } = useAccordion();

  const {
    control,
    setFocus,
    formState: { touchedFields, errors, isDirty },
    trigger,
    reset,
    getValues,
  } = useForm({
    defaultValues,
    resolver: yupResolver(validationSchema),
    mode: 'all',
    criteriaMode: 'firstError',
  });

  const isTouched = keys(touchedFields).length > 0;

  useEffect(() => {
    if (project) {
      reset(mapProjectToFormFields(project));
    } else {
      reset(defaultValues);
    }
  }, [project, reset]);

  useEffect(() => {
    const firstError = first(keys(errors));
    if (firstError) {
      setTimeout(() => setFocus(firstError as FormKeys), 100);
    }
  }, [errors, setFocus]);

  useEffect(() => {
    if (isCreateNewProject) {
      setTimeout(() => setFocus('projectName'), 100);
    }
  }, [isCreateNewProject, setFocus]);

  useEffect(() => {
    if (isDirty) {
      setSavingEnabled(true);
    }
  }, [isDirty, setSavingEnabled]);

  useImperativeHandle(ref, () => ({
    isDirty: () => isDirty,
    discard: () => {
      if (isCreateNewProject) {
        Router.push('/projects/all/overview');
      } else {
        if (project) {
          reset(mapProjectToFormFields(project));
        } else {
          reset(defaultValues);
        }
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
            name="projectName"
            control={control}
            render={({ field: { ref, ...restProps } }) => (
              <TextField
                {...restProps}
                inputRef={ref}
                autoFocus
                label="Project Name *"
                error={!!errors.projectName}
                title={errors.projectName?.message}
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
            name="projectManagerId"
            control={control}
            render={({ field: { onChange, ref, ...restProps } }) => (
              <Autocomplete
                {...restProps}
                inputRef={ref}
                onChange={(event, newValue) => onChange(newValue?.value || null)}
                options={employees}
                label="Project Manager *"
                error={!!errors.projectManagerId}
                title={errors.projectManagerId?.message}
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
            name="projectTeamId"
            control={control}
            render={({ field: { onChange, ref, ...restProps } }) => (
              <Autocomplete
                {...restProps}
                inputRef={ref}
                onChange={(event, newValue) => onChange(newValue?.value || null)}
                options={teams}
                label="Team *"
                error={!!errors.projectTeamId}
                title={errors.projectTeamId?.message}
                fullWidth
              />
            )}
          />
        )}
      </Grid>
      <Grid item xs={8}>
        {isLoading ? (
          <Skeleton variant="rounded" width="100%" height={36} />
        ) : (
          <Controller
            name="projectEstimatorId"
            control={control}
            render={({ field: { onChange, ref, ...restProps } }) => (
              <Autocomplete
                {...restProps}
                inputRef={ref}
                onChange={(event, newValue) => onChange(newValue?.value || null)}
                options={employees}
                label="Estimator"
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
            name="estimateNumber"
            control={control}
            render={({ field: { ref, ...restProps } }) => (
              <TextField {...restProps} inputRef={ref} label="Estimate Number" fullWidth />
            )}
          />
        )}
      </Grid>
      <Grid item xs={4}>
        {isLoading ? (
          <Skeleton variant="rounded" width="100%" height={36} />
        ) : (
          <Controller
            name="engineeringCalcsProject"
            control={control}
            render={({ field: { onChange, ref, value, ...restProps } }) => (
              <Checkbox
                {...restProps}
                checked={value}
                inputRef={ref}
                onChange={(event, checked) => onChange(checked)}
                label="Eng. Calc. Required"
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
            name="leedProject"
            control={control}
            render={({ field: { onChange, ref, value, ...restProps } }) => (
              <Checkbox
                {...restProps}
                checked={value}
                inputRef={ref}
                onChange={(event, checked) => onChange(checked)}
                label="LEED Project Required"
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
            name="projectTypeId"
            control={control}
            render={({ field: { onChange, ref, ...restProps } }) => (
              <Autocomplete
                {...restProps}
                inputRef={ref}
                onChange={(event, newValue) => onChange(newValue?.value || null)}
                options={projectTypes}
                label="Project Type *"
                error={!!errors.projectTypeId}
                title={errors.projectTypeId?.message}
                fullWidth
              />
            )}
          />
        )}
      </Grid>
      <Grid item xs={8}>
        {isLoading ? (
          <Skeleton variant="rounded" width="100%" height={36} />
        ) : (
          <Controller
            name="projectAddress"
            control={control}
            render={({ field: { ref, ...restProps } }) => (
              <TextField {...restProps} inputRef={ref} label="Location" fullWidth />
            )}
          />
        )}
      </Grid>
      <Grid item xs={4}>
        {isLoading ? (
          <Skeleton variant="rounded" width="100%" height={36} />
        ) : (
          <Controller
            name="projectScope"
            control={control}
            render={({ field: { onChange, ref, ...restProps } }) => (
              <Autocomplete
                {...restProps}
                inputRef={ref}
                onChange={(event, newValue) => onChange(newValue?.value)}
                options={projectScopes}
                label="Project Scope"
                fullWidth
              />
            )}
          />
        )}
      </Grid>
      <Grid item xs={8}>
        {isLoading ? (
          <Skeleton variant="rounded" width="100%" height={36 * 5} />
        ) : (
          <Controller
            name="additionalNotes"
            control={control}
            render={({ field: { ref, ...restProps } }) => (
              <TextField
                {...restProps}
                inputRef={ref}
                label="Outside Quotations/Supplier Requirements"
                multiline
                rows={8}
                fullWidth
              />
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
                name="projectStageId"
                control={control}
                render={({ field: { onChange, ref, ...restProps } }) => (
                  <Autocomplete
                    {...restProps}
                    inputRef={ref}
                    onChange={(event, newValue) => onChange(newValue?.value || null)}
                    options={projectStages}
                    label="Project Stage *"
                    error={!!errors.projectStageId}
                    title={errors.projectStageId?.message}
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
                name="projectCreationDateTime"
                control={control}
                render={({ field: { onChange, ref, value, ...restProps } }) => (
                  <DatePicker
                    {...restProps}
                    inputRef={ref}
                    value={toDayJs(value)}
                    onChange={(newValue) => onChange(newValue?.toDate())}
                    label="Project Creation Date *"
                    error={!!errors.projectCreationDateTime}
                    title={errors.projectCreationDateTime?.message}
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
                name="projectCompletionDateTime"
                control={control}
                render={({ field: { onChange, ref, value, ...restProps } }) => (
                  <DatePicker
                    {...restProps}
                    inputRef={ref}
                    value={toDayJs(value)}
                    onChange={(newValue) => onChange(newValue?.toDate())}
                    label="Project Completion Date"
                    error={!!errors.projectCompletionDateTime}
                    title={errors.projectCompletionDateTime?.message}
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
                name="projectStatus"
                control={control}
                render={({ field: { onChange, ref, ...restProps } }) => (
                  <Autocomplete
                    {...restProps}
                    inputRef={ref}
                    onChange={(event, newValue) => onChange(newValue?.value)}
                    options={projectStatus}
                    label="Project Status"
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
