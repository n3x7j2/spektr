/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

export type CompanyUpdateWithIdDto = {
  id?: string;
  companyName: string;
  companyFederalTaxID?: string | null;
  holdShipments?: boolean;
};
