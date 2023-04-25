/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { BOMStatus } from './BOMStatus';

export type BOMCreateDto = {
  id?: string;
  productionDirectiveId?: string;
  status?: BOMStatus;
  dateTimeIssued?: string | null;
  assignedToId?: string | null;
  issuedById?: string | null;
  issueComment?: string | null;
  useDO?: boolean;
  useDOComment?: string | null;
  approvedByProduction?: boolean;
  dateTimeApproved?: string | null;
  productionUnits?: number | null;
  daysAllotted?: number | null;
  comments?: string | null;
};
