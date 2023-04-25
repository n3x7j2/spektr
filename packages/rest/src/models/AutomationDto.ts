/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { AutomationEventTrigger } from './AutomationEventTrigger';
import type { AutomationStepDto } from './AutomationStepDto';

export type AutomationDto = {
  trigger?: AutomationEventTrigger;
  name: string;
  steps?: Array<AutomationStepDto> | null;
  id?: string;
};
