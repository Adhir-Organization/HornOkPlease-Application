// !IMPORTANT: Do not remove these import
import "react-native-gesture-handler";

// Packages Import
import { NavigationContainer } from "@react-navigation/native";
import { NativeBaseProvider, extendTheme, useTheme } from "native-base";
import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";
import { createStackNavigator } from "@react-navigation/stack";
import { BlurView } from "expo-blur";

// Icons import
import Icon from "react-native-vector-icons/Feather";

// Screens Import
import Dashboard from "./src/screens/Dashboard";

import Docs from "./src/screens/Docs";
import Notifications from "./src/screens/Notifications";
import ExpenseEntry from "./src/screens/ExpenseEntry";
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

const StackNavigation = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{ headerShown: false }}
        initialRouteName="GetStarted"
      >
        <>
          <Stack.Screen name="Contacts" component={Contacts} />
          <Stack.Screen name="Notifications" component={Notifications} />
          <Stack.Screen name="ExpenseEntry" component={ExpenseEntry} />
          <Stack.Screen name="GetStarted" component={GetStarted} />
          <Stack.Screen name="Login" component={Login} />
          <Stack.Screen name="OtpVerification" component={OtpVerification} />
          <Stack.Screen name="TabNavigation" component={TabNavigation} />
        </>
      </Stack.Navigator>
    </NavigationContainer>
  );
};
const TabNavigation = () => {
  return (
    <Tab.Navigator
      barStyle={{
        backgroundColor: "#deecff",
        paddingVertical: 5,
        borderRadius: 10,
      }}
    >
      <Tab.Screen
        name="Home"
        component={Dashboard}
        options={{
          tabBarLabel: "Home",
          tabBarIcon: () => <Icon name="home" size={24} />,
        }}
      />
      <Tab.Screen
        name="Docs"
        component={Docs}
        options={{
          tabBarLabel: "Docs",
          tabBarIcon: () => <Icon name="file" size={24} />,
        }}
      />
      <Tab.Screen
        name="Notifications"
        component={Notifications}
        options={{
          tabBarLabel: "Notification",

          tabBarIcon: () => <Icon name="bell" size={24} />,
        }}
      />
      <Tab.Screen
        name="Contacts"
        component={Contacts}
        options={{
          tabBarLabel: "Contacts",
          tabBarIcon: () => <Icon name="phone" size={24} />,
        }}
      />
    </Tab.Navigator>
  );
};

export default function App() {
  return (
    <>
      <NativeBaseProvider useTheme={theme}>
        <StackNavigation>
          <StackNavigation />
        </StackNavigation>
      </NativeBaseProvider>
    </>
  );
}
