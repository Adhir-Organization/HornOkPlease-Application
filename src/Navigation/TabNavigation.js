import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";
import Docs from "../screens/Docs";
import Dashboard from "../screens/Dashboard";
import Notifications from "../screens/Notifications";
import Contacts from "../screens/Contacts";
import Icon from "react-native-vector-icons/Feather";
// import ChatRoom from "../screens/ChatRoom";

const Tab = createMaterialBottomTabNavigator();

export default function TabNavigation() {
  return (
    <Tab.Navigator barStyle={{ backgroundColor: "#2871E6" }}>
      <Tab.Screen
        name="Home"
        component={Dashboard}
        options={{
          tabBarLabel: "Home",
          tabBarIcon: () => <Icon name="home" color="white" size={24} />,
        }}
      />
      <Tab.Screen
        name="Docs"
        component={Docs}
        options={{
          tabBarLabel: "Docs",
          tabBarIcon: () => <Icon name="file" color="white" size={24} />,
        }}
      />
      <Tab.Screen
        name="Notifications"
        component={Notifications}
        options={{
          tabBarLabel: "Notification",
          tabBarIcon: () => <Icon name="bell" color="white" size={24} />,
        }}
      />
      {/* <Tab.Screen
        name="Message"
        component={ChatRoom}
        options={{
          tabBarLabel: "Message",
          tabBarIcon: () => <Icon name="send" color="white" size={24} />,
        }} */}
    </Tab.Navigator>
  );
}
