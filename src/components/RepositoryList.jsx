import { FlatList, View, StyleSheet } from 'react-native';
import Text from './Text';
import RepositoryItem from './RepositoryItem';
import useRepositories from '../hooks/useRepositories';

const styles = StyleSheet.create({
  separator: {
    height: 10,
  },
});

const ItemSeparator = () => <View style={styles.separator} />;

const RepositoryList = () => {
  const { data, loading } = useRepositories();

  if (loading) {
    return <Text>Loading...</Text>;
  }

  return (
    <FlatList
      data={data.repositories.edges}
      ItemSeparatorComponent={ItemSeparator}
      renderItem={RepositoryItem}
      keyExtractor={(item) => item.node.id}
    />
  );
};

export default RepositoryList;
