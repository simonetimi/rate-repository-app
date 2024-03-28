import { View, StyleSheet, Pressable } from 'react-native';
import Text from './Text';
import Constants from 'expo-constants';

const styles = StyleSheet.create({
  container: {
    paddingTop: Constants.statusBarHeight,
    paddingLeft: 12,
    paddingRight: 12,
    paddingBottom: 10,
    backgroundColor: 'rgba(0, 100, 200, 0.5)',
  },
  title: {
    fontSize: 24,
  },
});

const AppBar = () => {
  return (
    <View style={styles.container}>
      <Pressable>
        <Text fontWeight={'bold'} style={styles.title}>
          Repositories
        </Text>
      </Pressable>
    </View>
  );
};

export default AppBar;
