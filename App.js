import * as React from 'react';
import { View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Getstarted from './Component/starter';
import Login from './Component/Login'



const Stack = createNativeStackNavigator();

export default function App(Navigator) {
  return (
    <NavigationContainer>
      <Stack.Navigator>
       
        <Stack.Screen options={{headerShown: false}} name="starter" component={Getstarted}  />
        <Stack.Screen options={{headerShown: true}} name="Login" component={Login}  />
       
      </Stack.Navigator>
    
    </NavigationContainer>
  );
}





