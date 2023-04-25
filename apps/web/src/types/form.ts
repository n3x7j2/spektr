export type FormHandle = {
  isDirty: () => boolean;
  discard: () => void;
  getData: () => any;
  validate: () => Promise<boolean>;
};

export interface BaseFormValues {}
