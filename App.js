// !IMPORTANT: Do not remove these import
import "react-native-gesture-handler";

// Packages Import
import { NativeBaseProvider, extendTheme, useTheme } from "native-base";
import MainStackNavigation from "./src/Navigation/MainStackNavigation";
/* A provider for redux. */
import { Provider, useDispatch, useSelector } from "react-redux";
import store from "./src/store/store";
import { SafeAreaProvider } from "react-native-safe-area-context";

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
      <SafeAreaProvider>
        <Provider store={store}>
          <NativeBaseProvider useTheme={theme}>
            <MainStackNavigation />
          </NativeBaseProvider>
        </Provider>
      </SafeAreaProvider>
    </>
  );
}
