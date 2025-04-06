import { View, TextInput, Pressable, StyleSheet } from 'react-native';
import { useFormik } from 'formik';
import { useNavigate } from 'react-router-native';
import { useApolloClient } from '@apollo/client';
import * as yup from 'yup';

import Text from './Text';
import theme from '../theme'
import useCreateReview from '../hooks/useCreateReview';


const styles = StyleSheet.create({
  container: {
    padding: theme.spacing.large,
    backgroundColor: theme.colors.background,
    flex: 1,
    marginTop: theme.spacing.medium,
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    padding: theme.spacing.medium,
    marginBottom: theme.spacing.small,
    borderRadius: theme.borderRadius.small,
    fontSize: theme.fontSizes.body,
    backgroundColor: theme.colors.background,
  },
  button: {
    backgroundColor: theme.colors.primary,
    padding: theme.spacing.medium,
    borderRadius: theme.borderRadius.small,
    alignItems: 'center',
    marginTop: theme.spacing.small,
  },
  buttonText: {
    fontWeight: theme.fontWeights.bold,
    color: theme.colors.textOnPrimary,
    fontSize: theme.fontSizes.body,
  }
});

const initialValues = {
  ownerName: '',
  repositoryName: '',
  rating: '',
  review: ''
}

const validationSchema = yup.object().shape({
  ownerName: yup.string().required('Repository owner is required'),
  repositoryName: yup.string().required('Repository name is required'),
  rating: yup.number().integer().min(1).max(100).required('Rating between 0 and 100')
});


const ReviewForm = () => {
  const [createReview] = useCreateReview();
  const navigate = useNavigate();

  const formik = useFormik({
    initialValues,
    validationSchema,
    onSubmit: async (values) => {
      const { ownerName, repositoryName, rating, review } = values;
      try {
        const { data } = await createReview({ ownerName, repositoryName, rating, review });
        navigate('/');
      } catch (e) {
        console.error(e);
      }
    }
  });


  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="Repository owner name"
        placeholderTextColor="#999"
        value={formik.values.ownerName}
        onChangeText={formik.handleChange('ownerName')}
      />
      {formik.touched.ownerName && formik.errors.ownerName && (
        <Text style={{ color: 'red' }}>{formik.errors.ownerName}</Text>
      )}

      <TextInput
        style={styles.input}
        placeholder="Repository name"
        placeholderTextColor="#999"
        value={formik.values.repositoryName}
        onChangeText={formik.handleChange('repositoryName')}
      />
      {formik.touched.repositoryName && formik.errors.repositoryName && (
        <Text style={{ color: 'red' }}>{formik.errors.repositoryName}</Text>
      )}

      <TextInput
        style={styles.input}
        placeholder="Rating between 0 and 100"
        placeholderTextColor="#999"
        value={formik.values.rating}
        onChangeText={formik.handleChange('rating')}
      />
      {formik.touched.rating && formik.errors.rating && (
        <Text style={{ color: 'red' }}>{formik.errors.rating}</Text>
      )}

      <TextInput
        style={styles.input}
        placeholder="Review"
        placeholderTextColor="#999"
        value={formik.values.review}
        onChangeText={formik.handleChange('review')}
      />

      <Pressable style={styles.button} onPress={formik.handleSubmit} >
        <Text style={styles.buttonText}>Create a review</Text>
      </Pressable>
    </View>
  );
};


export default ReviewForm;
