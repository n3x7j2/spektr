/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { SupplierContactCreateDto } from './SupplierContactCreateDto';
import type { SupplierContactUpdateWithIdDto } from './SupplierContactUpdateWithIdDto';
import type { SupplierCreateDto } from './SupplierCreateDto';
import type { SupplierLocationCreateDto } from './SupplierLocationCreateDto';
import type { SupplierLocationUpdateWithIdDto } from './SupplierLocationUpdateWithIdDto';
import type { SupplierUpdateWithIdDto } from './SupplierUpdateWithIdDto';

export type SupplierWithDataUpdateDto = {
  createSupplier?: SupplierCreateDto;
  updateSupplier?: SupplierUpdateWithIdDto;
  createSupplierContact?: SupplierContactCreateDto;
  updateSupplierContact?: SupplierContactUpdateWithIdDto;
  createSupplierLocation?: SupplierLocationCreateDto;
  updateSupplierLocation?: SupplierLocationUpdateWithIdDto;
};
