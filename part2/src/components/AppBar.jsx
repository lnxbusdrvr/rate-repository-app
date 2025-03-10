import { View,
  StyleSheet,
  Text,
  Pressable,
  ScrollView } from 'react-native';
import Constants from 'expo-constants';
import { Link } from "react-router-native";

const styles = StyleSheet.create({
  container: {
    paddingTop: Constants.statusBarHeight,
    height: 90,
    backgroundColor: 'black',
    alignItems: 'center',
    paddingHorizontal: 20
  },
  text: {
    fontSize: 16,
    color: 'white',
    fontWeight: 'bold',
    marginRight: 10
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
        <Link to='/'>
          <Text style={styles.text}>
            asdfehgdh
          </Text>
        </Link>
        <Link to='/'>
          <Text style={styles.text}>
            Sasdfjaosdfid
          </Text>
        </Link>
        <Link to='/asdfer'>
          <Text style={styles.text}>
            Edfasdfjaoid
          </Text>
        </Link>
        <Link to='/asdfer'>
          <Text style={styles.text}>
            Sasdfjaoid
          </Text>
        </Link>
        <Link to='/asdfer'>
          <Text style={styles.text}>
            Sasdfjaoid
          </Text>
        </Link>
        <Link to='/asdfer'>
          <Text style={styles.text}>
            Sasdfjaoid
          </Text>
        </Link>
        <Link to='/asdfer'>
          <Text style={styles.text}>
            Sasdfjaoid
          </Text>
        </Link>
        <Link to='/asdfer'>
          <Text style={styles.text}>
            Sasdfjaoid
          </Text>
        </Link>
        <Link to='/asdfer'>
          <Text style={styles.text}>
            Sasdfjaoid
          </Text>
        </Link>
      </ScrollView>
    </View>
  )
};

export default AppBar;
