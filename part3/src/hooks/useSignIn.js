import { useMutation } from '@apollo/client';
//import { useHistory } from 'react-router-native';
import { AUTHENTICATE } from '../graphql/mutations'

const useSignIn = () => {
  const [mutate, result] = useMutation(AUTHENTICATE);
  //const history = useHistory();

  const signIn = async ({ username, password }) => {
    try {
      const { data } = await mutate({
        variables: {
          credentials: { username, password }
        }
      });
      //history.push('/');
      console.log(data.data)
      console.log(data)
      return data;
    } catch (error) {
      console.log(error);
      throw error;
    };
  };

  return [signIn, result];
};


export default useSignIn;
