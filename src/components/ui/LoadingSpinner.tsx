import { CircularProgress, Box } from '@mui/material';

const LoadingSpinner: React.FC = () => (
  <Box display="flex" justifyContent="center" alignItems="center" width="100%">
    <CircularProgress />
  </Box>
);

export default LoadingSpinner;
