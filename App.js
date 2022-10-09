// !IMPORTANT: Do not remove these import
import "react-native-gesture-handler";

// Packages Import
import { NavigationContainer } from "@react-navigation/native";
import { NativeBaseProvider, extendTheme, useTheme } from "native-base";

import { createStackNavigator } from "@react-navigation/stack";
import Icon from "react-native-vector-icons/Feather";

// Screens Import
import GetStarted from "./src/screens/GetStarted";
import Login from "./src/screens/Login";
import OtpVerification from "./src/screens/OtpVerification";
//
import TabNavigation from "./src/screens/TabNavigation";

const Stack = createStackNavigator();
const theme = extendTheme({
  colors: {
    customClrs: {
      50: "#2871E6",
    },
  },
  components: {
    Button: {
      defaultProps: {
        colorScheme: "blue",
      },
    },
  },
});

const StackNavigation = (state) => {
  if (state.isLoading) {
    // We haven't finished checking for the token yet
    return <SplashScreen />;
  }
  return (
    <NativeBaseProvider usetheme={theme}>
      <NavigationContainer>
        <Stack.Navigator
          screenOptions={{ headerShown: false }}
          initialRouteName="GetStarted"
        >
          <Stack.Screen name="Get Started" component={GetStarted} />
          {state.userToken == null ? (
            <>
              {/* <Stack.Screen
                name="OtpVerification"
                component={OtpVerification}
              /> */}
              <Stack.Screen
                name="Login"
                component={Login}
                options={{
                  title: "Log In",
                  // When logging out, a pop animation feels intuitive
                  // You can remove this if you want the default 'push' animation
                  animationTypeForReplace: state.isLogout ? "pop" : "push",
                }}
              />
            </>
          ) : (
            <>
              {" "}
              <Stack.Screen name="Tab" component={TabNavigation} />
            </>
          )}
        </Stack.Navigator>
      </NavigationContainer>
    </NativeBaseProvider>
  );
};
// const TabNavigation = () => {
//   return (
//     <NativeBaseProvider usetheme={theme}>
//       <NavigationContainer>
//         <Tab.Navigator
//           // initialRouteName="Home"
//           screenOptions={{
//             headerShown: false,
//             //tabBarInActiveBackgroundColor: "#0058DB",
//           }}
//           barStyle={{
//             backgroundColor: "#DCEAFF",
//             paddingBottom: 8,
//           }}
//         >
//           <Tab.Screen
//             name="Home"
//             component={Dashboard}
//             options={{
//               tabBarLabel: "home",
//               tabBarIcon: ({ color, size }) => (
//                 <Icon name="alert-circle" size={20} />
//               ),
//             }}
//           />
//           <Tab.Screen
//             name="Docs"
//             component={Docs}
//             options={{
//               tabBarLabel: "Docs",
//               tabBarIcon: ({ size }) => <Icon name="alert-circle" size={20} />,
//             }}
//           />
//           <Tab.Screen
//             name="Notifications"
//             component={Notifications}
//             options={{
//               tabBarLabel: "Notification",

//               tabBarIcon: ({ color, size }) => (
//                 <Icon name="alert-circle" size={20} />
//               ),
//             }}
//           />
//           <Tab.Screen
//             name="Contacts"
//             component={Contacts}
//             options={{
//               tabBarLabel: "Contacts",
//               tabBarIcon: ({ color, size }) => (
//                 <Icon name="alert-circle" size={20} />
//               ),
//             }}
//           />
//         </Tab.Navigator>
//       </NavigationContainer>
//     </NativeBaseProvider>
//   );
// };

export default function App() {
  return (
    <>
      <StackNavigation>
        <StackNavigation />
        <TabNavigation />
      </StackNavigation>
    </>
  );
}

/**
 *  <Tab.Navigator
          initialRouteName="Home"
          screenOptions={{
            headerShown: false,
            //tabBarInActiveBackgroundColor: "#0058DB",
          }}
          barStyle={{
            backgroundColor: "#DCEAFF",
            paddingBottom: 8,
          }}
        >
          <Tab.Screen
            name="Home"
            component={Dashboard}
            options={{
              tabBarLabel: "home",
              tabBarIcon: ({ color, size }) => (
                <Icon name="md-home-outline" size={25} />
              ),
            }}
          />
          <Tab.Screen
            name="Docs"
            component={Docs}
            options={{
              tabBarLabel: "Docs",
              tabBarIcon: ({ size }) => (
                <Icons name="file-document-outline" size={25} />
              ),
            }}
          />
          <Tab.Screen
            name="Notifications"
            component={Notifications}
            options={{
              tabBarLabel: "Notification",

              tabBarIcon: ({ color, size }) => (
                <Icon name="notifications-outline" size={25} />
              ),
            }}
          />
          <Tab.Screen
            name="Contacts"
            component={Contacts}
            options={{
              tabBarLabel: "Contacts",
              tabBarIcon: ({ color, size }) => (
                <Call name="phone-call" size={25} />
              ),
            }}
          />
        </Tab.Navigator>
 */
