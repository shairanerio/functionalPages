import { View, Text } from 'react-native';
import { StatusBar } from 'react-native';
import { useRouter } from 'expo-router';

import React, { useState } from 'react';
import { StyleSheet, TouchableOpacity, Image } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Provider as PaperProvider, TextInput, Button, Checkbox, Divider } from 'react-native-paper';
import FontAwesome from 'react-native-vector-icons/FontAwesome';

export default function PasswordRecoveryScreen () {
    const router = useRouter();
    const [email, setEmail] = useState('');

    const handleRecoverPassword = () => {
      console.log('Recover Password pressed');
    };
  

  return (
    <PaperProvider>
      <SafeAreaView style={styles.container}>
        <Text style={styles.recTitle}>Password Recovery</Text>
        <TextInput label="Enter Email Address" value={email} onChangeText={setEmail} style={styles.input} keyboardType="email-address" autoCapitalize="none"/>

        <Button mode="contained" onPress={handleRecoverPassword} style={styles.recButton}>Recover Password</Button>
        
        <Button mode="contained" style={styles.backLogin} onPress={() => router.back()} labelStyle={styles.backLoginText}>Back to Login</Button>
        
      </SafeAreaView>
    </PaperProvider>
  )
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#8ecae6',
      padding: 16,
    },
    recTitle: {
      fontSize: 25,
      fontWeight: 'bold',
      textAlign: 'center',
      marginBottom: 20,
      marginTop: 200,
    },
    input: {
      marginBottom: 16,
      backgroundColor: 'transparent',
    },
    recButton: {
      borderRadius: 10,
      marginTop: 20,
      backgroundColor: '#AB644B',
      textColor: "#fff",
    },
    backLogin: {
        marginVertical: 20,
        backgroundColor: '#AB644B',
        borderRadius: 10,
    },
    backLoginText: {
        color: '#fff',
    },
  });