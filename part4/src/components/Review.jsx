import { FlatList, StyleSheet  } from 'react-native';

import ReviewItem from './ReviewItem';
import useUser from '../hooks/useUser';
import theme from '../theme'


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

const Review = () => {
  const { reviews } = useUser(true);

  return (
    <FlatList
      data={reviews}
      renderItem={({ item }) => <ReviewItem review={item}/>}
      keyExtractor={item  => item.id}
      contentContainerStyle={styles.listContainer}
      ItemSeparatorComponent={ItemSeparator}
    />
  )
};


export default Review;
