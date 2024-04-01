import { useMutation, useApolloClient } from '@apollo/client';
import { DELETE_REVIEW } from '../graphql/mutations';

export const useDeleteReview = () => {
  const [mutate] = useMutation(DELETE_REVIEW);
  const client = useApolloClient();

  const deleteReview = async (id) => {
    try {
      await mutate({
        variables: { id },
      });
      await client.resetStore();
    } catch (error) {
      console.error(error);
    }
  };

  return [deleteReview];
};
