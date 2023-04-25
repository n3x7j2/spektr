/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { CompanyBranchContactCreateDto } from './CompanyBranchContactCreateDto';
import type { CompanyBranchContactUpdateWithIdDto } from './CompanyBranchContactUpdateWithIdDto';
import type { CompanyBranchCreateDto } from './CompanyBranchCreateDto';
import type { CompanyBranchUpdateWithIdDto } from './CompanyBranchUpdateWithIdDto';
import type { CompanyCreateDto } from './CompanyCreateDto';
import type { CompanyUpdateWithIdDto } from './CompanyUpdateWithIdDto';
import type { ProjectContactCreateDto } from './ProjectContactCreateDto';
import type { ProjectContactUpdateWithIdDto } from './ProjectContactUpdateWithIdDto';

export type CompanyWithDataUpdateDto = {
  createProjectContact?: ProjectContactCreateDto;
  updateProjectContact?: ProjectContactUpdateWithIdDto;
  createCompany?: CompanyCreateDto;
  updateCompany?: CompanyUpdateWithIdDto;
  createCompanyBranch?: CompanyBranchCreateDto;
  updateCompanyBranch?: CompanyBranchUpdateWithIdDto;
  createCompanyBranchContact?: CompanyBranchContactCreateDto;
  updateCompanyBranchContact?: CompanyBranchContactUpdateWithIdDto;
};
