import { Box, Container, Typography } from '@mui/material';

function App() {
  return (
    <Box display="flex" flexDirection="column" minHeight="100vh" overflow="auto">
      <Container maxWidth="lg" sx={{ mt: 6 }}>
        <Typography variant="h1" component="h1" marginBottom={4}>
          Countries
        </Typography>
      </Container>
    </Box>
  );
}

export default App;
