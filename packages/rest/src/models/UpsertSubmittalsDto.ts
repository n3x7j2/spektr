/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { SubmittalUpsertDto } from './SubmittalUpsertDto';

export type UpsertSubmittalsDto = {
  transmittalId?: string;
  items?: Array<SubmittalUpsertDto> | null;
};
