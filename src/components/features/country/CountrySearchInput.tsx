import { useState } from 'react';
import TextField from '@mui/material/TextField';
import { normalizeSearchQuery } from '../../../lib/utils';

interface CountrySearchInputProps {
  onSearch: (query: string) => void;
}

const CountrySearchInput: React.FC<CountrySearchInputProps> = ({ onSearch }) => {
  const [query, setQuery] = useState('');
  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const normalizedQuery = normalizeSearchQuery(event.target.value);
    setQuery(normalizedQuery);
    onSearch(normalizedQuery);
  };

  return (
    <TextField
      value={query}
      variant="outlined"
      placeholder="Search by country code"
      onChange={handleInputChange}
      sx={{ maxWidth: 288 }}
      fullWidth
    />
  );
};

export default CountrySearchInput;
