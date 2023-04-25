/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

export type SupplierLocationCreateDto = {
  supplierId?: string;
  address: string;
  city?: string | null;
  postalCode?: string | null;
  provinceStateId?: string | null;
  countryId?: string | null;
  phoneNumber?: string | null;
  secondaryPhoneNumber?: string | null;
  faxNumber?: string | null;
  email?: string | null;
  attention?: string | null;
};
