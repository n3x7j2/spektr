import { yupResolver } from '@hookform/resolvers/yup';
import { Grid, Skeleton } from '@mui/material';
import { Actions, QueryParams } from '@spektr/common';
import { first, keys } from 'lodash';
import Router from 'next/router';
import { forwardRef, ForwardRefRenderFunction, useEffect, useImperativeHandle, useMemo } from 'react';
import { Controller, useForm } from 'react-hook-form';
import * as Yup from 'yup';

import { Autocomplete, Checkbox, TextField, useAccordion } from '~/components';
import { useGetShippingLocation } from '~/hooks/api';
import { useQueryParams } from '~/hooks/useQueryParams';
import { useSavingEnabled } from '~/store';
import { FormHandle } from '~/types/form';

import { defaultValues, mapLocationToFormFields } from './helpers';
import { useLocationLookups } from './hooks/useLocationLookups';
import { FormKeys } from './types';

const validationSchema = Yup.object({
  contactOnSite: Yup.string().label('Contact On Site').required(),
});

const Content: ForwardRefRenderFunction<FormHandle, {}> = (props, ref) => {
  const {
    pid: projectId,
    lid: locationId,
    action,
  } = useQueryParams(QueryParams.ProjectId, QueryParams.LocationId, QueryParams.Action);
  const { data: location, isLoading: isLoadingLocation } = useGetShippingLocation(locationId);
  const [, setSavingEnabled] = useSavingEnabled();
  const isCreateNewLocation = useMemo(() => !location && action === Actions.CreateLocation, [location, action]);

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

  const watchCountryId = watch('countryId');
  const { taxes, countries, provinces, isLoading: isLoadingLookups } = useLocationLookups(watchCountryId);
  const isLoading = useMemo(
    () => (isCreateNewLocation ? false : isLoadingLocation) || isLoadingLookups,
    [isLoadingLookups, isLoadingLocation, isCreateNewLocation],
  );

  const isTouched = keys(touchedFields).length > 0;

  useEffect(() => {
    if (location) {
      reset(mapLocationToFormFields(location));
    } else {
      reset(defaultValues);
    }
  }, [location, reset]);

  useEffect(() => {
    const firstError = first(keys(errors));
    if (firstError) {
      setTimeout(() => setFocus(firstError as FormKeys), 100);
    }
  }, [errors, setFocus]);

  useEffect(() => {
    if (isCreateNewLocation) {
      setTimeout(() => setFocus('contactOnSite'), 100);
    }
  }, [isCreateNewLocation, setFocus]);

  useEffect(() => {
    if (!watchCountryId) {
      setValue('provinceStateId', null);
    }
  }, [setValue, watchCountryId]);

  useEffect(() => {
    if (isDirty) {
      setSavingEnabled(true);
    }
  }, [isDirty, setSavingEnabled]);

  useImperativeHandle(ref, () => ({
    isDirty: () => isDirty,
    discard: () => {
      if (isCreateNewLocation) {
        Router.push(`/projects/${projectId}/locations`);
      } else {
        if (location) {
          reset(mapLocationToFormFields(location));
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
            name="contactOnSite"
            control={control}
            render={({ field: { ref, ...restProps } }) => (
              <TextField
                {...restProps}
                inputRef={ref}
                autoFocus
                label="Contact On Site *"
                error={!!errors.contactOnSite}
                title={errors.contactOnSite?.message}
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
            name="shipZone"
            control={control}
            render={({ field: { ref, ...restProps } }) => (
              <TextField {...restProps} inputRef={ref} label="Ship Zone" fullWidth />
            )}
          />
        )}
      </Grid>
      <Grid item xs={8}>
        {isLoading ? (
          <Skeleton variant="rounded" width="100%" height={36} />
        ) : (
          <Controller
            name="contactPhoneNumber"
            control={control}
            render={({ field: { ref, ...restProps } }) => (
              <TextField {...restProps} inputRef={ref} label="Phone Number" fullWidth />
            )}
          />
        )}
      </Grid>
      <Grid item xs={4}>
        {isLoading ? (
          <Skeleton variant="rounded" width="100%" height={36} />
        ) : (
          <Controller
            name="federalTaxID"
            control={control}
            render={({ field: { onChange, ref, ...restProps } }) => (
              <Autocomplete
                {...restProps}
                inputRef={ref}
                onChange={(event, newValue) => onChange(newValue?.value || null)}
                options={taxes}
                label="Federal Tax ID"
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
            name="contactEmail"
            control={control}
            render={({ field: { ref, ...restProps } }) => (
              <TextField {...restProps} inputRef={ref} label="Email Address" fullWidth />
            )}
          />
        )}
      </Grid>
      <Grid item xs={4}>
        {isLoading ? (
          <Skeleton variant="rounded" width="100%" height={36} />
        ) : (
          <Controller
            name="directionsMap"
            control={control}
            render={({ field: { onChange, ref, value, ...restProps } }) => (
              <Checkbox
                {...restProps}
                checked={value}
                inputRef={ref}
                onChange={(event, checked) => onChange(checked)}
                label="Directions/Map"
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
            name="destinationName"
            control={control}
            render={({ field: { ref, ...restProps } }) => (
              <TextField {...restProps} inputRef={ref} label="Destination Name" fullWidth />
            )}
          />
        )}
      </Grid>
      <Grid item xs={4}></Grid>
      <Grid item xs={8}>
        {isLoading ? (
          <Skeleton variant="rounded" width="100%" height={36} />
        ) : (
          <Controller
            name="address1"
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
            name="postalCode"
            control={control}
            render={({ field: { ref, ...restProps } }) => (
              <TextField {...restProps} inputRef={ref} label="Postal Code" fullWidth />
            )}
          />
        )}
      </Grid>
      <Grid item xs={8}>
        {isLoading ? (
          <Skeleton variant="rounded" width="100%" height={36} />
        ) : (
          <Controller
            name="city"
            control={control}
            render={({ field: { ref, ...restProps } }) => (
              <TextField {...restProps} inputRef={ref} label="City" fullWidth />
            )}
          />
        )}
      </Grid>
      <Grid item xs={4}>
        {isLoading ? (
          <Skeleton variant="rounded" width="100%" height={36} />
        ) : (
          <Controller
            name="countryId"
            control={control}
            render={({ field: { onChange, ref, ...restProps } }) => (
              <Autocomplete
                {...restProps}
                inputRef={ref}
                onChange={(event, newValue) => onChange(newValue?.value || null)}
                options={countries}
                label="Country"
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
            name="comments"
            control={control}
            render={({ field: { ref, ...restProps } }) => (
              <TextField {...restProps} inputRef={ref} label="Comments" fullWidth />
            )}
          />
        )}
      </Grid>
      <Grid item xs={4}>
        {isLoading ? (
          <Skeleton variant="rounded" width="100%" height={36} />
        ) : (
          <Controller
            name="provinceStateId"
            control={control}
            render={({ field: { onChange, ref, ...restProps } }) => (
              <Autocomplete
                {...restProps}
                inputRef={ref}
                onChange={(event, newValue) => onChange(newValue?.value || null)}
                options={provinces}
                label="Province"
                fullWidth
              />
            )}
          />
        )}
      </Grid>
    </Grid>
  );
};

export default forwardRef(Content);
