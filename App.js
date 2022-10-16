// !IMPORTANT: Do not remove these import
import "react-native-gesture-handler";

// Packages Import
import { NavigationContainer } from "@react-navigation/native";
import { NativeBaseProvider, extendTheme, useTheme } from "native-base";
import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";
import { createStackNavigator } from "@react-navigation/stack";

/* A provider for redux. */
import { Provider, useDispatch, useSelector } from "react-redux";
import store from "./src/store/store";

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
import { login } from "./src/store/authSlice";
import DriverMaintenance from "./src/screens/DriverMaintenance";

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
  const items = useSelector((state) => state.auth);
  console.log(items.isLoggedIn);
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{ headerShown: false }}
        initialRouteName={items.isLoggedIn ? "TabNavigation" : "GetStarted"}
      >
        <Stack.Screen name="GetStarted" component={GetStarted} />
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="OtpVerification" component={OtpVerification} />
        <Stack.Screen name="TabNavigation" component={TabNavigation} />
        <Stack.Screen name="Contacts" component={Contacts} />
        <Stack.Screen name="Notifications" component={Notifications} />
        <Stack.Screen name="ExpenseEntry" component={ExpenseEntry} />
        <Stack.Screen name="DriverMaintenance" component={DriverMaintenance} />
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
      <Provider store={store}>
        <NativeBaseProvider useTheme={theme}>
          <StackNavigation>
            <StackNavigation />
          </StackNavigation>
        </NativeBaseProvider>
      </Provider>
    </>
  );
}
