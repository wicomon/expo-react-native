import React, { useState } from 'react';
import { View, Text, StyleSheet, Button, Pressable, Platform } from 'react-native';
import {PrimaryButton} from '@/components/buttons/PrimaryButton'

export default function DetailsScreen() {
  const [count, setCount] = useState(10);
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{count}</Text>
      <PrimaryButton count={count} setCount={setCount} />
      {/* <Pressable
        onPress={() => setCount(count + 1)}
        onLongPress={() => setCount(0)}
        style={ ({ pressed }) => [
          styles.button,
          pressed && styles.buttonPressed
        ] }
      >
        <Text style={{ color: Platform.OS==='android' ? 'white':  '#4746AB' }}>Incrementar</Text>
      </Pressable> */}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 80,
    color: 'black',
    fontWeight: '300',
  }
});
