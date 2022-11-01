// !IMPORTANT: Do not remove these import
import "react-native-gesture-handler";

// Packages Import
import { NativeBaseProvider, extendTheme, useTheme } from "native-base";
import MainStackNavigation from "./src/Navigation/MainStackNavigation";

import { SafeAreaProvider } from "react-native-safe-area-context";

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

export default function App() {
  return (
    <>
      <NativeBaseProvider useTheme={theme}>
        <SafeAreaProvider>
          <MainStackNavigation />
        </SafeAreaProvider>
      </NativeBaseProvider>
    </>
  );
}
