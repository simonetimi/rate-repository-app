import Text from './Text';
import { TextInput, View, TouchableHighlight } from 'react-native';
import { Formik } from 'formik';
import * as yup from 'yup';

const validationSchema = yup.object().shape({
  username: yup.string().min(3).required('Username is required'),
  password: yup.string().min(8).required('Password is required'),
});

const SignInContainer = ({ onSubmit }) => {
  return (
    <View>
      <Formik
        initialValues={{ username: '', password: '' }}
        validationSchema={validationSchema}
        onSubmit={onSubmit}
      >
        {({ handleChange, handleBlur, handleSubmit, values, errors }) => (
          <>
            <TextInput
              placeholder={'Username'}
              onChangeText={handleChange('username')}
              onBlur={handleBlur('username')}
            ></TextInput>
            <Text color={'error'}>{errors.username}</Text>
            <TextInput
              placeholder={'Password'}
              secureTextEntry={true}
              onChangeText={handleChange('password')}
              onBlur={handleBlur('password')}
              value={values.password}
            ></TextInput>
            <Text color={'error'}>{errors.password}</Text>
            <TouchableHighlight onPress={handleSubmit} testID="submit_button">
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

export default SignInContainer;
