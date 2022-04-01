import React from 'react'
import { View } from 'react-native'
import Camera from '../Camera/Camera';
import styles from './Main_Style'


const Main = () => {
  return (
    <View style={styles.container}>
      <Camera />
    </View>
  )
}

export default Main