import { useQuery } from '@apollo/client';
import { getRepository } from '../graphql/queries';

const useRepository = (id) => {
  const { loading, error, data, refetch } = useQuery(getRepository, {
    variables: { id },
    fetchPolicy: 'cache-and-network',
  });

  const repository = data ? data.repository : undefined;

  return { repository, error, loading, refetch };
};

export default useRepository;
