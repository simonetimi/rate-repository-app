import { ApolloClient, InMemoryCache } from '@apollo/client';

const createApolloClient = () => {
  const BASE_URL = 'http://192.168.1.53';
  return new ApolloClient({
    uri: `${BASE_URL}:4000/`,
    cache: new InMemoryCache(),
  });
};

export default createApolloClient;
