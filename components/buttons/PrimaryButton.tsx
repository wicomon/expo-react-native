import React, { Dispatch, SetStateAction } from 'react';
import { Platform, Pressable, StyleSheet, Text } from 'react-native';

interface IProps{
  label: string;
  onPress?: () => void;
  onLongPress?: () => void
}
export const PrimaryButton = ({label, onPress, onLongPress}: IProps) => {
  return (
    <Pressable
      onPress={() => onPress && onPress()}
      onLongPress={() => onLongPress && onLongPress()}
      style={({ pressed }) => [styles.button, pressed && styles.buttonPressed]}
    >
      <Text style={{ color: Platform.OS === 'android' ? 'white' : '#4746AB' }}>
        {label}
      </Text>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  button: {
    backgroundColor: Platform.OS==='android'? '#5856D6' :'white',
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 10,
  },
  buttonPressed: {
    backgroundColor: Platform.OS==='android'? '#4746AB': 'white',
  },
});