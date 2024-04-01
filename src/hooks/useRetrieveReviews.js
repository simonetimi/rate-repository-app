import { useQuery } from '@apollo/client';
import { getReviews } from '../graphql/queries';

export const useRetrieveReviews = () => {
  const { loading, error, data, refetch } = useQuery(getReviews, {
    fetchPolicy: 'cache-and-network',
  });
  console.log(data);
  return { data, error, loading, refetch };
};

export default useRetrieveReviews;
