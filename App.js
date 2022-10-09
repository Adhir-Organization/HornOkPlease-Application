// !IMPORTANT: Do not remove these import
import "react-native-gesture-handler";

// Packages Import
import { NavigationContainer } from "@react-navigation/native";
import { NativeBaseProvider, extendTheme, useTheme } from "native-base";
import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";
import { createStackNavigator } from "@react-navigation/stack";
import Icon from "react-native-vector-icons/Feather";

// Screens Import
import Dashboard from "./src/screens/Dashboard";

import Docs from "./src/screens/Docs";
import Notifications from "./src/screens/Notifications";
import Contacts from "./src/screens/Contacts";
import GetStarted from "./src/screens/GetStarted";
import Login from "./src/screens/Login";
import OtpVerification from "./src/screens/OtpVerification";
//
const Tab = createMaterialBottomTabNavigator();
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

const StackNavigation = (state) => {
  return (
    <NativeBaseProvider usetheme={theme}>
      <NavigationContainer>
        <Stack.Navigator
          screenOptions={{ headerShown: false }}
          initialRouteName="GetStarted"
        >
          <Stack.Screen name="Get Started" component={GetStarted} />

          <>
            <Stack.Screen name="Login" component={Login} />
            <Stack.Screen name="OtpVerification" component={OtpVerification} />
            <Stack.Screen name="TabNavigation" component={TabNavigation} />
          </>
        </Stack.Navigator>
      </NavigationContainer>
    </NativeBaseProvider>
  );
};
const TabNavigation = () => {
  return (
    <NativeBaseProvider usetheme={theme}>
      <Tab.Navigator
        // initialRouteName="Home"
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
              <Icon name="alert-circle" size={20} />
            ),
          }}
        />
        <Tab.Screen
          name="Docs"
          component={Docs}
          options={{
            tabBarLabel: "Docs",
            tabBarIcon: ({ size }) => <Icon name="alert-circle" size={20} />,
          }}
        />
        <Tab.Screen
          name="Notifications"
          component={Notifications}
          options={{
            tabBarLabel: "Notification",

            tabBarIcon: ({ color, size }) => (
              <Icon name="alert-circle" size={20} />
            ),
          }}
        />
        <Tab.Screen
          name="Contacts"
          component={Contacts}
          options={{
            tabBarLabel: "Contacts",
            tabBarIcon: ({ color, size }) => (
              <Icon name="alert-circle" size={20} />
            ),
          }}
        />
      </Tab.Navigator>
    </NativeBaseProvider>
  );
};

export default function App() {
  return (
    <>
      <StackNavigation>
        <StackNavigation />
        {/* <TabNavigation /> */}
      </StackNavigation>
    </>
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
