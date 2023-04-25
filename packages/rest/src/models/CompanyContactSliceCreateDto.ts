/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { CompanyBranchContactCreateDto } from './CompanyBranchContactCreateDto';
import type { CompanyBranchCreateDto } from './CompanyBranchCreateDto';
import type { CompanyCreateDto } from './CompanyCreateDto';

export type CompanyContactSliceCreateDto = {
  companyId?: string | null;
  companyBranchId?: string | null;
  companyBranchContactId?: string | null;
  companyCreateDto?: CompanyCreateDto;
  companyBranchCreateDto?: CompanyBranchCreateDto;
  companyBranchContactCreateDto?: CompanyBranchContactCreateDto;
};
