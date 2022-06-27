import React, {useState} from 'react';
import { View, Text, TextInput, StyleSheet } from 'react-native';

const reducer = (state, action) => {
  // state === { counter: number }
  // action === { type: 'increment' || 'decrement', payload: 1 }
  switch (action.type) {
    case 'increase':
      return {...state, counter: state.counter + action.payload }
    case 'decrease':
      return {...state, counter: state.counter - action.payload }
    default:
      return state;
  }
}

const TextScreen = () => {
  const [name, setName] = useState('');
  const [password, setPassword] = useState('');

  return (<View>
    <Text>Enter Name:</Text>
    <TextInput
      style={styles.input}
      autoCapitalize="none"
      autoCorrect={false}
      value={name}
      onChangeText={(newValue) => setName(newValue)}
    />
    <Text style={styles.text}>My name is {name}</Text>

    <Text>Enter Password:</Text>
    <TextInput
      style={styles.input}
      autoCapitalize="none"
      value={password}
      onChangeText={newValue => setPassword(newValue)}
    />
    {password.length < 4 ? <Text>Password must be at least 4 characters long</Text> : "" }
  </View>
  );
};

const styles = StyleSheet.create({
  input: {
    margin: 15,
    borderColor: 'black',
    borderWidth: 1
  },
  text: {
    marginVertical: 20,
  },
});

export default TextScreen;
