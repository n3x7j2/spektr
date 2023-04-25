/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

export type CompanyUpdateDto = {
  id?: string;
  companyName: string;
  companyFederalTaxID?: string | null;
  holdShipments?: boolean;
};
