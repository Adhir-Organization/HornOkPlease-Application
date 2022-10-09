import "react-native-gesture-handler";
import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";
// Packages Import
import { NavigationContainer } from "@react-navigation/native";
import { NativeBaseProvider, extendTheme, useTheme } from "native-base";
import Icon from "react-native-vector-icons/Feather";
import Dashboard from "./Dashboard";

import Docs from "./Docs";
import Notifications from "./Notifications";
import Contacts from "./Contacts";
const Tab = createMaterialBottomTabNavigator();

const TabNavigation = () => {
  return (
    <NativeBaseProvider usetheme={theme}>
      <NavigationContainer>
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
      </NavigationContainer>
    </NativeBaseProvider>
  );
};
