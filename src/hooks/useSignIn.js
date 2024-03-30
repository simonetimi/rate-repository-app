import { useMutation, useApolloClient } from '@apollo/client';
import { AUTHENTICATE } from '../graphql/mutations';
import useAuthStorage from '../hooks/ useAuthStorage';

export const useSignIn = () => {
  const [mutate, result] = useMutation(AUTHENTICATE);
  const authStorage = useAuthStorage();
  const client = useApolloClient();

  const signIn = async ({ username, password }) => {
    try {
      await mutate({ variables: { username, password } });
      await authStorage.setAccessToken(result.data.authenticate.accessToken);
      await authStorage.getAccessToken();
      await client.resetStore();
    } catch (error) {
      console.log(error.message);
    }
  };

  return [signIn, result];
};
