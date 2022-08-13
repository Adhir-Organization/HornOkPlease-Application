// !IMPORTANT: Do not remove these import
import "react-native-gesture-handler";
import { createStackNavigator } from '@react-navigation/stack'
import { NavigationContainer, DefaultTheme } from '@react-navigation/native'
import { Provider as PaperProvider } from "react-native-paper";


import GetStarted from './components/GetStarted'
import Login from './components/Login'
import Otpver from './components/Otpver'

// Other Import
// import Navigator from "./routes/homeStack";

const Stack = createStackNavigator()

export default function App() {
    return (
        <PaperProvider>
            <NavigationContainer>
                <Stack.Navigator screenOptions={{ headerShown: false }} initialRouteName="Home">
                    <Stack.Screen name="Get Started" component={GetStarted} />
                    <Stack.Screen name="Login" component={Login} />
                    <Stack.Screen name="Otpver" component={Otpver} />
                </Stack.Navigator>
            </NavigationContainer>
        </PaperProvider>
    )
}
