import { View, Text, StyleSheet } from 'react-native';

const data = {
  title: 'Home'
}

const HomeScreen = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>{data.title}</Text>
    </View>
  )
}

export default HomeScreen

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    color: 'white'
  }
});
