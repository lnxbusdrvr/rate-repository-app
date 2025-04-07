import { View, TextInput, Pressable, StyleSheet } from 'react-native';
import { useFormik } from 'formik';
import { useNavigate } from 'react-router-native';
import { useApolloClient } from '@apollo/client';
import * as yup from 'yup';

import Text from './Text';
import theme from '../theme'
import useSignUp from '../hooks/useSignUp';


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
  username: '',
  password: '',
  passwordConfirm: ''
}


const validationSchema = yup.object().shape({
  username: yup.string().required('Username is required'),
  password: yup
    .string()
    .required('Password is required')
    .min(5,'Password must have more characters')
    .max(50, 'Password must have less characters'),
  passwordConfirm: yup
    .string()
    .oneOf([yup.ref('password'), null], 'Passwords must match')
    .required('Password is required')
});

const SignUp = () => {
  const [createUser] = useSignUp();
  const navigate = useNavigate();

  const formik = useFormik({
    initialValues,
    validationSchema,
    onSubmit: async (values) => {
      const { username, password } = values;
      try {
        const { data } = await createUser({ username, password });
        navigate('/SignIn');
      } catch (e) {
        console.error(e);
      }
    }
  });


  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="Username"
        value={formik.values.username}
        onChangeText={formik.handleChange('username')}
      />
      {formik.touched.username && formik.errors.username && (
        <Text style={{ color: 'red' }}>{formik.errors.username}</Text>
      )}

      <TextInput
        style={styles.input}
        placeholder="Password"
        secureTextEntry
        value={formik.values.password}
        onChangeText={formik.handleChange('password')}
      />
      {formik.touched.password && formik.errors.password && (
        <Text style={{ color: 'red' }}>{formik.errors.password}</Text>
      )}

      <TextInput
        style={styles.input}
        placeholder="Verify Password"
        secureTextEntry
        value={formik.values.passwordConfirm }
        onChangeText={formik.handleChange('passwordConfirm')}
      />
      {formik.touched.passwordConfirm && formik.errors.passwordConfirm && (
        <Text style={{ color: 'red' }}>{formik.errors.passwordConfirm}</Text>
      )}

      <Pressable style={styles.button} onPress={formik.handleSubmit} >
        <Text style={styles.buttonText}>Sign Up</Text>
      </Pressable>
    </View>
  );
};


export default SignUp;
