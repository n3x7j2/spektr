/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

export type EmailTemplateCreateDto = {
  name: string;
  description?: string | null;
  subject: string;
  template: string;
  isActive?: boolean;
  module: string;
  feature: string;
};
