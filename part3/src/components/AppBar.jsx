import { useEffect, useState } from 'react';
import { View,
  StyleSheet,
  Text,
  Pressable,
  ScrollView } from 'react-native';
import Constants from 'expo-constants';
import { Link } from "react-router-native";
import { useQuery } from '@apollo/client';
import theme from '../theme';


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


  return (
    <View style={styles.container}>
      <ScrollView horizontal>
        <Link to='/'>
          <Text style={styles.text}>Repositories</Text>
        </Link>
        <Link to='/signIn'>
          <Text style={styles.text}>
            Sign In
          </Text>
        </Link>
      </ScrollView>
    </View>
  )
};

export default AppBar;
