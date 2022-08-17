// !IMPORTANT: Do not remove these import
import "react-native-gesture-handler";
import { createStackNavigator, CardStyleInterpolators } from "@react-navigation/stack";
import { NavigationContainer, DefaultTheme } from "@react-navigation/native";
import { Provider as PaperProvider } from "react-native-paper";

import GetStarted from "./screens/GetStarted";
import Login from "./screens/Login";
import Dashboard from "./screens/Dashboard";
import OtpVerification from "./screens/OtpVerification";


const Stack = createStackNavigator();

export default function App() {
    return (
        <PaperProvider>
            <NavigationContainer>
                <Stack.Navigator screenOptions={{ headerShown: false, cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS }} initialRouteName="Home">
                    <Stack.Screen name="Get Started" component={GetStarted} />
                    <Stack.Screen name="Login" component={Login} />
                    <Stack.Screen name="Login" component={OtpVerification} />

                    <Stack.Screen name="Dashboard" component={Dashboard} />
                </Stack.Navigator>
            </NavigationContainer>
        </PaperProvider>
    );
}
