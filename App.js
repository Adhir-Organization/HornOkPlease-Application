// !IMPORTANT: Do not remove these import
import "react-native-gesture-handler";
import { createStackNavigator } from '@react-navigation/stack'
import { NavigationContainer, DefaultTheme } from '@react-navigation/native'
import { Provider as PaperProvider } from "react-native-paper";


import GetStarted from './screens/getStarted'
import Login from './screens/login'
// import Otpver from './screen/Otpver'
import Dashboard from './screens/dashboard'

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
                    {/* <Stack.Screen name="Otpver" component={Otpver} /> */}
                    <Stack.Screen name="Dashboard" component={Dashboard} />
                </Stack.Navigator>
            </NavigationContainer>
        </PaperProvider>
    )
}
