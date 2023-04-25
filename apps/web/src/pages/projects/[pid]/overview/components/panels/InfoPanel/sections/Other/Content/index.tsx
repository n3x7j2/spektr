import { Grid } from '@mui/material';
import { first, isEmpty, keys, pickBy } from 'lodash';
import { forwardRef, ForwardRefRenderFunction, useEffect, useImperativeHandle } from 'react';
import { Controller, useForm } from 'react-hook-form';

import { TextField, useAccordion } from '~/components';
import { useGetProject } from '~/hooks/api';
import { useQueryParams } from '~/hooks/useQueryParams';
import { useSavingEnabled } from '~/store';
import { FormHandle } from '~/types/form';

import { defaultValues, mapProjectToFormFields } from './helpers';
import { FormKeys } from './types';

const Content: ForwardRefRenderFunction<FormHandle, {}> = (props, ref) => {
  const { pid: projectId } = useQueryParams('pid');
  const { data: project } = useGetProject(projectId);
  const [, setSavingEnabled] = useSavingEnabled();

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
    if (isDirty) {
      setSavingEnabled(true);
    }
  }, [isDirty, setSavingEnabled]);

  useImperativeHandle(ref, () => ({
    isDirty: () => isDirty,
    discard: () => {
      if (project) {
        reset(mapProjectToFormFields(project));
      } else {
        reset(defaultValues);
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
        <Controller
          name="projectFolder"
          control={control}
          render={({ field: { ref, ...restProps } }) => (
            <TextField {...restProps} inputRef={ref} label="Project Folder" fullWidth />
          )}
        />
      </Grid>
      <Grid item xs={8}>
        <Controller
          name="specialExclusions"
          control={control}
          render={({ field: { ref, ...restProps } }) => (
            <TextField {...restProps} inputRef={ref} label="Project Exclusions" multiline rows={8} fullWidth />
          )}
        />
      </Grid>
      <Grid item xs={8}>
        <Controller
          name="specialInclusions"
          control={control}
          render={({ field: { ref, ...restProps } }) => (
            <TextField
              {...restProps}
              inputRef={ref}
              label="ContactQualification / Notes / Inclusions"
              multiline
              rows={8}
              fullWidth
            />
          )}
        />
      </Grid>
    </Grid>
  );
};

export default forwardRef(Content);
