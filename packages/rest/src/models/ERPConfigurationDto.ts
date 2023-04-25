/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { ApplicationConfigurationDto } from './ApplicationConfigurationDto';
import type { EnumInfoDto } from './EnumInfoDto';
import type { SettingValue } from './SettingValue';

export type ERPConfigurationDto = {
  abpConfigurationDto?: ApplicationConfigurationDto;
  employeeId?: string | null;
  settingValues?: Array<SettingValue> | null;
  enums?: Array<EnumInfoDto> | null;
};
