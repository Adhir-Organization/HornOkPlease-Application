import {
    createStackNavigator,
   
  } from "@react-navigation/stack";
import PT1StartCheck from "../../screens/PreTripCheckup/PT1StartCheck.js"
  export default function PTNavigation () {
      const Stack = createStackNavigator();
    
    return (
        <Stack.Navigator>
          <Stack.Screen name="PT1StartCheck" component={PT1StartCheck} />
        </Stack.Navigator>
      
    );
  };

  