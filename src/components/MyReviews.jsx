import {
  Text,
  StyleSheet,
  View,
  FlatList,
  Alert,
  Pressable,
} from 'react-native';
import { Link } from 'react-router-native';
import { format } from 'date-fns';
import useRetrieveReviews from '../hooks/useRetrieveReviews';
import { useDeleteReview } from '../hooks/useDeleteRepo';
import theme from '../theme';

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
  button: {
    backgroundColor: theme.colors.secondary,
    padding: 4,
    paddingLeft: 10,
    paddingRight: 10,
    borderRadius: 8,
    marginTop: 4,
    alignSelf: 'flex-start',
  },
  buttonText: {
    color: 'white',
  },
});

const ReviewItem = ({ review, repoId }) => {
  const [deleteReview] = useDeleteReview();
  const alertOnDelete = () =>
    Alert.alert('Delete review', 'Are you sure you wanna delete this review?', [
      {
        text: 'Cancel',
        onPress: () => {
          return;
        },
        style: 'cancel',
      },
      {
        text: 'Delete',
        onPress: () => deleteReview(review.id),
      },
    ]);

  return (
    <View style={styles.item}>
      <View style={styles.rating}>
        <Text style={styles.ratingText}>{review.rating}</Text>
      </View>
      <View style={styles.body}>
        <Text>{review.text}</Text>
        <Text style={{ fontWeight: 'bold' }}>{review.user.username}</Text>
        <Text>{format(new Date(review.createdAt), 'dd MMMM yyyy')}</Text>
        <View style={{ flexDirection: 'row', gap: 10 }}>
          <Link to={`/repository/${repoId}`} style={styles.button}>
            <Text style={styles.buttonText}>View repo</Text>
          </Link>
          <Pressable
            onPress={alertOnDelete}
            style={[styles.button, { backgroundColor: 'red' }]}
          >
            <Text style={styles.buttonText}>Delete review</Text>
          </Pressable>
        </View>
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
      renderItem={({ item }) => (
        <ReviewItem review={item.node} repoId={item.node.repositoryId} />
      )}
      ItemSeparatorComponent={ItemSeparator}
      keyExtractor={(item) => item.node.id}
    />
  );
};

export default MyReviews;
