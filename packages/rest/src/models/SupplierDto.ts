/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { ServiceTypeDto } from './ServiceTypeDto';
import type { SupplierContactDto } from './SupplierContactDto';

export type SupplierDto = {
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
  creationTime?: string;
  lastModificationTime?: string | null;
  contacts?: Array<SupplierContactDto> | null;
  serviceTypes?: Array<ServiceTypeDto> | null;
};
