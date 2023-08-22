import "react-native-gesture-handler";

import React, { useCallback } from "react";
import { ThemeProvider } from "styled-components/native";
import { SafeAreaView } from "react-native-safe-area-context";
import * as SplashScreen from "expo-splash-screen";
import { StatusBar } from "expo-status-bar";
import theme from "./src/config/styles/theme";
import { Routes } from "./src/routes";
import { useFonts } from "expo-font";
import { Provider } from "react-redux";
import { store } from "./src/store/store";
import { PersistGate } from "redux-persist/integration/react";
import { persistStore } from "redux-persist";

import moment from "moment";
import 'moment/locale/pt-br'
import { QueryClient, QueryClientProvider } from "react-query";
moment.locale('pt-br');

SplashScreen.preventAutoHideAsync();

let persistor = persistStore(store)

const queryClient = new QueryClient()

export default function App() {
  const [fontsLoaded, fontError] = useFonts({
    "Inter-Regular": require("./assets/fonts/Inter-Regular.ttf"),
    "Inter-Medium": require("./assets/fonts/Inter-Medium.ttf"),
    "Inter-SemiBold": require("./assets/fonts/Inter-SemiBold.ttf"),
    "Inter-Bold": require("./assets/fonts/Inter-Bold.ttf"),
  });

  const onLayoutRootView = useCallback(async () => {
    if (fontsLoaded || fontError) {
      await SplashScreen.hideAsync();
    }
  }, [fontsLoaded, fontError]);

  if (!fontsLoaded && !fontError) {
    return null;
  }

  return (
    <ThemeProvider theme={theme}>
      <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
      <QueryClientProvider client={queryClient}>
        <SafeAreaView style={{ flex: 1 }} onLayout={onLayoutRootView}>
          <StatusBar backgroundColor={theme.colors.primary} style="light" />
          <Routes />
        </SafeAreaView>
        </QueryClientProvider>
      </PersistGate>
      </Provider>
    </ThemeProvider>
  );
}
