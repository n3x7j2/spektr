/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { CompanyBranchContactDto } from './CompanyBranchContactDto';
import type { CompanyBranchDto } from './CompanyBranchDto';
import type { CompanyDto } from './CompanyDto';
import type { ProjectContactDto } from './ProjectContactDto';

export type CompanyWithDataDto = {
  company?: CompanyDto;
  companyBranch?: CompanyBranchDto;
  companyBranchContact?: CompanyBranchContactDto;
  projectContact?: ProjectContactDto;
};
