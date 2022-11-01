import { createStackNavigator } from "@react-navigation/stack";
import PT1StartCheck from "../screens/PreTripCheckup/PT1StartCheck";
import PT2CheckUpList from "../screens/PreTripCheckup/PT2CheckUpList";
export default function PTNavigation() {
  const Stack = createStackNavigator();

  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: true,
        headerStyle: {
          backgroundColor: "#2871E6",
        },
        headerTintColor: "#fff",
      }}
    >
      <Stack.Screen name="PT1StartCheck" component={PT1StartCheck} />
      <Stack.Screen name="PT2CheckUpList" component={PT2CheckUpList} />
    </Stack.Navigator>
  );
}
