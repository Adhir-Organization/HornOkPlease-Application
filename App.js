// !IMPORTANT: Do not remove these import
import "react-native-gesture-handler";

// Packages Import
import { NativeBaseProvider, extendTheme, useTheme } from "native-base";
import MainStackNavigation from "./src/Navigation/MainStackNavigation";

import { SafeAreaProvider } from "react-native-safe-area-context";

import { Provider } from "react-redux";
import { configureStore } from "@reduxjs/toolkit";
import rootReducer from "./src/reducers";
// async storage import
import AsyncStorage from "@react-native-async-storage/async-storage";

const theme = extendTheme({
  colors: {
    customClrs: {
      50: "#2871E6",
    },
  },
  components: {
    Button: {
      defaultProps: {
        colorScheme: "blue",
      },
    },
  },
});

const store = configureStore({
  reducer: rootReducer,
});

export default function App() {
  return (
    <>
      <NativeBaseProvider useTheme={theme}>
        <Provider store={store}>
          <SafeAreaProvider>
            <MainStackNavigation />
          </SafeAreaProvider>
        </Provider>
      </NativeBaseProvider>
    </>
  );
}
