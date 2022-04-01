import React, { useState, useEffect, useContext } from "react";
import { Text, View, StyleSheet, Button } from "react-native";
import { BarCodeScanner } from "expo-barcode-scanner";
import styles from "./Scanner-Style";
import showAlert from "../showAlert/showAlert";
import { MetadataContext } from "../../context/MetadataContext";
import * as Linking from "expo-linking";
import { HasScannedContext } from "../../context/HasScannedContext";

const Scanner = () => {
  // States
  const [hasPermission, setHasPermission] = useState(null);
  const { hasScanned, setHasScanned } = useContext(HasScannedContext);
  const metadata = useContext(MetadataContext);

  // Functions

  const handleBarCodehasScanned = ({ type, data }) => {
    console.log("here");
    setHasScanned(true);
    const { texts } = metadata;
    const popUpData = {
      title: data,
      text: `${texts.AlertHasScannedText}\n ${data}`,
      handleCancel,
      handleDismiss,
      handleOpen,
    };
    showAlert(popUpData);
  };

  const handleCancel = () => {
    setHasScanned(false);
  };
  const handleDismiss = () => {
    setHasScanned(false);
  };
  const handleOpen = async (url) => {
    const { texts } = metadata;
    const canOpen = await Linking.canOpenURL(url);
    if (canOpen) {
      const opened = await Linking.openURL(url);
    } else {
      const popUpData = {
        title: texts.CantOpenTitle,
        text: texts.CantOpenText,
        handleCancel,
        handleDismiss,
        handleOpen,
      };
      showAlert(popUpData);
    }
    setHasScanned(false);
  };

  // Effects
  useEffect(() => {
    async function getPermissions() {
      const { status } = await BarCodeScanner.getPermissionsAsync();
      return status;
    }
    async function requestPermissions() {
      const { status } = await BarCodeScanner.requestPermissionsAsync();
      setHasPermission(status === "granted");
    }

    async function initPermissions() {
      const status = await getPermissions();
      if (status === "granted") {
        setHasPermission(true);
        return;
      }
      requestPermissions();
    }

    initPermissions();
  }, []);

  // Renders

  if (hasPermission === null) {
    return <Text>Requesting for camera permission</Text>;
  }
  if (hasPermission === false) {
    return <Text>No access to camera</Text>;
  }
  return (
    <View style={styles.container}>
      {!hasScanned && (
        <BarCodeScanner
          onBarCodeScanned={hasScanned ? null : handleBarCodehasScanned}
          style={styles.scanner}
        />
      )}
    </View>
  );
};

export default Scanner;
