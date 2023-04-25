import { useGetAppConfig } from './useGetAppConfig';

export const useGetEmployeeId = () => {
  const { data: appConfigData } = useGetAppConfig();

  return appConfigData?.employeeId || undefined;
};
