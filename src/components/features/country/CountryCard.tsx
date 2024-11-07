import { Card, CardContent, Typography, Box } from '@mui/material';
import Flag from 'react-world-flags';
import type { Country } from '../../../models/types';
import InfoItem from '../../ui/InfoItem';
import { formatLanguages, formatPhoneCode, formatValue } from '../../../lib/utils';

interface CountryCardProps {
  country: Country;
}

const CountryCard: React.FC<CountryCardProps> = ({ country }) => {
  const capital = formatValue(country.capital);
  const continentName = formatValue(country.continent?.name);
  const phoneCode = formatPhoneCode(country.phone);
  const currency = formatValue(country.currency);
  const languages = formatLanguages(country.languages);

  return (
    <Card
      elevation={0}
      sx={{
        position: 'relative',
        display: 'flex',
        flexDirection: 'column',
        gap: 2,
        overflow: 'hidden',
        flexGrow: 1,
        borderRadius: '12px',
        backgroundColor: '#f9f9f9',
        py: 6,
        px: 4,
        height: '100%',
      }}
    >
      <Flag
        code={country.code}
        style={{
          position: 'absolute',
          right: 8,
          top: 8,
          width: '56px',
          height: 'auto',
          borderRadius: '4px',
        }}
      />

      <CardContent sx={{ width: '100%', padding: '0px !important' }}>
        <Typography variant="h6" component="h2" fontWeight="bold" gutterBottom maxWidth={280}>
          {country.name}
        </Typography>

        <Box display="flex" flexWrap="wrap" gap={2}>
          <InfoItem label="Capital" value={capital} />
          <InfoItem label="Continent" value={continentName} />
          <InfoItem label="Phone Code" value={phoneCode} />
          <InfoItem label="Currency" value={currency} />
          <InfoItem label="Languages" value={languages} />
        </Box>
      </CardContent>
    </Card>
  );
};

export default CountryCard;
