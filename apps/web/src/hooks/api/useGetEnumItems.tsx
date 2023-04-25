import { find, map } from 'lodash';

import { useGetAppConfig } from './useGetAppConfig';

export const useGetEnumItems = (enumName: string) => {
  const { data: appConfigData, ...rest } = useGetAppConfig();

  const enums = appConfigData?.enums || [];

  const enumItems = find(enums, (e) => e.enumName == enumName)?.enumItems || [];

  return { data: map(enumItems, (e) => ({ value: e.enumItemValue || 0, text: e.enumItemName || '' })), ...rest };
};
