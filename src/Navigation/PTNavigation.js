import {
    createStackNavigator,
   
  } from "@react-navigation/stack";
import { SafeAreaFrameContext, SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import PT1StartCheck from "../screens/PreTripCheckup/PT1StartCheck"
  export default function PTNavigation () {
      const Stack = createStackNavigator();
    
    return (
      <SafeAreaProvider>

        <Stack.Navigator
        screenOptions={{
          headerShown: true,
          headerStyle: {
            
            backgroundColor:"#0058DB"
          }
          
        }}>
          <Stack.Screen name="PT1StartCheck" component={PT1StartCheck} />
        </Stack.Navigator>
      
          </SafeAreaProvider>
    );
  };

   