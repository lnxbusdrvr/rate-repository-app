import { useState } from 'react';
import { FlatList, View, StyleSheet, Pressable } from 'react-native';
import { useNavigate } from 'react-router-native';
import { Picker } from '@react-native-picker/picker';

import RepositoryItem from './RepositoryItem';
import useRepositories from '../hooks/useRepositories';

const styles = StyleSheet.create({
  separator: {
    height: 10,
    backgroundColor: '#e1e4e8'
  },
  listContainer: {
    backgroundColor: '#f8f8f8',
    paddingVertical: 10
  }
});


const ItemSeparator = () => <View style={styles.separator} />;


export const RepositoryListContainer = ({ repositories, navigate, sortRepos, setSortRepos, menuVisible, setMenuVisible }) => {

  const openPickerMenu = () => setMenuVisible(true);
  const closePickerMenu = () => setMenuVisible(false);

  const handleSort = (howToSort) => {
    setSortRepos(howToSort);
    closePickerMenu();
  };

  // Get the nodes from the edges array
  const repositoryNodes = repositories
    ? repositories?.edges?.map((edge) => edge.node)
    : [];

  return (
    <View style={{ flex: 1, paddingHorizontal: 10 }}>
      <Picker
        selectedValue={sortRepos}
        onValueChange={(itemValue) => setSortRepos(itemValue)}
        style={{ marginBottom: 10 }}
      >
        <Picker.Item label="Latest repositories" value="default" />
        <Picker.Item label="Highest rated repositories" value="highRated" />
        <Picker.Item label="Lowest rated repositories" value="lowRated" />
      </Picker>

      <FlatList
        data={repositoryNodes}
        ItemSeparatorComponent={ItemSeparator}
        renderItem={({ item }) =>
          <Pressable onPress={() => navigate(`/repos/${item.id}`)}>
            <RepositoryItem item={item} />
          </Pressable >}
        keyExtractor={item => item.id}
        contentContainerStyle={styles.listContainer}
      />
    </View>
  );
};


const RepositoryList = () => {
  const [ sortRepos, setSortRepos ] = useState();
  const { repositories } = useRepositories(sortRepos);
  const navigate = useNavigate();
  const [menuVisible, setMenuVisible] = useState(false);

  return (
    <RepositoryListContainer
      repositories={repositories}
      sortRepos={sortRepos}
      setSortRepos={setSortRepos}
      navigate={navigate}
      menuVisible={menuVisible}
      setMenuVisible={setMenuVisible}
    />
  )
};


export default RepositoryList;

