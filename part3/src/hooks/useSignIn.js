import { useMutation } from '@apollo/client';
import { useApolloClient } from '@apollo/client';

import { AUTHENTICATE } from '../graphql/mutations';
import AuthStorage from '../utils/authStorage';
import AuthStorageContext from '../contexts/AuthStorageContext';
import useAuthStorage from '../hooks/useAuthStorage';

const useSignIn = () => {
  const [mutate, result] = useMutation(AUTHENTICATE);
  const authStorage = useAuthStorage();
  const apolloClient = useApolloClient();

  const signIn = async ({ username, password }) => {
    try {
      const { data } = await mutate({
        variables: {
          credentials: { username, password }
        }
      });
      await authStorage.setAccessToken(data.authenticate.accessToken)
      await apolloClient.resetStore();
      return data;
    } catch (error) {
      console.log(error);
      throw error;
    };
  };

  return [signIn, result];
};


export default useSignIn;
