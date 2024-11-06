import { useState } from 'react';
import TextField from '@mui/material/TextField';

interface CountrySearchInputProps {
  onSearch: (query: string) => void;
}

const CountrySearchInput: React.FC<CountrySearchInputProps> = ({ onSearch }) => {
  const [query, setQuery] = useState('');
  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setQuery(event.target.value);
    onSearch(event.target.value);
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
