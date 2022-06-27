import React from 'react';
import { Text, View, StyleSheet } from 'react-native';

const BoxScreen = () => {
  return <View style={styles.viewStyle}>
    <Text style={styles.textOneStyle}>Child #1</Text>
    <Text style={styles.textTwoStyle}>Child #2</Text>
    <Text style={styles.textThreeStyle}>Child #3</Text>
  </View>
};

const styles = StyleSheet.create({
  viewStyle: {
    height: 200,
    justifyContent: 'space-around',
    alignItems: 'stretch',
    flexDirection: 'row',
    borderWidth: 3,
    borderColor: 'black'
  },
  textOneStyle: {
    borderWidth: 1,
    borderColor: 'red',
  },
  textTwoStyle: {
    borderWidth: 1,
    borderColor: 'red',
    flex: 1,
  },
  textThreeStyle: {
    borderWidth: 1,
    borderColor: 'red',
  }
});

export default BoxScreen;
