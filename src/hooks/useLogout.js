import { useApolloClient } from '@apollo/client';
import useAuthStorage from './useAuthStorage';

const useLogout = () => {
  const authStorage = useAuthStorage();
  const client = useApolloClient();

  const logout = async () => {
    try {
      await authStorage.removeAccessToken();
      await client.resetStore();
    } catch (error) {
      console.error('Logout error:', error);
    }
  };

  return logout;
};

export default useLogout;
