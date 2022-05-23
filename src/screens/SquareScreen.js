import React, {useState} from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';
import ColorCounter from '../components/ColorCounter';

const SquareScreen = () => {
  const [red, setRed] = useState(0);
  const [green, setGreen] = useState(0);
  const [blue, setBlue] = useState(0);

  console.log(red, green, blue);

  const DELTA = 15;

  const setColor = (color, change) => {
    switch (color) {
      case 'red':
        red + change > 255 || red + change < 0 ? null : setRed(red + change);
        return;
      case 'green':
        green + change > 255 || green + change < 0 ? null : setGreen(green + change);
        return;
      case 'blue':
        blue + change > 255 || blue + change < 0 ? null : setBlue(blue + change);
        return;
    }
  };

  return <View>
    <ColorCounter
      onIncrease={() => setColor('red', DELTA)}
      onDecrease={() => setColor('red', -DELTA)}
      color="Red" />
    <ColorCounter
      onIncrease={() => setColor('green', DELTA)}
      onDecrease={() => setColor('green', -DELTA)}
       color="Green" />
    <ColorCounter
      onIncrease={() => setColor('blue', DELTA)}
      onDecrease={() => setColor('blue', -DELTA)}
      color="Blue" />
    <View style={{
      height: 150,
      width: 150,
      backgroundColor: `rgb(${red},${green},${blue})`
      }}
    />
  </View>
};


const styles = StyleSheet.create({});

export default SquareScreen;
