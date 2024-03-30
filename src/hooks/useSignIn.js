import { useMutation } from '@apollo/client';
import { AUTHENTICATE } from '../graphql/mutations';

export const useSignIn = () => {
  const [mutate, result] = useMutation(AUTHENTICATE);

  const signIn = async ({ username, password }) => {
    try {
      await mutate({ variables: { username, password } });
    } catch (error) {
      console.log(error.message);
    }
  };

  return [signIn, result];
};
