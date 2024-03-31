import { useMutation, useApolloClient } from '@apollo/client';
import { AUTHENTICATE } from '../graphql/mutations';
import useAuthStorage from './useAuthStorage';

export const useSignIn = () => {
  const [mutate, result] = useMutation(AUTHENTICATE);
  const authStorage = useAuthStorage();
  const client = useApolloClient();

  const signIn = async ({ username, password }) => {
    try {
      const { data } = await mutate({ variables: { username, password } });

      if (data && data.authenticate && data.authenticate.accessToken) {
        await authStorage.setAccessToken(data.authenticate.accessToken);
        await client.resetStore();
      } else {
        console.error('Authentication failed: Invalid accessToken');
      }
    } catch (error) {
      console.error('Authentication error:', error);
    }
  };

  return [signIn, result];
};
