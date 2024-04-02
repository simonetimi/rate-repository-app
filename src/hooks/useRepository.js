import { useQuery } from '@apollo/client';
import { getRepository } from '../graphql/queries';

const useRepository = (id) => {
  const { loading, error, data, fetchMore } = useQuery(getRepository, {
    variables: { reviewsFirst2: 2, id, reviewsAfter2: '' },
    fetchPolicy: 'network-only',
  });

  const repository = data ? data.repository : undefined;

  const handleFetchMore = () => {
    const canFetchMore =
      !loading && data?.repository?.reviews?.pageInfo?.hasNextPage;
    if (!canFetchMore) {
      return;
    }

    const variables = {
      id,
      reviewsFirst2: 2,
      reviewsAfter2: data.repository.reviews.pageInfo.endCursor,
    };

    fetchMore({
      variables,
    });
  };

  return { repository, error, loading, fetchMore: handleFetchMore };
};

export default useRepository;
