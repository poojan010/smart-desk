import React from 'react';
import { Text, TouchableOpacity, GestureResponderEvent, StyleSheet } from 'react-native';

interface ButtonProps {
  text: string;
  onPress?: (event: GestureResponderEvent) => void;
}

const Button: React.FC<ButtonProps> = ({ text, onPress }) => (
  <TouchableOpacity testID='button' onPress={onPress} style={styles.button}>
    <Text style={styles.text}>{text}</Text>
  </TouchableOpacity>
);

const styles = StyleSheet.create({
  button: {
    padding: 10,
    backgroundColor: '#007bff',
    borderRadius: 5,
    alignItems: 'center',
  },
  text: {
    color: '#fff',
    fontSize: 16,
  },
});

export default Button;
