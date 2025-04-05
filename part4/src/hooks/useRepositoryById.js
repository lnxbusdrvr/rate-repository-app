import { useQuery } from '@apollo/client';
import { GET_REPOSITORY_BY_ID } from '../graphql/queries';

const useRepositoryById = ( id ) => {
  const { data, loading, refetch } = useQuery(GET_REPOSITORY_BY_ID, {
    variables: { repositoryId: id },
    fetchPolicy: 'cache-and-network'
  });

  return {
    repository: data ? data.repository : null,
    loading,
    refetch
  };
};

export default useRepositoryById;
