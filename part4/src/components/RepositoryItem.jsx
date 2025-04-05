import { Text, View, StyleSheet, Image } from 'react-native';


const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    padding: 15,
    backgroundColor: 'white',
  },
  logo: {
    width: 50,
    height: 50,
    borderRadius: 5,
  },
  contentContainer: {
    flex: 1,
    marginLeft: 15,
  },
  fullName: {
    fontWeight: 'bold',
    fontSize: 16,
  },
  description: {
    color: 'gray',
    marginBottom: 5,
  },
  languageTag: {
    backgroundColor: '#0366d6', // Sininen tausta
    alignSelf: 'flex-start', // Estää elementtiä venymästä koko leveydelle
    paddingVertical: 4,
    paddingHorizontal: 8,
    borderRadius: 5,
    marginTop: 4,
  },
  languageText: {
    color: 'white',
    fontWeight: 'bold',
  },
  statsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginTop: 10,
  },
  statItem: {
    alignItems: 'center',
  },
  statNumber: {
    fontWeight: 'bold',
  },
});

const formatNumber = (num) => {
  if (num >= 1000) {
    return (num / 1000).toFixed(1) + 'k'; // convert to 21.6k
  }
  return num;
};

const RepositoryItem = ({ item }) => {
  return (
    <View style={styles.container} testID="repositoryItem">
      <Image style={styles.logo} source={{ uri: item.ownerAvatarUrl }} />

      <View style={styles.contentContainer}>
        <Text style={styles.fullName}>{item.fullName}</Text>
        <Text style={styles.description}>{item.description}</Text>

        <View style={styles.languageTag}>
          <Text style={styles.languageText}>{item.language}</Text>
        </View>

        <View style={styles.statsContainer}>
          <View style={styles.statItem}>
            <Text style={styles.statNumber}>{formatNumber(item.stargazersCount)}</Text>
            <Text>Stars</Text>
          </View>
          <View style={styles.statItem}>
            <Text style={styles.statNumber}>{formatNumber(item.forksCount)}</Text>
            <Text>Forks</Text>
          </View>
          <View style={styles.statItem}>
            <Text style={styles.statNumber}>{item.reviewCount}</Text>
            <Text>Reviews</Text>
          </View>
          <View style={styles.statItem}>
            <Text style={styles.statNumber}>{item.ratingAverage}</Text>
            <Text>Rating</Text>
          </View>
        </View>
      </View>
    </View>
  );
};

export default RepositoryItem;

