import "react-native-gesture-handler";

// Packages Import

import { extendTheme, Heading, Text, useTheme } from "native-base";
import {
  createStackNavigator,
  CardStyleInterpolators,
} from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";

// Loading animation

// Screens Import

import LoginFleet from "../Screens/LoginFleet";
import OTPVerificationFleet from "../Screens/OTPVerificationFleet";
import ExpenseSummary from "../Screens/ExpenseSummary";
import AvailableTrucks from "../Screens/AvailableTrucks";
import OnroadTrucks from "../Screens/OnroadTrucks";
import TabNavigation from "./TabNavigationFleet";
import AssignTrip from "../Screens/AssignTrip";
import OnRoadTrucksDetails from "../Screens/OnRoadTrucksDetails";
import DrawerNav from "../Navigation/DrawerNav";
import GetStarted from "../../../src/screens/GetStarted";
import Login from "../../../src/screens/Login";
import OtpVerification from "../../../src/screens/OtpVerification";
import { SafeAreaProvider } from "react-native-safe-area-context";
import authContext from "../../../src/context/authContext";
import { useEffect, useState } from "react";

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

  // const [authToken, setAuthToken] = useState(null);
  // const getToken = async () => {
  //   try {
  //     const value = await AsyncStorage.getItem("authToken");
  //     if (value == null) {
  //       setAuthToken(null);
  //     } else {
  //       setAuthToken(value);
  //     }
  //     setLoading(false);
  //     // }
  //   } catch (e) {
  //     console.log(e);
  //   }
  // };
  // useEffect(() => {
  //   getToken();
  // }, []);


  return (
    // <authContext.Provider value={{ authToken, setAuthToken }}>
    <SafeAreaProvider>
      {/* <NavigationContainer> */}
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
          cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
        }}
        initialRouteName={"TabNavigation"}
      >
        {/* {!authToken ? ( */}
        {/* <> */}
        <Stack.Screen name="LoginFleet" component={LoginFleet} />
        <Stack.Screen
          name="OTPVerificationFleet"
          component={OTPVerificationFleet}
        />
        <Stack.Screen name="GetStarted" component={GetStarted} />
        <Stack.Screen name="TabNavigation" component={TabNavigation} />
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="OtpVerification" component={OtpVerification} />

        <Stack.Screen name="ExpenseSummary" component={ExpenseSummary} />
        <Stack.Screen name="AvailableTrucks" component={AvailableTrucks} />
        <Stack.Screen name="OnroadTrucks" component={OnroadTrucks} />
        <Stack.Screen name="OnRoadTrucksDetails" component={OnRoadTrucksDetails} />
        <Stack.Screen name="AssignTrip" component={AssignTrip} />
        <Stack.Screen name="DrawerNav" component={DrawerNav} />

      </Stack.Navigator>
    </SafeAreaProvider>
    // </authContext.Provider>
  );
}
