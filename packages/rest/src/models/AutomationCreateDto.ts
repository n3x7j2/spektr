/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { AutomationEventTrigger } from './AutomationEventTrigger';
import type { AutomationStepDto } from './AutomationStepDto';

export type AutomationCreateDto = {
  trigger?: AutomationEventTrigger;
  name: string;
  steps?: Array<AutomationStepDto> | null;
};
