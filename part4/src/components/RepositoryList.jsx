import { useState } from 'react';
import { FlatList, View, StyleSheet, Pressable } from 'react-native';
import { Menu, Button, Divider, Provider, Searchbar } from 'react-native-paper';
import { useNavigate } from 'react-router-native';
import { useDebounce } from 'use-debounce';


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
  },
  searchBar: {
    marginBottom: 10,
  }
});


const ItemSeparator = () => <View style={styles.separator} />;

const RepositoryListMenuContainer = ({
  repositories,
  navigate,
  sortRepos,
  setSortRepos,
  menuVisible,
  setMenuVisible,
  searchKeyword,
  setSearchKeyword,
  debouncedSearch }) => {

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
    <Provider>
      <View style={{ flex: 1, paddingHorizontal: 10 }}>
        <Searchbar
          placeholder="Filter repositories"
          value={searchKeyword}
          onChangeText={setSearchKeyword}
          style={styles.searchBar}
        />

        <Menu
          visible={menuVisible}
          onDismiss={closePickerMenu}
          anchor={
            <Button
              onPress={openPickerMenu}
              mode="outlined"
              style={{ marginBottom: 10 }}
            >
              Sort repositories
            </Button>
          }
        >
          <Menu.Item onPress={() => handleSort('default')} title="Latest repositories" />
          <Menu.Item onPress={() => handleSort('highRated')} title="Highest rated repositories" />
          <Menu.Item onPress={() => handleSort('lowRated')} title="Lowest rated repositories" />
        </Menu>

        <RepositoryListContainer repositories={repositories} />
      </View>
    </Provider>
  );
};

export const RepositoryListContainer = ({ repositories }) => {

  // Get the nodes from the edges array
  const repositoryNodes = repositories
    ? repositories?.edges?.map((edge) => edge.node)
    : [];

  return (
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
  );
};


const RepositoryList = () => {
  const [ sortRepos, setSortRepos ] = useState();
  const navigate = useNavigate();
  const [menuVisible, setMenuVisible] = useState(false);
  const [searchKeyword, setSearchKeyword] = useState('');
  const [debouncedSearch] = useDebounce(searchKeyword); 
  const { repositories } = useRepositories(sortRepos, debouncedSearch);

  return (
    <RepositoryListMenuContainer
      repositories={repositories}
      sortRepos={sortRepos}
      setSortRepos={setSortRepos}
      navigate={navigate}
      menuVisible={menuVisible}
      setMenuVisible={setMenuVisible}
      searchKeyword={searchKeyword}
      setSearchKeyword={setSearchKeyword}
      debouncedSearch={debouncedSearch}
    />
  )
};


export default RepositoryList;

