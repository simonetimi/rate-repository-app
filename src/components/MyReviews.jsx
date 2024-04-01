import { Text, StyleSheet, View, FlatList } from 'react-native';
import { format } from 'date-fns';
import useRetrieveReviews from '../hooks/useRetrieveReviews';

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

const ItemSeparator = () => <View style={styles.separator} />;

const MyReviews = () => {
  const { data, loading } = useRetrieveReviews();

  if (loading) {
    return <Text>Loading...</Text>;
  }

  return (
    <FlatList
      contentContainerStyle={{ paddingRight: 60, backgroundColor: 'white' }}
      data={data.me.reviews.edges}
      renderItem={({ item }) => <ReviewItem review={item.node} />}
      ItemSeparatorComponent={ItemSeparator}
      keyExtractor={(item) => item.node.id}
    />
  );
};

export default MyReviews;
