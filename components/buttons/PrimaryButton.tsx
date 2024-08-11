import React, { Dispatch, SetStateAction } from 'react';
import { Platform, Pressable, StyleSheet, Text } from 'react-native';

interface IProps{
  count: number;
  setCount : Dispatch<SetStateAction<number>>
}
export const PrimaryButton = ({count, setCount}: IProps) => {
  return (
    <Pressable
      onPress={() => setCount(count + 1)}
      onLongPress={() => setCount(0)}
      style={({ pressed }) => [styles.button, pressed && styles.buttonPressed]}
    >
      <Text style={{ color: Platform.OS === 'android' ? 'white' : '#4746AB' }}>
        Incrementar
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