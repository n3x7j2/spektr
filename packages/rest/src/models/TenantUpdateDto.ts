/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

export type TenantUpdateDto = {
  readonly extraProperties?: Record<string, any> | null;
  name: string;
  timeZone: string;
  flemingDBConnectionString?: string | null;
  poNumberFormat?: string | null;
  clientDomain?: string | null;
};
