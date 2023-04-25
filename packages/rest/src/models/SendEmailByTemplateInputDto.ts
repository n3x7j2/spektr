/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { EmailAttachmentDto } from './EmailAttachmentDto';

export type SendEmailByTemplateInputDto = {
  templateId?: string | null;
  module?: string | null;
  feature?: string | null;
  data?: Record<string, string | null> | null;
  toEmail?: string | null;
  isRunInForceGround?: boolean;
  attachments?: Array<EmailAttachmentDto> | null;
};
