/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { EmailTemplateFeatureDto } from './EmailTemplateFeatureDto';

export type EmailTemplateModuleDto = {
  name?: string | null;
  features?: Array<EmailTemplateFeatureDto> | null;
};
