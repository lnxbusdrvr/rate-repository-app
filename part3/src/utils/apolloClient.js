import { ApolloClient, InMemoryCache, createHttpLink } from '@apollo/client';
import Constants from 'expo-constants';
import { setContext } from '@apollo/client/link/context';


const uri = Constants.expoConfig.extra.env
const httpLink = createHttpLink({
  uri: uri 
});


const createApolloClient = (authStorage) => {
  console.log(`1 ${Constants.expoConfig}`)
  console.log(`2 ${Constants.expoConfig.extra}`)
  console.log(`3 ${Constants.expoConfig.extra.apolloUri}`)
  console.log(`ip: ${uri} httpLink: ${httpLink}`)
  const authLink = setContext(async (_, { headers }) => {
    try {
      const accessToken = await authStorage.getAccessToken();
      return {
        headers: {
          ...headers,
          authorization: accessToken ? `Bearer ${accessToken}` : '',
        },
      };
    } catch (e) {
      console.log(e);
      return {
        headers,
      };
    }
  });
  return new ApolloClient({
    link: authLink.concat(httpLink),
    cache: new InMemoryCache(),
  });
};

export default createApolloClient;
