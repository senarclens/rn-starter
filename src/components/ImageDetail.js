import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';

const ImageDetail = ({ title, image, score }) => {
  return <View>
    <Image source={image}
      style={{
        width: 500,
        height: 300
        }} />
    <Text>{title}</Text>
    <Text>Score: {score}</Text>
  </View>;
};

const styles = StyleSheet.create({});

export default ImageDetail;
