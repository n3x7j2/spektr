import { useGetLookupCountries, useGetLookupProvinces, useGetLookupTaxes } from '~/hooks/api';

export const useLocationLookups = (countryId?: string | null) => {
  const { data: taxes = [], isLoading: isLoadingTaxes } = useGetLookupTaxes();
  const { data: countries = [], isLoading: isLoadingCountries } = useGetLookupCountries();
  const { data: provinces = [], isLoading: isLoadingProvinces } = useGetLookupProvinces(countryId);

  return {
    taxes,
    countries,
    provinces,
    isLoading: isLoadingTaxes || isLoadingCountries,
  };
};
