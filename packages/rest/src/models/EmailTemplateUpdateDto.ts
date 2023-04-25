/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

export type EmailTemplateUpdateDto = {
  name: string;
  description?: string | null;
  subject: string;
  template: string;
  isActive?: boolean;
};
