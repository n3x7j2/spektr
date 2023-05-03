import { PurchaseRequestDto } from '@spektr/rest';

import { toDate } from '~/helpers';

import { FormValues } from './types';

export const defaultValues: FormValues = {
  id: null,
  purchaseRequestTypeId: null,
  purchaseRequestNumber: null,
  projectId: null,
  projectNumber: '',
  requestedById: null,
  dateTimeRequested: null,
  description: '',
  purchaseRequestStatusId: '',
};

export const mapRequestToFormFields = (request: PurchaseRequestDto): FormValues => {
  return {
    id: request.id || null,
    purchaseRequestTypeId: request.purchaseRequestTypeId || null,
    purchaseRequestNumber: request.purchaseRequestNumber || null,
    projectId: request.projectId || null,
    projectNumber: '',
    requestedById: request.requestedById || null,
    dateTimeRequested: toDate(request.dateTimeRequested),
    description: request.description || '',
    purchaseRequestStatusId: request.purchaseRequestStatusId || null,
  };
};
