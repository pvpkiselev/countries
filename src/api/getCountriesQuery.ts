import { gql } from '@apollo/client';

export const GET_COUNTRIES = gql`
  query GetCountries($filter: CountryFilterInput) {
    countries(filter: $filter) {
      code
      name
      capital
      languages {
        native
      }
      continent {
        name
      }
      phone
      emoji
      currency
    }
  }
`;
