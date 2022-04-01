import React from "react";
import { View, Text } from "react-native";
import Scanner from "../Scanner/Scanner";
import styles from './Camera-Style'

const Camera = () => {
  return (
    <View style={styles.container}>
      <Scanner />
    </View>
  );
};

export default Camera;
