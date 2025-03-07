import { Text, View, StyleSheet } from 'react-native';


const RepositoryItem = ({ item }) => {
  return (
    <View>
      <Text>Full name:{item.fullName}</Text>
      <Text>Description: {item.description}</Text>
      <Text>language: {item.language}</Text>
      <Text>Stars: {item.stargazersCount}</Text>
      <Text>Forks: {item.forksCount}</Text>
      <Text>reviewCount: {item.reviewCount}</Text>
      <Text>ratingAverage: {item.ratingAverage}</Text>
    </View>
  )
}

export default RepositoryItem 
