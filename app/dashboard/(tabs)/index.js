import React from 'react';
import { Text, View } from 'react-native';
import { StyleSheet } from 'react-native';
import { PaperProvider } from 'react-native-paper';
import { SafeAreaView } from 'react-native-safe-area-context';


const index = () => {
  return (
    <PaperProvider>
      <SafeAreaView>
      <Text style={styles.IndexText}>Hi I'm Home :)</Text>
      </SafeAreaView>
    </PaperProvider>
  )
}

export default index

const styles = StyleSheet.create ({
  IndexText: {
    paddingHorizontal: 20,
    justifyContent: 'center',
  }
})