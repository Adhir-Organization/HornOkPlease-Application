import "react-native-gesture-handler";

// Packages Import
import { NavigationContainer } from "@react-navigation/native";
import { NativeBaseProvider, extendTheme, useTheme } from "native-base";
import {
  createStackNavigator,
  CardStyleInterpolators,
} from "@react-navigation/stack";

/* A provider for redux. */
import { Provider, useDispatch, useSelector } from "react-redux";
import store from "../store/store";

// Screens Import
import TabNavigation from "./TabNavigation";
import Notifications from "../screens/Notifications";
import ExpenseEntry from "../screens/ExpenseEntry";
import Contacts from "../screens/Contacts";
import GetStarted from "../screens/GetStarted";
import Login from "../screens/Login";
import OtpVerification from "../screens/OtpVerification";
import { login } from "../store/authSlice";
import DriverMaintenance from "../screens/DriverMaintenance";
import PTNavigation from "./PTNavigation";
import { SafeAreaProvider } from "react-native-safe-area-context";

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

export default function StackNavigation  () {
  const items = useSelector((state) => state.auth);
  console.log(items.isLoggedIn);
  return (
    <SafeAreaProvider>

    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
          cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
        }}
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
        <Stack.Screen name="PTNavigation" component={PTNavigation} />
      </Stack.Navigator>
    </NavigationContainer>
        </SafeAreaProvider>
  );
};
