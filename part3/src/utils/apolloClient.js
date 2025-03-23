import { ApolloClient, InMemoryCache } from '@apollo/client';
import Constants from 'expo-constants';


const createApolloClient = () => {
  const ip = Constants.expoConfig.extra.env;
  console.log(`ip: ${ip}`);

  return new ApolloClient({
    uri: `${ip}:4000/graphql`,
    cache: new InMemoryCache(),
  });
};

export default createApolloClient;
