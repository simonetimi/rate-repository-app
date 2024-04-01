import { FlatList, View, StyleSheet } from 'react-native';
import Text from './Text';
import RepositoryItem from './RepositoryItem';
import useRepositories from '../hooks/useRepositories';
import { RadioButton } from 'react-native-paper';
import { useState } from 'react';

const styles = StyleSheet.create({
  separator: {
    height: 10,
  },
  radioButtonGroup: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  radioButtonContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
});

const ItemSeparator = () => <View style={styles.separator} />;

const RepositoryList = () => {
  const [checked, setChecked] = useState('latest');
  const { data, loading } = useRepositories(checked);

  if (loading) {
    return <Text>Loading...</Text>;
  }

  return (
    <>
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
      />
    </>
  );
};

export default RepositoryList;
