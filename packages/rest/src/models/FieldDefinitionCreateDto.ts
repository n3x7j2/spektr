/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

export type FieldDefinitionCreateDto = {
  name: string;
  fieldType: string;
  dataSource?: string | null;
  defaultValue?: string | null;
  maxLength?: number | null;
  minLength?: number | null;
};
