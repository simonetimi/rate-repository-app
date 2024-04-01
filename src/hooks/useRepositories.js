import { useQuery } from '@apollo/client';
import { getRepositories } from '../graphql/queries';

const useRepositories = (order) => {
  console.log(order);
  let orderDirection = 'DESC';
  let orderBy = 'CREATED_AT';
  switch (order) {
    case 'latest':
      orderBy = 'CREATED_AT';
      orderDirection = 'DESC';
      break;
    case 'highest':
      orderBy = 'RATING_AVERAGE';
      orderDirection = 'DESC';
      break;
    case 'lowest':
      orderBy = 'RATING_AVERAGE';
      orderDirection = 'ASC';
      break;
  }
  const { loading, error, data, refetch } = useQuery(getRepositories, {
    fetchPolicy: 'cache-and-network',
    variables: {
      orderDirection,
      orderBy,
    },
  });

  return { data, error, loading, refetch };
};

export default useRepositories;
