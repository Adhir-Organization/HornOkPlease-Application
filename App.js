// !IMPORTANT: Do not remove these import
import "react-native-gesture-handler";

// Packages Import
import { NavigationContainer } from "@react-navigation/native";
import { NativeBaseProvider, extendTheme } from "native-base";
import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";
import { createStackNavigator } from "@react-navigation/stack";

// Screens Import
import GetStarted from "./src/screens/GetStarted";
import Login from "./src/screens/Login";
import OtpVerification from "./src/screens/OtpVerification";
import Dashboard from "./src/screens/Dashboard";

// const Tab = createMaterialBottomTabNavigator();
const Stack = createStackNavigator();

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
        <Stack.Navigator
          screenOptions={{ headerShown: false }}
          initialRouteName="Home"
        >
          <Stack.Screen name="Get Started" component={GetStarted} />
          <Stack.Screen name="Login" component={Login} />
          <Stack.Screen name="OtpVerification" component={OtpVerification} />
          <Stack.Screen name="Dashboard" component={Dashboard} />
        </Stack.Navigator>
      </NavigationContainer>
    </NativeBaseProvider>
  );
}

/**
 *  <Tab.Navigator
          initialRouteName="Home"
          screenOptions={{
            headerShown: false,
            //tabBarInActiveBackgroundColor: "#0058DB",
          }}
          barStyle={{
            backgroundColor: "#DCEAFF",
            paddingBottom: 8,
          }}
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
              tabBarIcon: ({ size }) => (
                <Icons name="file-document-outline" size={25} />
              ),
            }}
          />
          <Tab.Screen
            name="Notifications"
            component={Notifications}
            options={{
              tabBarLabel: "Notification",

              tabBarIcon: ({ color, size }) => (
                <Icon name="notifications-outline" size={25} />
              ),
            }}
          />
          <Tab.Screen
            name="Contacts"
            component={Contacts}
            options={{
              tabBarLabel: "Contacts",
              tabBarIcon: ({ color, size }) => (
                <Call name="phone-call" size={25} />
              ),
            }}
          />
        </Tab.Navigator>
 */
