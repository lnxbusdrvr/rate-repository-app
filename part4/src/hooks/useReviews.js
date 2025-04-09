import { useQuery } from '@apollo/client';
import { GET_REPOSITORY_WITH_REVIEWS } from '../graphql/queries';

const useReviews = ( id, variables = { first: 3 }) => {
  const { data, loading, fetchMore, ...result } = useQuery(GET_REPOSITORY_WITH_REVIEWS, {
    skip: !id, // wait until we get id
    variables: { repositoryId: id, ...variables },
    fetchPolicy: 'cache-and-network'
  });

  const handleFetchMore = () => {
    const canFetchMore = !loading && data?.repository.reviews.pageInfo.hasNextPage;

    if (!canFetchMore) {
      return;
    }

    fetchMore({
      variables: {
        after: data.repository.reviews.pageInfo.endCursor,
        repositoryId: id,
        ...variables
      },
    });
  };

  return {
    reviews: data ? data.repository.reviews.edges.map(edge => edge.node) : [],
    loading,
    fetchMore: handleFetchMore,
    ...result
  };
};

export default useReviews;
