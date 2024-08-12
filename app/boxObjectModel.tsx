import React from 'react'
import { View, Text, StyleSheet } from 'react-native';

const BoxObjectModel = () => {
  return (
    <View style={styles.container}>
      {/* <Text style={styles.title}>BoxObjectModel</Text> */}
      {/* <View style={styles.purpleBox}></View> */}
      <View style={styles.purpleBox}>
        <Text>Hola mundo</Text>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#d68181',
    flex: 1
  },
  title: {
    fontSize: 40,
    paddingHorizontal: 30,
    paddingVertical: 10,
    borderWidth: 10,
  },
  purpleBox: {
    backgroundColor: '#892bb1',
    height: 30,
    marginHorizontal: 20,
    marginVertical: 50,
    padding: 5,
  }
})


export default BoxObjectModel;