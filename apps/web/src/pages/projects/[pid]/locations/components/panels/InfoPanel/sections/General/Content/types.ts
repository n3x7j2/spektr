export type FormValues = {
  id: string;
  contactOnSite: string;
  shipZone: string;
  contactPhoneNumber: string;
  federalTaxID: string | null;
  contactEmail: string;
  directionsMap: boolean;
  destinationName: string;
  address1: string;
  postalCode: string;
  city: string;
  countryId: string | null;
  provinceStateId: string | null;
  comments: string;
};

export type FormKeys = keyof FormValues;
