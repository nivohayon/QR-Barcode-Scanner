import { View, Text } from "react-native";
import React from "react";
import styles from "./Bottom-Style";

const Bottom = () => {
  return (
    <View style={styles.buttons_container}>
      <View style={styles.left_container}>
        <Text>Left</Text>
      </View>
      <View style={styles.middle_container}>
        <Text>Middle</Text>
      </View>
      <View style={styles.right_container}>
        <Text>Right</Text>
      </View>
    </View>
  );
};

export default Bottom;
