import { useEffect, useState } from 'react';
import { View,
  StyleSheet,
  Text,
  Pressable,
  ScrollView } from 'react-native';
import { Link } from "react-router-native";
import Constants from 'expo-constants';
import { useApolloClient } from '@apollo/client';
import { useNavigate } from 'react-router-native';

import theme from '../theme';
import useAuthStorage from '../hooks/useAuthStorage';
import useUser from '../hooks/useUser';


const styles = StyleSheet.create({
  container: {
    paddingTop: Constants.statusBarHeight,
    height: 90,
    backgroundColor: theme.colors.appBarBackground,
    alignItems: 'center',
    paddingHorizontal: theme.spacing.large
  },
  text: {
    fontSize: theme.fontSizes.body,
    color: theme.colors.textOnPrimary,
    fontWeight: theme.fontWeights.bold,
    marginRight: theme.spacing.medium
  }
});


const AppBar = () => {
  const { user } = useUser();
  const navigate = useNavigate();
  const authStorage = useAuthStorage();
  const apolloClient = useApolloClient();

  const handleSignOut = async () => {
    await authStorage.removeAccessToken();
    await apolloClient.resetStore();
    navigate('/')
  };

  const handleCreateReview = () => {
    navigate('/createReview');
  };

  const SignedOutMenu = () => (
    <>
      <Link to='/signUp'>
        <Text style={styles.text}>
          Sign Up
        </Text>
      </Link>
      <Link to='/signIn'>
        <Text style={styles.text}>
          Sign In
        </Text>
      </Link>
    </>
  );

  const SignedInMenu = () => (
    <>
      <Link to={`/reviews/${user?.id}`}>
        <Text style={styles.text}>
          My reviews
        </Text>
      </Link>
      <Pressable style={styles.button} onPress={handleCreateReview}>
        <Text style={styles.text}>
          Create a review
        </Text>
      </Pressable>
      <Pressable style={styles.button} onPress={handleSignOut}>
        <Text style={styles.text}>
          Sign Out
        </Text>
      </Pressable>
    </>
  );


  return (
    <View style={styles.container}>
      <ScrollView horizontal>
        <Link to='/'>
          <Text style={styles.text}>Repositories</Text>
        </Link>
        {!user?.id
          ? (<SignedOutMenu />)
          : (<SignedInMenu />)
        }
      </ScrollView>
    </View>
  )
};


export default AppBar;
