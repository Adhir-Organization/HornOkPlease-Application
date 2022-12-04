import "react-native-gesture-handler";

// Packages Import

import { extendTheme, Heading, Text, useTheme } from "native-base";
import {
  createStackNavigator,
  CardStyleInterpolators,
} from "@react-navigation/stack";

// Loading animation

// Screens Import

import LoginFleet from "../Screens/LoginFleet";
import OtpVerificationFleet from "../Screens/OTPVerificationFleet";

import { SafeAreaProvider } from "react-native-safe-area-context";

const Stack = createStackNavigator();
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

export default function MainStackNav() {
  return (
    <SafeAreaProvider>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
          cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
        }}
      >
        <Stack.Screen name="LoginFleet" component={LoginFleet} />
        <Stack.Screen
          name="OtpVerificationFleet"
          component={OtpVerificationFleet}
        />
      </Stack.Navigator>
    </SafeAreaProvider>
  );
}
