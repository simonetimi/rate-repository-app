import { ApolloClient, InMemoryCache } from '@apollo/client';

const APOLLO_URI = process.env.EXPO_PUBLIC_APOLLO_URI;

const createApolloClient = () => {
  return new ApolloClient({
    uri: APOLLO_URI,
    cache: new InMemoryCache(),
  });
};

export default createApolloClient;
