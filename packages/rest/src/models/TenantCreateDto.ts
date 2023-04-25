/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

export type TenantCreateDto = {
  readonly extraProperties?: Record<string, any> | null;
  name: string;
  timeZone: string;
  flemingDBConnectionString?: string | null;
  poNumberFormat?: string | null;
  clientDomain?: string | null;
  adminEmailAddress: string;
  adminPassword: string;
  connectionString: string;
};
