import { Box } from '@mui/material';
import CountryList from './CountryList';
import { useCountryData } from '../hooks/useCountryData';
import CountrySearchInput from './CountrySearchInput';
import LoadingSpinner from './LoadingSpinner';
import ErrorMessage from './ErrorMessage';

const CountryContainer: React.FC = () => {
  const { searchCountries, countries, loading, error } = useCountryData();

  return (
    <Box display="flex" flexDirection="column" gap={4} width="100%" rowGap={4}>
      <CountrySearchInput onSearch={searchCountries} />

      {loading ? (
        <LoadingSpinner />
      ) : error ? (
        <ErrorMessage message={error.message} />
      ) : (
        <CountryList countries={countries} />
      )}
    </Box>
  );
};

export default CountryContainer;
