import * as React from "react";
// !IMPORTANT: Do not remove these import
import 'react-native-gesture-handler';
// import { createNativeStackNavigator } from "@react-navigation/native-stack";
// import { View, Text } from "react-native";
// import { NavigationContainer } from "@react-navigation/native";
// import Getstarted from "./Component/starter";
// import Login from "./Component/Login";
// const Stack = createNativeStackNavigator();
import Navigator from './routes/homeStack';

export default function App() {
    return (
        <Navigator />
        // <NavigationContainer>
        //     <Stack.Navigator>
        //         <Stack.Screen options={{ headerShown: false }} name="starter" component={Getstarted} />
        //         <Stack.Screen options={{ headerShown: true }} name="Horn Ok Please" component={Login} />
        //     </Stack.Navigator>
        // </NavigationContainer>
    );
}
