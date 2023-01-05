import "react-native-gesture-handler";

// Packages Import

import { extendTheme, Heading, Text, useTheme } from "native-base";
import {
  createStackNavigator,
  CardStyleInterpolators,
} from "@react-navigation/stack";

// Loading animation

// Screens Import
import Add_Driver from "../Screens/Drawer Screens/Add_Driver";
import Add_Vehicle from "../Screens/Drawer Screens/Add_Vehicle";
import Add_Contact from "../Screens/Drawer Screens/Add_Contact";
import Driver_Docs from "../Screens/Drawer Screens/Driver_Docs";
import Maintenance from "../Screens/Drawer Screens/Maintenance";
import Settings from "../Screens/Drawer Screens/Settings";
import Trips from "../Screens/Drawer Screens/Trips";

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

export default function DrawerNav() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
        cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
      }}
    >
      <Stack.Screen name="Add_Vehicle" component={Add_Vehicle} />
      <Stack.Screen name="Add_Driver" component={Add_Driver} />
      <Stack.Screen name="Driver_Docs" component={Driver_Docs} />
      <Stack.Screen name="Trips" component={Trips} />
      <Stack.Screen name="Maintenance" component={Maintenance} />
      <Stack.Screen name="Add_Contact" component={Add_Contact} />
      <Stack.Screen name="Settings" component={Settings} />
    </Stack.Navigator>
  );
}
