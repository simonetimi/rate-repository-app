import React from 'react';
import { View, StyleSheet } from 'react-native';
import { Link } from 'react-router-native';
import Text from './Text';
import Constants from 'expo-constants';

const styles = StyleSheet.create({
  container: {
    paddingTop: Constants.statusBarHeight,
    paddingLeft: 12,
    paddingRight: 12,
    paddingBottom: 10,
    backgroundColor: 'rgba(0, 100, 200, 0.5)',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  title: {
    fontSize: 24,
    color: '#333',
  },
  login: {
    marginLeft: 'auto',
  },
  link: {
    activeOpacity: 0,
  },
});

const AppBar = () => {
  return (
    <View style={styles.container}>
      <Link to="/" activeOpacity={0} underlayColor={'transparent'} style={styles.link}>
        <Text fontWeight={'bold'} style={styles.title}>
          Repositories
        </Text>
      </Link>
      <Link to="/signin" activeOpacity={0} underlayColor={'transparent'} style={styles.link}>
        <Text fontWeight={'bold'} style={[styles.title, styles.login]}>
          Login
        </Text>
      </Link>
    </View>
  );
};

export default AppBar;
