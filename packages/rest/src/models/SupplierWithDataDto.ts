/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { SupplierContactDto } from './SupplierContactDto';
import type { SupplierDto } from './SupplierDto';
import type { SupplierLocationDto } from './SupplierLocationDto';

export type SupplierWithDataDto = {
  supplier?: SupplierDto;
  supplierContact?: SupplierContactDto;
  supplierLocation?: SupplierLocationDto;
};
