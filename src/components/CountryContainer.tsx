import { Typography, Box, CircularProgress } from '@mui/material';
import CountryList from './CountryList';
import { useCountryData } from '../hooks/useCountryData';
import CountrySearchInput from './CountrySearchInput';

const CountryContainer: React.FC = () => {
  const { searchCountries, countries, loading, error } = useCountryData();

  return (
    <Box display="flex" flexDirection="column" gap={4} width="100%" rowGap={4}>
      <CountrySearchInput onSearch={searchCountries} />

      {loading ? (
        <CircularProgress />
      ) : error ? (
        <Typography variant="body1" color="error" align="center">
          Error: {error.message}
        </Typography>
      ) : (
        <CountryList countries={countries} />
      )}
    </Box>
  );
};

export default CountryContainer;
