import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";
import Docs from "../screens/Docs";
import Dashboard from "../screens/Dashboard";
import Notifications from "../screens/Notifications";
import Contacts from "../screens/Contacts";
import Icon from "react-native-vector-icons/Feather";

const Tab = createMaterialBottomTabNavigator();

export default function TabNavigation () {
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