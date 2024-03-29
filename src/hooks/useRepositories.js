import { useQuery } from '@apollo/client';
import { getRepositories } from '../graphql/queries';

const useRepositories = () => {
  const { loading, error, data, refetch } = useQuery(getRepositories, {
    fetchPolicy: 'cache-and-network',
  });

  return { data, error, loading, refetch };
};

export default useRepositories;
