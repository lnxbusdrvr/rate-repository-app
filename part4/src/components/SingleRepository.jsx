import { View, FlatList, StyleSheet } from 'react-native';
import { useParams } from "react-router-native";

import Text from './Text';
import useReviews from '../hooks/useReviews';
import ReviewItem from './ReviewItem';
import RepositoryInfo from './RepositoryInfo';


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


const SingleRepository = () => {
  const { id } = useParams();
  const { reviews, fetchMore } = useReviews(
    id,
    { first: 3 }
  );

  const onEndReach = () => {
    console.log('has reached end');
    fetchMore();
    console.log('has fetched more');
  };

  return (
    <FlatList
      data={reviews}
      renderItem={({ item }) => <ReviewItem review={item}/>}
      keyExtractor={item  => item.id}
      ListHeaderComponent={() => <RepositoryInfo />}
      contentContainerStyle={styles.listContainer}
      ItemSeparatorComponent={ItemSeparator}
      onEndReached={onEndReach}
      onEndReachedThreshold={0.5}
    />
  )
};


export default SingleRepository;
