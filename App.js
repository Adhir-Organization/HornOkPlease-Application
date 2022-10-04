// !IMPORTANT: Do not remove these import
import "react-native-gesture-handler";

import Icon from "react-native-vector-icons/Ionicons";
import { NavigationContainer, DefaultTheme } from "@react-navigation/native";
import { NativeBaseProvider, extendTheme } from "native-base";

// import GetStarted from "./screens/GetStarted";
// import Login from "./screens/Login";
import Dashboard from "./screens/Dashboard";
import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";
import Docs from "./screens/Docs";
import { useBottomTabBarHeight } from "@react-navigation/bottom-tabs";
import { withOrientation } from "react-navigation";
// import OtpVerification from "./screens/OtpVerification";

const Tab = createMaterialBottomTabNavigator();

export default function App() {
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

  return (
    <NativeBaseProvider theme={theme}>
      <NavigationContainer>
        <Tab.Navigator
          initialRouteName="Home"
          screenOptions={{
            headerShown: false,
            //tabBarActiveBackgroundColor: "#B8D4FF",
          }}
          barStyle={{ backgroundColor: "#B8D4FF", paddingBottom: 600 }}
        >
          <Tab.Screen
            name="Home"
            component={Dashboard}
            options={{
              tabBarLabel: "home",
              tabBarIcon: ({ color, size }) => (
                <Icon name="md-home-outline" size={25} />
              ),
            }}
          />
          <Tab.Screen
            name="Docs"
            component={Docs}
            options={{
              tabBarLabel: "Docs",
              tabBarIcon: ({ color, size }) => (
                <Icon name="md-home-outline" size={25} />
              ),
            }}
          />
        </Tab.Navigator>
      </NavigationContainer>
    </NativeBaseProvider>
  );
}
/* <Stack.Navigator
  screenOptions={{
    headerShown: false,
    cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
  }}
  initialRouteName="Home"
>
  <Stack.Screen name="Get Started" component={GetStarted} />
  <Stack.Screen name="Login" component={Login} />
  <Stack.Screen name="OtpVerification" component={OtpVerification} />
  <Stack.Screen name="Dashboard" component={Dashboard} />
</Stack.Navigator> */
