import { View,
  StyleSheet,
  Text,
  Pressable } from 'react-native';
import Constants from 'expo-constants';

const styles = StyleSheet.create({
  container: {
    paddingTop: Constants.statusBarHeight,
    height: 90,
    backgroundColor: 'black',
    justifyContent: 'center'
  },
  pressable: {
  },
  text: {
    fontSize: 10,
    color: 'white'
  }
});

const AppBar = () => {
  return (
    <View style={styles.container}>
      <Pressable style={styles.pressable}>
        <Text style={styles.text}>Repositories</Text>
      </Pressable>
    </View>
  )
};

export default AppBar;
