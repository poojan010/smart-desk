import { View, Text, StyleSheet } from 'react-native';


const ProfileScreen = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Profile</Text>
    </View>
  )
}

export default ProfileScreen

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
