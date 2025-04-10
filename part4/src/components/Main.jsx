import Constants from 'expo-constants';
import { Text, StyleSheet, View } from 'react-native';
import { Route, Routes, Navigate } from 'react-router-native';

import RepositoryList from './RepositoryList';
import SingleRepository from './SingleRepository';
import AppBar from './AppBar';
import SignIn from './SignIn';
import SignUp from './SignUp';
import ReviewForm from './ReviewForm';
import MyReview from './MyReview';


const styles = StyleSheet.create({
  container: {
    marginTop: Constants.statusBarHeight,
    flexGrow: 1,
    flexShrink: 1,
  },
});

const Main = () => {
  return (
    <View style={styles.container}>
      <AppBar />
      <Routes>
        <Route path="/" element={<RepositoryList />} />
        <Route path="/signIn" element={<SignIn />} />
        <Route path="/signUp" element={<SignUp />} />
        <Route path="/repos/:id" element={<SingleRepository />} />
        <Route path="/createReview" element={<ReviewForm />} /> 
        <Route path="/reviews/:id" element={<MyReview />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </View>
  );
};


export default Main;
