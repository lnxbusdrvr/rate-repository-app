import { useEffect, useState } from 'react';
import { View,
  StyleSheet,
  Text,
  Pressable,
  ScrollView } from 'react-native';
import { Link } from "react-router-native";
import { useQuery } from '@apollo/client';
import Constants from 'expo-constants';
import { useApolloClient } from '@apollo/client';
import { useNavigate } from 'react-router-native';

import theme from '../theme';
import useAuthStorage from '../hooks/useAuthStorage';
import { GET_CURRENT_USER } from '../graphql/queries';


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
  const { data } = useQuery(GET_CURRENT_USER, {
    fetchPolicy: 'network-only'
  });
  const navigate = useNavigate();
  const authStorage = useAuthStorage();
  const apolloClient = useApolloClient();

  const handleSignOut = async () => {
    await authStorage.removeAccessToken();
    await apolloClient.resetStore();
    navigate('/')
  };

  return (
    <View style={styles.container}>
      <ScrollView horizontal>
        <Link to='/'>
          <Text style={styles.text}>Repositories</Text>
        </Link>
        {!data?.me ? (
        <Link to='/signIn'>
          <Text style={styles.text}>
            Sign In
          </Text>
        </Link>) : (
        <Pressable style={styles.button} onPress={handleSignOut}>
          <Text style={styles.text}>
            Sign Out
          </Text>
        </Pressable>)}
      </ScrollView>
    </View>
  )
};

export default AppBar;
