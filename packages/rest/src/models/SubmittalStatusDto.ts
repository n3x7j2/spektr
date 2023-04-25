/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

export type SubmittalStatusDto = {
  id?: string;
  submittalStatus: string;
  isDefaultStatus?: boolean;
  isCompletedStatus?: boolean;
  creationTime?: string;
  lastModificationTime?: string | null;
};
