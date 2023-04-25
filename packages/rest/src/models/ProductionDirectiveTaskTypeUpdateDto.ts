/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

export type ProductionDirectiveTaskTypeUpdateDto = {
  taskType?: string | null;
  taskTypeShort: string;
  isRequiredType: boolean;
  isThirdParty?: boolean;
  description?: string | null;
  minimumNumberOfTaskUnderIt?: number | null;
  maximumNumberOfTaskUnderIt?: number | null;
};
