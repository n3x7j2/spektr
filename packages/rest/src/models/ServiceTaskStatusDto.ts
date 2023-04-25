/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

export type ServiceTaskStatusDto = {
  status: string;
  isDefault?: boolean;
  isCompleted?: boolean;
  id?: string;
  creationTime?: string;
  lastModificationTime?: string | null;
};
