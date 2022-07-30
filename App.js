import * as React from 'react';
import { View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Getstarted from '../HornOkPlease/Component/Getstarted';
const Stack = createNativeStackNavigator();




export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
       
        <Stack.Screen name="Getstart" component={Getstarted} />
      </Stack.Navigator>
    
    </NavigationContainer>
  );
}





