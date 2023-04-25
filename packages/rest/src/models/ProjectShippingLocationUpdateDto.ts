/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

export type ProjectShippingLocationUpdateDto = {
  destinationName?: string | null;
  address1?: string | null;
  address2?: string | null;
  address3?: string | null;
  city?: string | null;
  provinceStateId?: string | null;
  postalCode?: string | null;
  countryId?: string | null;
  shipZone?: string | null;
  contactOnSite: string;
  contactPhoneNumber?: string | null;
  contactEmail?: string | null;
  comments?: string | null;
  federalTaxID?: string | null;
  directionsMap?: boolean;
  projectId: string;
};
