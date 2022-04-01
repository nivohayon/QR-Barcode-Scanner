import { View, Text } from "react-native";
import React from "react";
import styles from "./Top-Style";

const Top = () => {
  return (
    <View style={styles.ads_container}>
      <Text style={styles.text}>Ads</Text>
      <Text style={styles.text}>Ads</Text>
      <Text style={styles.text}>Ads</Text>
      <Text style={styles.text}>Ads</Text>
    </View>
  );
};

export default Top;
