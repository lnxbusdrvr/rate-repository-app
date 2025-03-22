import { ApolloClient, InMemoryCache } from '@apollo/client';


const createApolloClient = () => {

  return new ApolloClient({
    uri: `${process.env.REACT_APP_MYAPP_URI}:4000/graphql`,
    cache: new InMemoryCache(),
  });
};

export default createApolloClient;
