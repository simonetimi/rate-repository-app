import { FlatList, View, StyleSheet } from 'react-native';
import Text from './Text';
import RepositoryItem from './RepositoryItem';
import useRepositories from '../hooks/useRepositories';
import { RadioButton, Searchbar } from 'react-native-paper';
import { useState, useEffect } from 'react';
import { useDebouncedCallback } from 'use-debounce';

const styles = StyleSheet.create({
  separator: {
    height: 10,
  },
  radioButtonGroup: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingLeft: 20,
    paddingRight: 20,
    marginTop: -20,
    marginBottom: 5,
  },
  radioButtonContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
});

const ItemSeparator = () => <View style={styles.separator} />;

const RepositoryList = () => {
  const [checked, setChecked] = useState('latest');
  const [searchQuery, setSearchQuery] = useState('');
  const [debouncedSearchQuery, setDebouncedSearchQuery] = useState('');
  const { data, loading, fetchMore } = useRepositories(
    checked,
    debouncedSearchQuery,
  );

  const debounced = useDebouncedCallback((value) => {
    setDebouncedSearchQuery(value);
  }, 800);

  useEffect(() => {
    debounced(searchQuery);
  }, [searchQuery]);

  const onEndReach = () => {
    fetchMore();
  };

  if (loading) {
    return <Text>Loading...</Text>;
  }

  return (
    <>
      <View style={{ padding: 25 }}>
        <Searchbar
          placeholder="Search"
          onChangeText={(value) => setSearchQuery(value)}
          value={searchQuery}
        />
      </View>
      <View style={styles.radioButtonGroup}>
        <RadioButton.Group onValueChange={setChecked} value={checked}>
          <View style={styles.radioButtonContainer}>
            <Text>Latest</Text>
            <RadioButton value="latest" />
          </View>
          <View style={styles.radioButtonContainer}>
            <Text>Highest rating</Text>
            <RadioButton value="highest" />
          </View>
          <View style={styles.radioButtonContainer}>
            <Text>Lowest rating</Text>
            <RadioButton value="lowest" />
          </View>
        </RadioButton.Group>
      </View>
      <FlatList
        data={data.repositories.edges}
        ItemSeparatorComponent={ItemSeparator}
        renderItem={RepositoryItem}
        keyExtractor={(item) => item.node.id}
        onEndReached={onEndReach}
        onEndReachedThreshold={0.5}
      />
    </>
  );
};

export default RepositoryList;
