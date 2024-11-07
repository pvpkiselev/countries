import Grid from '@mui/material/Grid2';
import { Typography } from '@mui/material';
import CountryCard from './CountryCard';
import type { Country } from '../../../models/types';

interface CountryListProps {
  countries: Country[] | undefined;
}

const CountryList: React.FC<CountryListProps> = ({ countries }) => {
  const isNotFound = !countries || countries.length === 0;

  if (isNotFound) {
    return (
      <Typography variant="body1" textAlign="center" color="text.secondary" mb={12}>
        No countries found.
      </Typography>
    );
  }

  return (
    <Grid container spacing={3} mb={12}>
      {countries.map((country) => (
        <Grid key={country.code} size={{ xs: 12, sm: 6, md: 4 }}>
          <CountryCard country={country} />
        </Grid>
      ))}
    </Grid>
  );
};

export default CountryList;
