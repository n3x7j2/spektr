export type FormValues = {
  id: string;
  projectFolder: string;
  specialExclusions: string;
  specialInclusions: string;
};

export type FormKeys = keyof FormValues;
