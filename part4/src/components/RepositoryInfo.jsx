import { View, TextInput, Pressable, StyleSheet  } from 'react-native';
import { useParams } from "react-router-native";
import * as Linking from 'expo-linking';

import useRepositoryById from '../hooks/useRepositoryById';
import RepositoryItem from './RepositoryItem';
import theme from '../theme'
import Text from './Text';


const styles = StyleSheet.create({
  button: {
    backgroundColor: theme.colors.primary,
    padding: theme.spacing.medium,
    borderRadius: theme.borderRadius.small,
    alignItems: 'center',
    marginTop: theme.spacing.small,
  },
  buttonText: {
    fontWeight: theme.fontWeights.bold,
    color: theme.colors.textOnPrimary,
    fontSize: theme.fontSizes.body,
  }
});

const RepositoryInfo = () => {
  const { id } = useParams();
  const { repository, loading } = useRepositoryById(id);

  if (loading)
    return <Text>loading...</Text>

  return (
    <View>
      <RepositoryItem item={repository} />
      <Pressable style={styles.button} onPress={() => Linking.openURL(repository.url)}>
        <Text style={styles.buttonText}>
          Open in GitHub
        </Text>
      </Pressable>
    </View>
  );
};


export default RepositoryInfo;

