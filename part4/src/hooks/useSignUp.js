import { useMutation } from '@apollo/client';

import { CREATE_USER } from '../graphql/mutations';


const useSignUp = () => {
  const [mutate, result] = useMutation(CREATE_USER);
  const createUser = async ({ username, password }) => {
    try {
      const { data } = await mutate({
        variables: {
          user: {
            username,
            password
          }
        }
      });
      return data?.createUser;
    } catch (error) {
      console.log(error);
      throw error;
    };
  };

  return [createUser, result];
};


export default useSignUp;
