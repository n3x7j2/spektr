/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { AutomationStepType } from './AutomationStepType';
import type { PropertyDefineInfoDto } from './PropertyDefineInfoDto';

export type AutomationStepDefinitionDto = {
  type?: AutomationStepType;
  name?: string | null;
  schema?: Array<PropertyDefineInfoDto> | null;
};
