import React from 'react';
import { View, StyleSheet, ScrollView } from 'react-native';
import { Link } from 'react-router-native';
import Text from './Text';
import Constants from 'expo-constants';

const styles = StyleSheet.create({
  container: {
    paddingTop: Constants.statusBarHeight,
    paddingBottom: 10,
    paddingLeft: 5,
    paddingRight: 5,
    gap: 14,
    backgroundColor: 'rgba(0, 100, 200, 0.5)',
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
  title: {
    fontSize: 24,
    color: '#333',
    marginRight: 5,
    marginLeft: 5,
  },
  link: {
    activeOpacity: 0,
  },
});

const AppBar = () => {
  return (
    <View style={styles.container}>
      <ScrollView
        horizontal
        showsVerticalScrollIndicator={false}
        showsHorizontalScrollIndicator={false}
      >
        <Link to="/" activeOpacity={0} underlayColor={'transparent'} style={styles.link}>
          <Text fontWeight={'bold'} style={styles.title}>
            Repositories
          </Text>
        </Link>
        <Link to="/signin" activeOpacity={0} underlayColor={'transparent'} style={styles.link}>
          <Text fontWeight={'bold'} style={styles.title}>
            Login
          </Text>
        </Link>
      </ScrollView>
    </View>
  );
};

export default AppBar;
