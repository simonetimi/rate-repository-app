import React from 'react';
import { View, StyleSheet, ScrollView, Pressable } from 'react-native';
import { Link } from 'react-router-native';
import Text from './Text';
import Constants from 'expo-constants';
import { getUser } from '../graphql/queries';
import { useQuery } from '@apollo/client';
import useLogout from '../hooks/useLogout';

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
  const { loading, data } = useQuery(getUser);
  const logout = useLogout();

  return (
    <View style={styles.container}>
      <ScrollView
        horizontal
        showsVerticalScrollIndicator={false}
        showsHorizontalScrollIndicator={false}
      >
        <Link
          to="/"
          activeOpacity={0}
          underlayColor={'transparent'}
          style={styles.link}
        >
          <Text fontWeight={'bold'} style={styles.title}>
            Repositories
          </Text>
        </Link>
        {loading ? null : data.me ? (
          <>
            <Link
              to="/newReview"
              activeOpacity={0}
              underlayColor={'transparent'}
              style={styles.link}
            >
              <Text fontWeight={'bold'} style={styles.title}>
                Create review
              </Text>
            </Link>
            <Link
              to="/myReviews"
              activeOpacity={0}
              underlayColor={'transparent'}
              style={styles.link}
            >
              <Text fontWeight={'bold'} style={styles.title}>
                My reviews
              </Text>
            </Link>
            <Pressable onPress={logout}>
              <Text fontWeight={'bold'} style={styles.title}>
                Log out
              </Text>
            </Pressable>
          </>
        ) : (
          <>
            <Link
              to="/signin"
              activeOpacity={0}
              underlayColor={'transparent'}
              style={styles.link}
            >
              <Text fontWeight={'bold'} style={styles.title}>
                Sign in
              </Text>
            </Link>
            <Link
              to="/signup"
              activeOpacity={0}
              underlayColor={'transparent'}
              style={styles.link}
            >
              <Text fontWeight={'bold'} style={styles.title}>
                Sign up
              </Text>
            </Link>
          </>
        )}
      </ScrollView>
    </View>
  );
};

export default AppBar;
