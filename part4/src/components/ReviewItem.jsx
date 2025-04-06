import { View, StyleSheet, Image } from 'react-native';
import { format } from "date-fns";

import Text from './Text';
import theme from '../theme';


const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    padding: 15,
    backgroundColor: 'white',
  },
  ratingContainer: {
    width: 50,
    height: 50,
    borderRadius: 25, // width / 2
    borderColor: theme.colors.primary,
    borderWidth: 2,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 5,
  },
  ratingText: {
    color: theme.colors.primary,
    fontWeight: 'bold',
    fontSize: 16,
  },
  contentContainer: {
    flex: 1,
    marginLeft: 15,
  },
  fullName: {
    fontWeight: 'bold',
    fontSize: 16,
  },
  text: {
    color: 'gray',
    marginBottom: 5,
  },
});


const ReviewItem = ({ review }) => {

    return (
    <View style={styles.container} >
      <View style={styles.ratingContainer} >
        <Text style={styles.ratingText} >{review.rating}</Text>
      </View>

      <View style={styles.contentContainer}>
        <Text style={styles.fullName}>{review.user.username}</Text>
        <Text style={styles.date}>{format(new Date(review.createdAt), "dd.MM.yyyy")}</Text>
        <Text style={styles.text}>{review.text}</Text>
      </View>
    </View>
  );
};


export default ReviewItem;
