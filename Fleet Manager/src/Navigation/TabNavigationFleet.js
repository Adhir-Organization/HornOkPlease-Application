import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";
import DashboardFleet from "../Screens/DashboardFleet";
import LRDocsFleet from "../Screens/LRDocsFleet";
import NotificationFleet from "../Screens/NotificationFleet";
import Icon from "react-native-vector-icons/Feather";
import Add_Vehicle from "../Screens/Drawer Screens/Add_Vehicle";

const Tab = createMaterialBottomTabNavigator();

export default function TabNavigation() {
  return (
    <Tab.Navigator barStyle={{ backgroundColor: "#2871E6" }}>
      <Tab.Screen
        name="DashboardFleet"
        component={DashboardFleet}
        options={{
          tabBarLabel: "Dashboard",
          tabBarIcon: () => <Icon name="home" color="white" size={24} />,
        }}
      />
      <Tab.Screen
        name="LRDocsFleet"
        component={LRDocsFleet}
        options={{
          tabBarLabel: "LRDocs",
          tabBarIcon: () => <Icon name="file" color="white" size={24} />,
        }}
      />
      <Tab.Screen
        name="NotificationFleet"
        component={NotificationFleet}
        options={{
          tabBarLabel: "Notification",
          tabBarIcon: () => <Icon name="bell" color="white" size={24} />,
        }}
      />
      <Tab.Screen
        name="Add_Vehicle"
        component={Add_Vehicle}
        options={{
          tabBarLabel: "Contacts",
          tabBarIcon: () => <Icon name="phone" color="white" size={24} />,
        }}
      />
    </Tab.Navigator>
  );
}
