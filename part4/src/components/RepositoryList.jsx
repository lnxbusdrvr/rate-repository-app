import { useState } from 'react';
import { FlatList, View, StyleSheet, Pressable } from 'react-native';
import { useNavigate } from 'react-router-native';

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

const RepositoryListFirstContainer = ({ repositories }) => {
  const navigate = useNavigate();

  return <RepositoryListContainer repositories={repositories} navigate={navigate} />;
};

export const RepositoryListContainer = ({ repositories, navigate }) => {

  // Get the nodes from the edges array
  const repositoryNodes = repositories
    ? repositories.edges.map((edge) => edge.node)
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
  const { repositories } = useRepositories();

  return <RepositoryListFirstContainer repositories={repositories} />;
};


export default RepositoryList;

