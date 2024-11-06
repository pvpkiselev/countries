import { ApolloClient, InMemoryCache, ApolloProvider } from '@apollo/client';
import { CssBaseline, ThemeProvider } from '@mui/material';
import { theme } from '../theme/theme';

const client = new ApolloClient({
  uri: 'https://countries.trevorblades.com/graphql',
  cache: new InMemoryCache(),
});

const Providers: React.FC<React.PropsWithChildren> = ({ children }) => (
  <ThemeProvider theme={theme}>
    <CssBaseline />
    <ApolloProvider client={client}>{children}</ApolloProvider>
  </ThemeProvider>
);

export default Providers;
