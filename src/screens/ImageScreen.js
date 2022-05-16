import React from 'react';
import { ScrollView, StyleSheet } from 'react-native';
import ImageDetail from '../components/ImageDetail';

const ImageScreen = () => {
  return (
    <ScrollView>
      <ImageDetail title="Forest"
        image={require("../../assets/forest.jpg")}
        score="15"
      />
      <ImageDetail title="Beach"
        image={require("../../assets/beach.jpg")}
        score="12"
      />
      <ImageDetail title="Mountain"
        image={require("../../assets/mountain.jpg")}
        score="11"
      />
    </ScrollView>
  );
};

const styles = StyleSheet.create({});

export default ImageScreen;
