import { View, Image } from "react-native";
import React from "react";
import styles from "./Top-Style";
import ad_placeholder from "../../assets/ad_placeholder.png";

const Top = () => {
  return (
    <View style={styles.ads_container}>
      <Image style={styles.ad_image} source={ad_placeholder} />
    </View>
  );
};

export default Top;
