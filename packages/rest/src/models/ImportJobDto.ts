/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { ImportJobStatus } from './ImportJobStatus';

export type ImportJobDto = {
  importName?: string | null;
  jobId?: string | null;
  status?: ImportJobStatus;
  totalRow?: number;
  totalRowSuccess?: number;
  totalRowFail?: number;
  errors?: string | null;
  id?: string;
  creator?: string | null;
  creationTime?: string;
  lastModificationTime?: string | null;
};
