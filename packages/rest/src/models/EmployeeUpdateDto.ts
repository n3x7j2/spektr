/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

export type EmployeeUpdateDto = {
  employeeCode?: string | null;
  firstName?: string | null;
  middleName?: string | null;
  lastName?: string | null;
  title?: string | null;
  email?: string | null;
  address?: string | null;
  city?: string | null;
  postalCode?: string | null;
  countryId?: string | null;
  stateProvinceId?: string | null;
  phoneNumber?: string | null;
  dateOfBirth?: string | null;
  startDate?: string | null;
  endDate?: string | null;
  photoUrl?: string | null;
  userName?: string | null;
  isRandomPassword?: boolean;
  password?: string | null;
  departmentId?: string;
  teamId?: string;
  positionID?: string;
  employeeTypeID?: string;
  employeeStatusId?: string;
  isActive?: boolean;
  isActivationEmail?: boolean;
};
