/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { SubmittalUpdateDto } from './SubmittalUpdateDto';

export type UpdateSubmittalsDto = {
  transmittalId?: string;
  updateListSubmittal?: Array<SubmittalUpdateDto> | null;
};
