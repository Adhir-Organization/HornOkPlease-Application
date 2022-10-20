import { createStackNavigator } from "@react-navigation/stack";
import {
  SafeAreaFrameContext,
  SafeAreaProvider,
  SafeAreaView,
} from "react-native-safe-area-context";
import PT1StartCheck from "../screens/PreTripCheckup/PT1StartCheck";
import PT2CheckUpList from "../screens/PreTripCheckup/PT2CheckUpList";
export default function PTNavigation() {
  const Stack = createStackNavigator();

  return (
    <SafeAreaProvider>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
          headerStyle: {
            backgroundColor: "#0058DB",
          },
        }}
      >
        <Stack.Screen name="PT1StartCheck" component={PT1StartCheck} />
        <Stack.Screen name="PT2CheckUpList" component={PT2CheckUpList} />
      </Stack.Navigator>
    </SafeAreaProvider>
  );
}
