import { useQuery } from '@apollo/client';
import { useDebouncedCallback } from 'use-debounce';
import { GET_COUNTRIES } from '../api/getCountriesQuery';
import { createCodeFilter } from '../lib/utils';
import type { Country } from '../models/types';

interface UseCountryDataResult {
  refetchCountries: (value: string) => void;
  countries: Country[] | undefined;
  loading: boolean;
  error: Error | undefined;
}

export const useCountryData = (): UseCountryDataResult => {
  const { data, loading, error, refetch } = useQuery<{ countries: Country[] }>(GET_COUNTRIES, {
    variables: {
      filter: createCodeFilter(''),
    },
  });

  const debounceTime = 300;

  const debouncedRefetch = useDebouncedCallback((value: string) => {
    refetch({
      filter: createCodeFilter(value),
    });
  }, debounceTime);

  return {
    refetchCountries: debouncedRefetch,
    countries: data?.countries,
    loading,
    error,
  };
};
