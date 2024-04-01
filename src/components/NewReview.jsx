import Text from './Text';
import { TextInput, View, StyleSheet, TouchableHighlight } from 'react-native';
import theme from '../theme';
import { Formik } from 'formik';
import * as yup from 'yup';
import { useNavigate } from 'react-router-native';
import { useNewReview } from '../hooks/useNewReview';

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
  owner: yup.string().min(3).required("Repository's owner is required"),
  name: yup.string().min(3).required('Repository name is required'),
  rating: yup.number().min(0).max(100).required('Rating is required'),
  review: yup.string().min(3),
});

const NewReview = () => {
  const [addReview] = useNewReview();
  const navigate = useNavigate();

  const onSubmit = async (values) => {
    const reviewResult = await addReview(values);
    if (reviewResult.data) {
      const repoId = reviewResult.data.createReview.repository.id;
      navigate(`/repository/${repoId}`);
    }
  };

  return (
    <View style={styles.container}>
      <Formik
        initialValues={{ owner: '', name: '', rating: '', review: '' }}
        validationSchema={validationSchema}
        onSubmit={onSubmit}
      >
        {({ handleChange, handleBlur, handleSubmit, values, errors }) => (
          <>
            <TextInput
              style={styles.input}
              placeholder={'Repository Owner'}
              onChangeText={handleChange('owner')}
              onBlur={handleBlur('owner')}
            ></TextInput>
            <Text color={'error'}>{errors.owner}</Text>
            <TextInput
              style={styles.input}
              placeholder={'Repository Name'}
              onChangeText={handleChange('name')}
              onBlur={handleBlur('name')}
            ></TextInput>
            <Text color={'error'}>{errors.name}</Text>
            <TextInput
              style={styles.input}
              placeholder={'RepoRating'}
              onChangeText={handleChange('rating')}
              onBlur={handleBlur('rating')}
              keyboardType="numeric"
            ></TextInput>
            <Text color={'error'}>{errors.rating}</Text>
            <TextInput
              editable
              multiline
              numberOfLines={4}
              style={styles.input}
              placeholder={'Write your review'}
              onChangeText={handleChange('review')}
              onBlur={handleBlur('review')}
            ></TextInput>
            <Text color={'error'}>{errors.review}</Text>
            <TouchableHighlight style={styles.button} onPress={handleSubmit}>
              <Text fontWeight={'bold'} fontSize={'subheading'} color={'white'}>
                Add review
              </Text>
            </TouchableHighlight>
          </>
        )}
      </Formik>
    </View>
  );
};

export default NewReview;
