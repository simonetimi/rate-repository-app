import Text from './Text';
import { TextInput, View, StyleSheet, TouchableHighlight } from 'react-native';
import theme from '../theme';
import { Formik } from 'formik';

const styles = StyleSheet.create({
  container: {
    padding: 50,
    display: 'flex',
    gap: 16,
    justifyContent: 'center',
    alignItems: 'center',
  },
  input: {
    padding: 10,
    width: 300,
    height: 60,
    backgroundColor: 'white',
    borderRadius: 12,
  },
  button: {
    backgroundColor: theme.colors.secondary,
    padding: 14,
    borderRadius: 12,
    width: 300,
    alignItems: 'center',
  },
});

const SignIn = () => {
  const onSubmit = (values) => {
    console.log(values);
  };
  return (
    <View style={styles.container}>
      <Formik
        initialValues={{ username: '', password: '' }}
        onSubmit={onSubmit}
      >
        {({ handleChange, handleBlur, handleSubmit, values }) => (
          <>
            <TextInput
              style={styles.input}
              placeholder={'Username'}
              onChangeText={handleChange('username')}
              onBlur={handleBlur('username')}
            ></TextInput>
            <TextInput
              style={styles.input}
              placeholder={'Password'}
              secureTextEntry={true}
              onChangeText={handleChange('password')}
              onBlur={handleBlur('password')}
              value={values.password}
            ></TextInput>
            <TouchableHighlight style={styles.button} onPress={handleSubmit}>
              <Text fontWeight={'bold'} fontSize={'subheading'} color={'white'}>
                Sign in
              </Text>
            </TouchableHighlight>
          </>
        )}
      </Formik>
    </View>
  );
};

export default SignIn;
