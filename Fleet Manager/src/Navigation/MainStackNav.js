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
import OTPVerificationFleet from "../Screens/OTPVerificationFleet";
import ExpenseSummary from "../Screens/ExpenseSummary";
import TabNavigation from "./TabNavigationFleet";
import { SafeAreaProvider } from "react-native-safe-area-context";
import DrawerNav from "./DrawerNav";
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
          name="OTPVerificationFleet"
          component={OTPVerificationFleet}
        />
        <Stack.Screen name="TabNavigation" component={TabNavigation} />
        <Stack.Screen name="ExpenseSummary" component={ExpenseSummary} />
        <Stack.Screen name="DrawerNav" component={DrawerNav} />
      </Stack.Navigator>
    </SafeAreaProvider>
  );
}