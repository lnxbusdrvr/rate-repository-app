import { View,
  StyleSheet,
  Text,
  Pressable } from 'react-native';
import Constants from 'expo-constants';
import { Link } from "react-router-native";

const styles = StyleSheet.create({
  container: {
    paddingTop: Constants.statusBarHeight,
    height: 90,
    backgroundColor: 'black',
    flexDirection: 'row', // set children to row
    alignItems: 'center',
    paddingHorizontal: 20
  },
  text: {
    fontSize: 10,
    color: 'white',
    fontWeight: 'bold',
    marginRight: 10
  }
});

const AppBar = () => {
  return (
    <View style={styles.container}>
      <Link to='/'>
        <Text style={styles.text}>Repositories</Text>
      </Link>
      <Link to='/signIn'>
        <Text style={styles.text}>
          Sign In
        </Text>
      </Link>
    </View>
  )
};

export default AppBar;
