import { Card, CardContent, Typography, Box } from '@mui/material';
import Flag from 'react-world-flags';
import type { Country } from '../models/types';
import InfoItem from './InfoItem';

interface CountryCardProps {
  country: Country;
}

const CountryCard: React.FC<CountryCardProps> = ({ country }) => {
  const languages = country.languages.map((lang) => lang.native).join(', ');
  const phoneCode = `+${country.phone}`;

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
        <Typography variant="h6" component="h2" fontWeight="bold" gutterBottom>
          {country.name}
        </Typography>

        <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 2 }}>
          <InfoItem label="Capital" value={country.capital} />
          <InfoItem label="Continent" value={country.continent.name} />
          <InfoItem label="Phone Code" value={phoneCode} />
          <InfoItem label="Currency" value={country.currency} />
          <InfoItem label="Languages" value={languages} />
        </Box>
      </CardContent>
    </Card>
  );
};

export default CountryCard;
