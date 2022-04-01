import React, { useState } from "react";
import { View } from "react-native";
import { MetadataContext } from "./context/MetadataContext";
import { HasScannedContext } from "./context/HasScannedContext";
import styles from "./App-Style";
import Main from "./components/Main/Main";
import metadata from "./context/metadata.json";

export default function App() {
  const [hasScanned, setHasScanned] = useState(false);
  return (
    <HasScannedContext.Provider value={{ hasScanned, setHasScanned }}>
      <MetadataContext.Provider value={metadata}>
        <View style={styles.container}>
          <Main />
        </View>
      </MetadataContext.Provider>
    </HasScannedContext.Provider>
  );
}
