import { useMutation, useApolloClient } from '@apollo/client';
import { DELETE_REVIEW } from '../graphql/mutations';


const useDeleteReview = () => {
  const [mutate, result] = useMutation(DELETE_REVIEW);
  const client = useApolloClient();

  const deleteReview = async (id) => {
    return await mutate({ variables: { id } });
  };

  const refetch = () => {
    client.refetchQueries({
      include: 'active',
    });
  };

  return [deleteReview, refetch, result];
};

export default useDeleteReview;

