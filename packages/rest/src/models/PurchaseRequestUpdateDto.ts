/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

export type PurchaseRequestUpdateDto = {
  id?: string;
  projectId?: string;
  requestedById?: string;
  dateTimeRequested?: string;
  purchaseRequestStatusId?: string;
  description?: string | null;
  purchaseRequestTypeId?: string;
};
