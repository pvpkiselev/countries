import { Typography, Box } from '@mui/material';

interface ErrorMessageProps {
  message: string;
}

const ErrorMessage: React.FC<ErrorMessageProps> = ({ message }) => (
  <Box display="flex" justifyContent="center" alignItems="center" width="100%">
    <Typography variant="body1" color="error" align="center">
      Error: {message}
    </Typography>
  </Box>
);

export default ErrorMessage;
