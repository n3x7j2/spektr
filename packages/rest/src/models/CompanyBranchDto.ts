/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

export type CompanyBranchDto = {
  id?: string;
  companyId?: string;
  branchAddress?: string | null;
  branchCity?: string | null;
  branchProvinceStateId?: string | null;
  branchProvinceStateName?: string | null;
  branchPostalCode?: string | null;
  branchCountryId?: string | null;
  branchCountryName?: string | null;
  branchPhoneNumber?: string | null;
  branchSecondaryPhoneNumber?: string | null;
  branchFaxNumber?: string | null;
  branchEmail?: string | null;
  hq?: boolean;
  creationTime?: string;
  lastModificationTime?: string | null;
};
