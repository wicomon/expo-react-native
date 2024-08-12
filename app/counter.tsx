import React, { useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { PrimaryButton } from '@/components/buttons/PrimaryButton';
import { Button } from 'react-native-paper';

export default function DetailsScreen() {
  const [count, setCount] = useState(10);
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{count}</Text>
      {/* <PrimaryButton
        label={'Incrementar'}
        onPress={() => setCount(count + 1)}
        onLongPress={() => setCount(0)}
      /> */}
      <Button
        mode='contained'
        onPress={() => setCount(count + 1)}
        onLongPress={() => setCount(0)}
      >
        Incrementar
      </Button>
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
  },
});
