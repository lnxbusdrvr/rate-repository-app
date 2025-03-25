import { useMutation } from '@apollo/client';
import { AUTHENTICATE } from '../graphql/mutations';
import AuthStorage from '../utils/authStorage';

const useSignIn = () => {
  const [mutate, result] = useMutation(AUTHENTICATE);
  const authStorage = new AuthStorage();

  const signIn = async ({ username, password }) => {
    try {
      const { data } = await mutate({
        variables: {
          credentials: { username, password }
        }
      });
      await authStorage.setAccessToken(data.authenticate.accessToken)
      return data;
    } catch (error) {
      console.log(error);
      throw error;
    };
  };

  return [signIn, result];
};


export default useSignIn;
