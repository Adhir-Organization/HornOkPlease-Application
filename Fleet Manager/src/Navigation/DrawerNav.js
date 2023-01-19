import "react-native-gesture-handler";

// Packages Import

import { extendTheme, Heading, Text, useTheme } from "native-base";
import {
  createStackNavigator,
  CardStyleInterpolators,
} from "@react-navigation/stack";

// Loading animation

// Screens Import
import Driver_Details from "../Screens/Drawer Screens/Driver_Details";
import Add_Vehicle1 from "../Screens/Drawer Screens/Vehicle/Add_Vehicle1";

import Add_Contact from "../Screens/Drawer Screens/Add_Contact";
import Driver_Docs from "../Screens/Drawer Screens/Driver_Docs";
import Maintenance from "../Screens/Drawer Screens/Maintenance";
import Settings from "../Screens/Drawer Screens/Settings";
import Trips from "../Screens/Drawer Screens/Trips";
import Add_Vehicle2 from "../Screens/Drawer Screens/Vehicle/Add_Vehicle2";
import Vehicle_Details from "../Screens/Drawer Screens/Vehicle/Vehicle_Details";

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
      <Stack.Screen name="Vehicle_Details" component={Vehicle_Details} />
      <Stack.Screen name="Add_Vehicle1" component={Add_Vehicle1} />
      <Stack.Screen name="Add_Vehicle2" component={Add_Vehicle2} />
      <Stack.Screen name="Add_Driver" component={Add_Driver} />
      <Stack.Screen name="Driver_Docs" component={Driver_Docs} />
      <Stack.Screen name="Trips" component={Trips} />
      <Stack.Screen name="Maintenance" component={Maintenance} />
      <Stack.Screen name="Add_Contact" component={Add_Contact} />
      <Stack.Screen name="Settings" component={Settings} />
    </Stack.Navigator>
  );
}
