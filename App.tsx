import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { ThemeProvider } from 'styled-components/native';
import theme from './src/config/styles/theme';



export default function App() {
  return (<ThemeProvider theme={theme}>
      <View style={styles.container}>
        <Text>Testando 123</Text>
        <StatusBar style="auto" />
      </View>
  </ThemeProvider>
    
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
