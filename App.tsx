import 'react-native-gesture-handler';

import React, { useCallback } from 'react';
import { StatusBar } from 'expo-status-bar';
import { ThemeProvider } from 'styled-components/native';
import { SafeAreaView } from 'react-native-safe-area-context';
import * as SplashScreen from "expo-splash-screen"


import theme from './src/config/styles/theme';
import { Routes } from './src/routes';
import { useFonts } from 'expo-font';


SplashScreen.preventAutoHideAsync();

export default function App() {

  const [fontsLoaded, fontError] = useFonts({
    'Inter-Regular': require('./assets/fonts/Inter-Regular.ttf'),
    'Inter-Medium': require('./assets/fonts/Inter-Medium.ttf'),
    'Inter-Bold': require('./assets/fonts/Inter-Bold.ttf'),
  });

  const onLayoutRootView = useCallback(async () => {
    if (fontsLoaded || fontError) {
      await SplashScreen.hideAsync();
    }
  }, [fontsLoaded, fontError]);

  if (!fontsLoaded && !fontError) {
    return null;
  }



  return (<ThemeProvider theme={theme}>
    <SafeAreaView style={{flex: 1}} onLayout={onLayoutRootView}>
      <Routes/>
      <StatusBar style="auto" />
      </SafeAreaView>
  </ThemeProvider>
    
  );
}
