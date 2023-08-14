import 'react-native-gesture-handler';

import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { ThemeProvider } from 'styled-components/native';
import { SafeAreaView } from 'react-native-safe-area-context';

import theme from './src/config/styles/theme';
import { Routes } from './src/routes';



export default function App() {
  return (<ThemeProvider theme={theme}>
    <SafeAreaView style={{flex: 1}}>
      <Routes/>
      <StatusBar style="auto" />
      </SafeAreaView>
  </ThemeProvider>
    
  );
}
