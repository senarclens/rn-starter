import React from 'react';
import { Text, StyleSheet, View } from 'react-native';


const ComponentsScreen = () => {
  const name = 'Gerald';
  return <View>
    <Text style={styles.textStyleHeader}>Getting Started with React Native</Text>
    <Text>My name is {name}</Text>
  </View>;
}

const styles = StyleSheet.create({
  textStyleHeader: {
    fontSize: 45,
  },
  textStyle: {
    fontSize: 20,
  }
});

export default ComponentsScreen;
