import { Link } from 'expo-router';
import { View, Text, StyleSheet } from 'react-native';

export default function Index() {
  return (
    <View style={styles.container}>
      <Text>Home</Text>
      <Link style={styles.list} href={'/counter'}>View counter</Link>
      <Link style={styles.list} href={'/counter2'}>View counter 3</Link>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  list:{ 
    paddingVertical: 5,
    fontSize: 30,
    // backgroundColor: 'red',
  }
});