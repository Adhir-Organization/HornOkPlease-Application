import "react-native-gesture-handler";

// Packages Import
import { NavigationContainer } from "@react-navigation/native";
import { extendTheme, Heading, Text, useTheme } from "native-base";
import {
  createStackNavigator,
  CardStyleInterpolators,
} from "@react-navigation/stack";

// Loading animation
import AnimatedLoader from "react-native-animated-loader";

// Screens Import
import TabNavigation from "./TabNavigation";
import Notifications from "../screens/Notifications";
import ExpenseEntry from "../screens/ExpenseEntry";
import Contacts from "../screens/Contacts";
import GetStarted from "../screens/GetStarted";
import Login from "../screens/Login";
import OtpVerification from "../screens/OtpVerification";
import DriverMaintenance from "../screens/DriverMaintenance";
import PTNavigation from "./PTNavigation";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { useEffect, useState } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
import authContext from "../context/authContext";

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

export default function StackNavigation() {
  const [loading, setLoading] = useState(true);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const getToken = async () => {
    try {
      const value = await AsyncStorage.getItem("authToken");
      // console.log(value);
      if (value == null) {
        setIsLoggedIn(false);
      } else {
        setIsLoggedIn(true);
      }
      setTimeout(() => {
        setLoading(false);
      }, 2300);
    } catch (e) {
      console.log(e);
    }
  };
  useEffect(() => {
    getToken();
  }, []);

  if (loading) {
    return (
      <>
        <AnimatedLoader
          visible={loading}
          overlayColor="rgba(255,255,255,0.75)"
          // change animation from here : https://lottiefiles.com/98915-loader
          source={require("../../assets/animation/loader.json")}
          animationStyle={{
            width: 300,
            height: 300,
          }}
          speed={1}
        >
          {/* <Text>Please wait...</Text> */}
        </AnimatedLoader>
      </>
    );
  }
  return (
    <authContext.Provider value={{ isLoggedIn, setIsLoggedIn }}>
      <SafeAreaProvider>
        <NavigationContainer>
          <Stack.Navigator
            screenOptions={{
              headerShown: false,
              cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
            }}
            initialRouteName={"GetStarted"}
          >
            {!isLoggedIn ? (
              <>
                <Stack.Screen name="GetStarted" component={GetStarted} />
                <Stack.Screen name="Login" component={Login} />
                <Stack.Screen
                  name="OtpVerification"
                  component={OtpVerification}
                />
              </>
            ) : (
              <>
                <Stack.Screen name="TabNavigation" component={TabNavigation} />
                <Stack.Screen name="Contacts" component={Contacts} />
                <Stack.Screen name="Notifications" component={Notifications} />
                <Stack.Screen name="ExpenseEntry" component={ExpenseEntry} />
                <Stack.Screen
                  name="DriverMaintenance"
                  component={DriverMaintenance}
                />
                <Stack.Screen name="PTNavigation" component={PTNavigation} />
              </>
            )}
          </Stack.Navigator>
        </NavigationContainer>
      </SafeAreaProvider>
    </authContext.Provider>
  );
}
