import Text from './Text';
import { TextInput, View, StyleSheet, TouchableHighlight } from 'react-native';
import theme from '../theme';
import { Formik } from 'formik';
import * as yup from 'yup';
import { useSignIn } from '../hooks/useSignIn';

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

const validationSchema = yup.object().shape({
  username: yup.string().min(3).required('Username is required'),
  password: yup.string().min(8).required('Password is required'),
});

const SignIn = () => {
  const [signIn, result] = useSignIn();
  const onSubmit = async (values) => {
    await signIn(values);
  };
  return (
    <View style={styles.container}>
      <Formik
        initialValues={{ username: '', password: '' }}
        validationSchema={validationSchema}
        onSubmit={onSubmit}
      >
        {({ handleChange, handleBlur, handleSubmit, values, errors }) => (
          <>
            <TextInput
              style={styles.input}
              placeholder={'Username'}
              onChangeText={handleChange('username')}
              onBlur={handleBlur('username')}
            ></TextInput>
            <Text color={'error'}>{errors.username}</Text>
            <TextInput
              style={styles.input}
              placeholder={'Password'}
              secureTextEntry={true}
              onChangeText={handleChange('password')}
              onBlur={handleBlur('password')}
              value={values.password}
            ></TextInput>
            <Text color={'error'}>{errors.password}</Text>
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
