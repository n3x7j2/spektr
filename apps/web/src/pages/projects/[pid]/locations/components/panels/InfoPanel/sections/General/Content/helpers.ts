import { ProjectShippingLocationDto } from '@spektr/rest';

import { FormValues } from './types';

export const defaultValues: FormValues = {
  id: '',
  contactOnSite: '',
  shipZone: '',
  contactPhoneNumber: '',
  federalTaxID: null,
  contactEmail: '',
  directionsMap: false,
  destinationName: '',
  address1: '',
  postalCode: '',
  city: '',
  countryId: null,
  provinceStateId: null,
  comments: '',
};

export const mapLocationToFormFields = (location: ProjectShippingLocationDto): FormValues => {
  return {
    id: location.id || '',
    contactOnSite: location.contactOnSite || '',
    shipZone: location.shipZone || '',
    contactPhoneNumber: location.contactPhoneNumber || '',
    federalTaxID: location.federalTaxID || null,
    contactEmail: location.contactEmail || '',
    directionsMap: location.directionsMap || false,
    destinationName: location.destinationName || '',
    address1: location.address1 || '',
    postalCode: location.postalCode || '',
    city: location.city || '',
    countryId: location.countryId || null,
    provinceStateId: location.provinceStateId || null,
    comments: location.comments || '',
  };
};
