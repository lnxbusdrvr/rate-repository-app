import { useQuery } from '@apollo/client';
import { GET_REPOSITORIES } from '../graphql/queries';

const useRepositories = (sortRepos = 'default') => {
  const getSortedRepos = () => {
    switch(sortRepos) {
      case 'highRated':
        return {
          orderBy: 'RATING_AVERAGE',
          orderDirection: 'DESC'
        };
      case 'lowRated':
        return {
          orderBy: 'RATING_AVERAGE',
          orderDirection: 'ASC'
        };
      case 'default':
      default:
        return {
          orderBy: 'CREATED_AT',
          orderDirection: 'DESC'
        };
    };
  };

  const { data, loading, refetch } = useQuery(GET_REPOSITORIES, {
    variables: {
      ...getSortedRepos()
    },
    fetchPolicy: 'cache-and-network', // Get fresh data from server
  });

  return {
    repositories: data ? data.repositories : [],
    loading,
    refetch
  };
};

export default useRepositories;

