/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

export type SubmittalUpdateWithIdDto = {
  id?: string;
  statusId?: string;
  projectId?: string;
  quantity?: number | null;
  item?: string | null;
  revision?: number;
  referenceDate?: string | null;
  description?: string | null;
  submittalTypeId?: string;
  transmittalId?: string | null;
  requiredByDate?: string;
  dateSent?: string | null;
  responseDate?: string | null;
  customerReferenceId?: string | null;
  projectDocumentTypeId?: string;
  submittalsPurposeId?: string;
};
