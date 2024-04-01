import { useMutation, useApolloClient } from '@apollo/client';
import { NEW_USER } from '../graphql/mutations';

export const useSignUp = () => {
  const [mutate] = useMutation(NEW_USER);
  const client = useApolloClient();

  const signUp = async ({ username, password }) => {
    try {
      await mutate({
        variables: { user: { username, password } },
      });
      await client.resetStore();
    } catch (error) {
      console.error(error);
    }
  };

  return [signUp];
};
