import { View, Pressable, StyleSheet, Alert  } from 'react-native';
import { Link } from 'react-router-native';
import { format } from "date-fns";

import Text from './Text';
import theme from '../theme';
import useDeleteReview from '../hooks/useDeleteReview';


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
   buttonsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: theme.spacing.small,
    gap: theme.spacing.small,
  },
  button: {
    backgroundColor: theme.colors.primary,
    padding: theme.spacing.medium,
    borderRadius: theme.borderRadius.small,
    alignItems: 'center',
    marginTop: theme.spacing.small,
  },
  buttonDelete: {
    backgroundColor: theme.colors.danger,
    padding: theme.spacing.medium,
    borderRadius: theme.borderRadius.small,
    alignItems: 'center',
    marginTop: theme.spacing.small,
  },
  buttonText: {
    fontWeight: theme.fontWeights.bold,
    color: theme.colors.textOnPrimary,
    fontSize: theme.fontSizes.body,
  } },
});


const MyReviewItem = ({ review }) => {
  const [deleteReview, refetch] = useDeleteReview();

  const handleDelete = () => {
    Alert.alert(
      'Delete review',
      'Are you sure you want to delete this review?',
      [
        { text: 'Cancel',
          onPress: () => console.log('Cancel Pressed'),
          style: 'cancel' },
        {
          text: 'Yes',
          onPress: async () => {
            try {
              await deleteReview(review.id);
              refetch();
            } catch (e) {
              console.error(`Error while deleting: ${e.message}`);
            }
          },
        },
      ]
    );
  };


  return (
    <View style={styles.container} >
      <View style={styles.ratingContainer} >
        <Text style={styles.ratingText} >{review.rating}</Text>
      </View>

      <View style={styles.contentContainer}>
        <Text style={styles.fullName}>{review.repository.fullName}</Text>
        <Text style={styles.date}>{format(new Date(review.createdAt), "dd.MM.yyyy")}</Text>
        <Text style={styles.text}>{review.text}</Text>
      </View>

      <View style={styles.buttonsContainer}>
        <Link style={styles.button} to={`/repos/${review.repositoryId}`}>
          <Text style={styles.buttonText}>
            View repository
          </Text>
        </Link>
        <Pressable style={styles.buttonDelete} onPress={handleDelete}>
          <Text style={styles.buttonText}>
            Delete review
          </Text>
        </Pressable>
      </View>
    </View>
  );
};


export default MyReviewItem;
