export type FormValues = {
  id: string | null;
  purchaseRequestTypeId: string | null;
  purchaseRequestNumber: number | null;
  projectId: string | null;
  projectNumber: string;
  requestedById: string | null;
  dateTimeRequested: Date | null;
  description: string;
  purchaseRequestStatusId: string | null;
};

export type FormKeys = keyof FormValues;
