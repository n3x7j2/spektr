/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { BOMStatus } from './BOMStatus';

export type BOMDto = {
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
  bomNumber?: number;
  directiveNumberFormatted?: string | null;
  directiveNumber?: number;
  directiveNumberFormat?: string | null;
  directiveVersion?: number;
  creationTime?: string;
  lastModificationTime?: string | null;
  projectExtraType?: string | null;
  projectPhase?: string | null;
  primaryComponent?: string | null;
  isHaveAnyFieldItems?: boolean;
  readonly statusText?: string | null;
  userCreatorId?: string;
  employeeCreatorId?: string | null;
  employeeCreatorName?: string | null;
  isDeleteAble?: boolean;
};
