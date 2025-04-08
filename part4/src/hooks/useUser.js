import { useQuery } from '@apollo/client';
import { GET_CURRENT_USER } from '../graphql/queries';

const useUser = ( includeReviews = false ) => {
  const { data, loading, refetch } = useQuery(GET_CURRENT_USER, {
    variables: { includeReviews },
    fetchPolicy: 'cache-and-network'
  });

  return {
    user: data?.me || null,
    reviews: data?.me?.reviews?.edges?.map(e => e.node) || [],
    loading,
    refetch
  };
};

export default useUser;

