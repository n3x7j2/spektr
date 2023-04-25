/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

export type CurrenciesCreateDto = {
  currency: string;
  currencyLong: string;
  taxRate?: number;
  currencySymbol: string;
  taxName?: string | null;
};
