import { View, Text } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { PaperProvider } from 'react-native-paper'
import { StyleSheet, TouchableOpacity, Image } from 'react-native';
import { TextInput, Button, Checkbox, Divider } from 'react-native-paper';
import FontAwesome from 'react-native-vector-icons/FontAwesome';

const propayl = () => {
  return (
    <PaperProvider>
      <SafeAreaView>
      <Text style={styles.IndexText}>Ismayl</Text>
      <Image source={require ('../../assets/my_logo.png')}></Image>
      </SafeAreaView>
    </PaperProvider>
  )
}

export default propayl

const styles = StyleSheet.create ({
  IndexText: {
    paddingHorizontal: 20,
    justifyContent: 'center',
  }
})