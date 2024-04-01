import { StyleSheet, View } from 'react-native';
import RepositoryList from './RepositoryList';
import AppBar from './AppBar';
import SignIn from './SignIn';
import { Route, Routes, Navigate } from 'react-router-native';
import Repository from './Repository';
import NewReview from './NewReview';
import SignUp from './SignUp';

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    flexShrink: 1,
    backgroundColor: '#CCCCCC', // * light grey
  },
});

const Main = () => {
  return (
    <>
      <AppBar />
      <View style={styles.container}>
        <Routes>
          <Route path="/" element={<RepositoryList />} />
          <Route path="/signin" element={<SignIn />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/newReview" element={<NewReview />} />
          <Route path="/repository/:id" element={<Repository />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </View>
    </>
  );
};

export default Main;
