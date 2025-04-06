import { useQuery } from '@apollo/client';
import { GET_REPOSITORY_WITH_REVIEWS } from '../graphql/queries';

const useReviews = ( id ) => {
  const { data, loading, refetch } = useQuery(GET_REPOSITORY_WITH_REVIEWS, {
    skip: !id, // wait until we get id
    variables: { repositoryId: id },
    fetchPolicy: 'cache-and-network'
  });

  return {
    reviews: data ? data.repository.reviews.edges.map(edge => edge.node) : [],
    loading,
    refetch
  };
};

export default useReviews;
