import { useParams } from 'react-router-native';
import useRepository from '../hooks/useRepository';
import Text from './Text';
import RepositoryItem from './RepositoryItem';

const Repository = () => {
  const { id } = useParams();
  const { repository, loading } = useRepository(id);

  if (loading) {
    return <Text>Loading...</Text>;
  }

  return <RepositoryItem item={repository} displaySingle={true} />;
};

export default Repository;
