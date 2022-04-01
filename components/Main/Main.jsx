import React from "react";
import { View } from "react-native";
import Bottom from "../Bottom/Bottom";
import Camera from "../Camera/Camera";
import Top from "../Top/Top";
import styles from "./Main_Style";

const Main = () => {
  return (
    <View style={styles.main_container}>
      <View style={styles.top_container}>
        <Top />
      </View>
      <View style={styles.camera_container}>
        <Camera />
      </View>
      <View style={styles.bottom_container}>
        <Bottom />
      </View>
    </View>
  );
};

export default Main;
