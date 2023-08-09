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
import DriverProfile from "../screens/DriverProfile";
import MainStackNav from "../../Fleet Manager/src/Navigation/MainStackNav";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { useEffect, useState } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
import authContext from "../context/authContext";
import axios from "axios";
import { BASE_URL } from "../../config";

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
  const [authToken, setAuthToken] = useState(null);
  const getToken = async () => {
    try {
      // [ ] @abhi verify token whether it is valid or not using /token/verify api
      const value = await AsyncStorage.getItem("authToken");
      // if (value !== null) {
      // verify token from /token/verify api by setting header authToken
      // const { data } = await axios.get(`${BASE_URL}/token/verify`, {
      //   headers: {
      //     authToken: value,
      //   },
      // });

      if (value == null) {
        setAuthToken(null);
      } else {
        setAuthToken(value);
      }
      setLoading(false);
      // }
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
    <authContext.Provider value={{ authToken, setAuthToken }}>
      <SafeAreaProvider>
        <NavigationContainer>
          <Stack.Navigator
            screenOptions={{
              headerShown: false,
              cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
            }}
<<<<<<< HEAD
            initialRouteName={"TabNavigation"}
=======
            initialRouteName={"MainStackNav"}
>>>>>>> d262cb5a9d66eee9a2ec711157d154227c46ed0d
          >
            {!authToken ? (
              <>
                <Stack.Screen name="GetStarted" component={GetStarted} />
                <Stack.Screen name="Login" component={Login} />
                <Stack.Screen
                  name="OtpVerification"
                  component={OtpVerification}
                />
<<<<<<< HEAD
                <Stack.Screen name="MainStackNav" component={MainStackNav} />
              </>
            ) : (
              <>
=======
              </>
            ) : (
              <>
              <Stack.Screen name="MainStackNav" component={MainStackNav} />
>>>>>>> d262cb5a9d66eee9a2ec711157d154227c46ed0d
                <Stack.Screen name="TabNavigation" component={TabNavigation} />
                <Stack.Screen name="Contacts" component={Contacts} />
                <Stack.Screen name="Notifications" component={Notifications} />
                <Stack.Screen name="ExpenseEntry" component={ExpenseEntry} />
                <Stack.Screen
                  name="DriverMaintenance"
                  component={DriverMaintenance}
                />
                <Stack.Screen name="PTNavigation" component={PTNavigation} />
                <Stack.Screen name="DriverProfile" component={DriverProfile} />
              </>
            )}
          </Stack.Navigator>
        </NavigationContainer>
      </SafeAreaProvider>
    </authContext.Provider>
  );
}
