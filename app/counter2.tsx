import React, { useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Button, FAB } from 'react-native-paper';
import { globalStyles } from '@/theme/global.styles';
import Icon from 'react-native-vector-icons/Ionicons'

const CounterM3 = () => {
  const [count, setCount] = useState(3);
  return (
    <View style={globalStyles.centerContainer}>
      <Text style={globalStyles.title}>{count}</Text>
      <Icon name='accessibility-outline' size={50} />
      <FAB
        // label='1'
        icon="add"
        style={globalStyles.fab}
        onPress={() => setCount(count+1)}
        onLongPress={() => setCount(0)}
      />
    </View>
  );
}

export default CounterM3;
