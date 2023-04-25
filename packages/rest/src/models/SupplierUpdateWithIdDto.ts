/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

export type SupplierUpdateWithIdDto = {
  id?: string;
  supplierName: string;
  address?: string | null;
  city?: string | null;
  postalCode?: string | null;
  provinceStateId?: string | null;
  countryId?: string | null;
  phoneNumber?: string | null;
  secondaryPhoneNumber?: string | null;
  faxNumber?: string | null;
  email?: string | null;
  serviceTypeIds?: Array<string> | null;
};
