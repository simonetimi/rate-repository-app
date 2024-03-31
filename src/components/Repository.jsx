import { FlatList, View, StyleSheet, Text } from 'react-native';
import { useParams } from 'react-router-native';
import useRepository from '../hooks/useRepository';
import RepositoryItem from './RepositoryItem';
import { format } from 'date-fns';

const styles = StyleSheet.create({
  separator: {
    height: 10,
  },
  item: {
    backgroundColor: 'white',
    padding: 15,
    gap: 10,
    flexDirection: 'row',
    alignItems: 'center',
  },
  body: {
    gap: 10,
  },
  rating: {
    width: 60,
    height: 60,
    padding: 10,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 50,
    borderWidth: 2,
    borderColor: 'blue',
  },
  ratingText: {
    fontSize: 20,
    fontWeight: 'bold',
    color: 'blue',
  },
});

const ItemSeparator = () => <View style={styles.separator} />;

const RepositoryInfo = ({ repository }) => {
  return <RepositoryItem item={repository} displaySingle={true} />;
};

const ReviewItem = ({ review }) => {
  return (
    <View style={styles.item}>
      <View style={styles.rating}>
        <Text style={styles.ratingText}>{review.rating}</Text>
      </View>
      <View style={styles.body}>
        <Text>{review.text}</Text>
        <Text style={{ fontWeight: 'bold' }}>{review.user.username}</Text>
        <Text>{format(new Date(review.createdAt), 'dd MMMM yyyy')}</Text>
      </View>
    </View>
  );
};

const Repository = () => {
  const { id } = useParams();
  const { repository, loading } = useRepository(id);

  if (loading) {
    return <Text>Loading...</Text>;
  }

  return (
    <FlatList
      contentContainerStyle={{ paddingRight: 60, backgroundColor: 'white' }}
      data={repository.reviews.edges}
      renderItem={({ item }) => <ReviewItem review={item.node} />}
      ItemSeparatorComponent={ItemSeparator}
      keyExtractor={(item) => item.node.id}
      ListHeaderComponent={() => <RepositoryInfo repository={repository} />}
      // ...
    />
  );
};

export default Repository;
