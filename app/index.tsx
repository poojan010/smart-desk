import { View, Text, StyleSheet, Pressable } from 'react-native';
import { router } from 'expo-router';

const HomeScreen = () => {

  const onPressProfile = () => {
    router.push("/Profile")
  }

  return (
    <View style={styles.container}>
      
      <Text style={styles.text}>Home</Text>

      <Pressable onPress={onPressProfile} style={{marginTop:20}}>
        <Text>Profile</Text>
      </Pressable>
      
    </View>
  )
}

export default HomeScreen

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white'
  },
  text: {
    color: 'black'
  }
});
