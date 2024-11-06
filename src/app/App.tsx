import { Box, Container, Typography } from '@mui/material';
import Providers from './Providers';

function App() {
  return (
    <Providers>
      <Box display="flex" flexDirection="column" minHeight="100vh" overflow="auto">
        <Container maxWidth="lg" sx={{ mt: 6 }}>
          <Typography variant="h1" component="h1" marginBottom={4}>
            Countries
          </Typography>
        </Container>
      </Box>
    </Providers>
  );
}

export default App;
