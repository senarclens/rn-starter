import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';

const ImageDetail = ({ title, image }) => {
  return <View>
    <Image source={image} />
    <Text>{title}</Text>
  </View>;
};

const styles = StyleSheet.create({});

export default ImageDetail;
