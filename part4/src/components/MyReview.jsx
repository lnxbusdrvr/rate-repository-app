import { View, FlatList, StyleSheet  } from 'react-native';

import MyReviewItem from './MyReviewItem';
import useUser from '../hooks/useUser';
import theme from '../theme';


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

const MyReview = () => {
  const { reviews } = useUser(true);

  return (
    <FlatList
      data={reviews}
      renderItem={({ item }) => <MyReviewItem review={item} />}
      keyExtractor={item  => item.id}
      contentContainerStyle={styles.listContainer}
      ItemSeparatorComponent={ItemSeparator}
    />
  )
};

/*
 */

export default MyReview;
