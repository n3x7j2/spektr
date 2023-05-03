/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

export type EmployeeCreateDto = {
  employeeCode?: string | null;
  userName?: string | null;
  firstName?: string | null;
  middleName?: string | null;
  lastName?: string | null;
  title?: string | null;
  email?: string | null;
  address?: string | null;
  city?: string | null;
  stateProvinceId?: string | null;
  postalCode?: string | null;
  countryId?: string | null;
  phoneNumber?: string | null;
  dateOfBirth?: string | null;
  startDate?: string | null;
  endDate?: string | null;
  photoUrl?: string | null;
  departmentId?: string;
  teamId?: string;
  positionID?: string;
  employeeTypeID?: string;
  employeeStatusId?: string;
  isRandomPassword?: boolean;
  password?: string | null;
  isActivationEmail?: boolean;
};
