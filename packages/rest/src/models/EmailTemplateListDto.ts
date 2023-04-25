/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { EmailTemplateType } from './EmailTemplateType';

export type EmailTemplateListDto = {
  id?: string;
  tenantId?: string | null;
  module?: string | null;
  feature?: string | null;
  type?: EmailTemplateType;
  name?: string | null;
  description?: string | null;
  subject?: string | null;
  isActive?: boolean;
};
