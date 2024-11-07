import { useQuery } from '@apollo/client';
import { useDebouncedCallback } from 'use-debounce';
import { GET_COUNTRIES } from '../api/getCountriesQuery';
import { createCountryFilter } from '../lib/utils';
import type { Country } from '../models/types';
import { DEBOUNCE_TIME } from '../lib/constants';

interface UseCountryDataResult {
  searchCountries: (value: string) => void;
  countries: Country[] | undefined;
  loading: boolean;
  error: Error | undefined;
}

export const useCountryData = (): UseCountryDataResult => {
  const { data, loading, error, refetch } = useQuery<{ countries: Country[] }>(GET_COUNTRIES);

  const searchCountries = useDebouncedCallback((value: string) => {
    refetch({
      filter: createCountryFilter(value),
    });
  }, DEBOUNCE_TIME);

  return {
    searchCountries,
    countries: data?.countries,
    loading,
    error,
  };
};
