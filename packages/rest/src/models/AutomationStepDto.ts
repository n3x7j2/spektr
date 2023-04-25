/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { AutomationStepType } from './AutomationStepType';

export type AutomationStepDto = {
  id?: string | null;
  type?: AutomationStepType;
  name?: string | null;
  configuration?: string | null;
  order?: number;
};
