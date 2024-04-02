import { useQuery } from '@apollo/client';
import { getRepositories } from '../graphql/queries';

const useRepositories = (order, searchQuery) => {
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
  const { loading, error, data, fetchMore } = useQuery(getRepositories, {
    fetchPolicy: 'cache-and-network',
    variables: {
      orderDirection,
      orderBy,
      searchKeyword: searchQuery ? searchQuery : '',
      first: 2,
    },
  });

  const handleFetchMore = () => {
    const canFetchMore = !loading && data?.repositories.pageInfo.hasNextPage;
    if (!canFetchMore) {
      return;
    }

    const variables = {
      orderDirection,
      orderBy,
      searchKeyword: searchQuery ? searchQuery : '',
      first: 2,
      after: data.repositories.pageInfo.endCursor,
    };

    fetchMore({
      variables,
    });
  };

  return { data, error, loading, fetchMore: handleFetchMore };
};

export default useRepositories;
