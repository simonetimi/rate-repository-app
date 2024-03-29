import { View, Image, StyleSheet } from 'react-native';
import Text from './Text';
import theme from '../theme';

function formatNumberCompact(number) {
  if (number < 1000) return number;
  if (number < 1000000) return `${Math.floor(number / 1000)}K`;
  return `${Math.floor(number / 1000000)}M`;
}

const styles = StyleSheet.create({
  profileImage: {
    borderRadius: 50,
    width: 70,
    height: 70,
  },
  itemHeader: {
    flexDirection: 'row',
    gap: 16,
    marginRight: 50,
    marginBottom: 10,
    flexShrink: 1,
  },
  itemFooter: {
    flexDirection: 'row',
    gap: 10,
    justifyContent: 'space-evenly',
  },
  itemFooterBlock: {
    flexDirection: 'column',
    alignItems: 'center',
    gap: 4,
  },
  itemFooterBlockTitle: {
    color: 'grey',
  },
  item: {
    backgroundColor: 'white',
    padding: 15,
    paddingRight: 10,
    gap: 10,
  },
  languageChip: {
    backgroundColor: theme.colors.secondary,
    padding: 4,
    paddingLeft: 10,
    paddingRight: 10,
    borderRadius: 8,
    marginTop: 4,
    alignSelf: 'flex-start',
  },
  languageChipText: {
    color: 'white',
  },
  description: {
    flex: 1,
  },
});

const RepositoryItem = ({ item }) => {
  return (
    <View style={styles.item}>
      <View style={styles.itemHeader}>
        <Image
          style={styles.profileImage}
          source={{
            uri: item.node.ownerAvatarUrl,
          }}
        />
        <View style={{ flex: 1 }}>
          <Text>{item.node.fullName}</Text>
          <Text style={styles.description}>{item.node.description}</Text>
          <View style={styles.languageChip}>
            <Text style={styles.languageChipText}>{item.node.language}</Text>
          </View>
        </View>
      </View>
      <View style={styles.itemFooter}>
        <View style={styles.itemFooterBlock}>
          <Text style={styles.itemFooterBlockTitle}>Forks</Text>
          <Text>{formatNumberCompact(item.node.forksCount)}</Text>
        </View>
        <View style={styles.itemFooterBlock}>
          <Text style={styles.itemFooterBlockTitle}>Stargazers</Text>
          <Text>{formatNumberCompact(item.node.stargazersCount)}</Text>
        </View>
        <View style={styles.itemFooterBlock}>
          <Text style={styles.itemFooterBlockTitle}>Rating</Text>
          <Text>{formatNumberCompact(item.node.ratingAverage)}</Text>
        </View>
        <View style={styles.itemFooterBlock}>
          <Text style={styles.itemFooterBlockTitle}>Reviews</Text>
          <Text>{formatNumberCompact(item.node.reviewCount)}</Text>
        </View>
      </View>
    </View>
  );
};

export default RepositoryItem;
