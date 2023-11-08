  // import "react-native-gesture-handler";

  // // Packages Import
  // import { NavigationContainer } from "@react-navigation/native";
  // import { extendTheme, Heading, Text, useTheme } from "native-base";
  // import {
  //   createStackNavigator,
  //   CardStyleInterpolators,
  // } from "@react-navigation/stack";

  // // Loading animation
  // import AnimatedLoader from "react-native-animated-loader";

  // // Screens Import
  // import TabNavigation from "./TabNavigation";
  // import Notifications from "../screens/Notifications";
  // import ExpenseEntry from "../screens/ExpenseEntry";
  // import Contacts from "../screens/Contacts";
  // import GetStarted from "../screens/GetStarted";
  // import Login from "../screens/Login";
  // // import OtpVerification from "../screens/OtpVerification";
  // import DriverMaintenance from "../screens/DriverMaintenance";
  // import PTNavigation from "./PTNavigation";
  // import DriverProfile from "../screens/DriverProfile";
  // import MainStackNav from "../../Fleet Manager/src/Navigation/MainStackNav";
  // import { SafeAreaProvider } from "react-native-safe-area-context";
  // import { useEffect, useState } from "react";
  // import AsyncStorage from "@react-native-async-storage/async-storage";
  // import authContext from "../context/authContext";
  // import axios from "axios";
  // import { BASE_URL } from "../../config";
  // import { useSelector } from "react-redux";
  // import OpenRoute from "./AuthProtector/OpenRoute";
  // import { ACCOUNT_TYPE } from "../../utils/constsant";

  // const Stack = createStackNavigator();
  // const theme = extendTheme({
  //   colors: {
  //     customClrs: {
  //       50: "#2871E6",
  //     },
  //   },
  //   components: {
  //     Button: {
  //       defaultProps: {
  //         colorScheme: "blue",
  //       },
  //     },
  //   },
  // });

  // export default function StackNavigation() {

  //   const { user } = useSelector(state => state.auth);
  //   const { token } = useSelector(state => state.auth);

  //   // if (loading) {
  //   //   return (
  //   //     <>
  //   //       <AnimatedLoader
  //   //         visible={loading}
  //   //         overlayColor="rgba(255,255,255,0.75)"
  //   //         // change animation from here : https://lottiefiles.com/98915-loader
  //   //         source={require("../../assets/animation/loader.json")}
  //   //         animationStyle={{
  //   //           width: 300,
  //   //           height: 300,
  //   //         }}
  //   //         speed={1}
  //   //       >
  //   //         {/* <Text>Please wait...</Text> */}
  //   //       </AnimatedLoader>
  //   //     </>
  //   //   );
  //   // }

  //   return (
  //     // <authContext.Provider >
  //     <SafeAreaProvider>
  //       <NavigationContainer>
  //         <Stack.Navigator
  //           screenOptions={{
  //             headerShown: false,
  //             cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
  //           }}
  //           initialRouteName={"GetStarted"}
  //         >

  //           <>
  //             < Stack.Screen
  //               name="GetStarted"
  //               component={GetStarted}
  //             />
  //             <Stack.Screen
  //               name="Login"
  //               component={Login} />

  //           </>

  //           <>
  //             {
  //               user.accountType === ACCOUNT_TYPE.FLEETMANAGER && token && (
  //                 <>
  //                   <Stack.Screen
  //                     name="MainStackNav"
  //                     component={MainStackNav}
  //                   />

  //                   <Stack.Screen
  //                     name="TabNavigation"
  //                     component={TabNavigation} />

  //                   <Stack.Screen
  //                     name="Contacts"
  //                     component={Contacts} />

  //                   <Stack.Screen
  //                     name="Notifications"
  //                     component={Notifications} />

  //                   <Stack.Screen
  //                     name="ExpenseEntry"
  //                     component={ExpenseEntry} />

  //                   <Stack.Screen
  //                     name="DriverMaintenance"
  //                     component={DriverMaintenance}
  //                   />

  //                   <Stack.Screen
  //                     name="PTNavigation"
  //                     component={PTNavigation} />

  //                   <Stack.Screen
  //                     name="DriverProfile"
  //                     component={DriverProfile} />
  //                 </>
  //               )
  //             }
  //           </>
  //         </Stack.Navigator>
  //       </NavigationContainer>
  //     </SafeAreaProvider>
  //     // </authContext.Provider>
  //   );
  // }







// import React from "react";
// import { NavigationContainer } from "@react-navigation/native";
// import { createStackNavigator, CardStyleInterpolators } from "@react-navigation/stack";
// import GetStarted from "../screens/GetStarted";
// import Login from "../screens/Login";
// import MainStackNav from "../../Fleet Manager/src/Navigation/MainStackNav";
// import TabNavigation from "./TabNavigation";
// import Notifications from "../screens/Notifications";
// import ExpenseEntry from "../screens/ExpenseEntry";
// import Contacts from "../screens/Contacts";
// import DriverMaintenance from "../screens/DriverMaintenance";
// import PTNavigation from "./PTNavigation";
// import DriverProfile from "../screens/DriverProfile";
// import { SafeAreaProvider } from "react-native-safe-area-context";
// import { useSelector } from "react-redux";
// import OpenRoute from "./AuthProtector/OpenRoute";
// import { ACCOUNT_TYPE } from "../../utils/constsant";

// const Stack = createStackNavigator();

// export default function StackNavigation() {
//   const { user, token } = useSelector((state) => state.auth);

//   return (
//     <SafeAreaProvider>
//       <NavigationContainer>
//         <Stack.Navigator
//           screenOptions={{
//             headerShown: false,
//             cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
//           }}
//           initialRouteName={"GetStarted"}
//         >
//           <Stack.Screen name="GetStarted" component={GetStarted} />
//           <Stack.Screen name="Login" component={Login} />

//           {user && token && user.accountType === ACCOUNT_TYPE.FLEETMANAGER && (
//             <>
//               <Stack.Screen name="MainStackNav" component={MainStackNav} />
//               <Stack.Screen name="TabNavigation" component={TabNavigation} />
//               <Stack.Screen name="Contacts" component={Contacts} />
//               <Stack.Screen name="Notifications" component={Notifications} />
//               <Stack.Screen name="ExpenseEntry" component={ExpenseEntry} />
//               <Stack.Screen name="DriverMaintenance" component={DriverMaintenance} />
//               <Stack.Screen name="PTNavigation" component={PTNavigation} />
//               <Stack.Screen name="DriverProfile" component={DriverProfile} />
//             </>
//           )}
//         </Stack.Navigator>
//       </NavigationContainer>
//     </SafeAreaProvider>
//   );
// }


import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator, CardStyleInterpolators } from "@react-navigation/stack";
import GetStarted from "../screens/GetStarted";
import Login from "../screens/Login";
import MainStackNav from "../../Fleet Manager/src/Navigation/MainStackNav";
import TabNavigation from "./TabNavigation";
import Notifications from "../screens/Notifications";
import ExpenseEntry from "../screens/ExpenseEntry";
import Contacts from "../screens/Contacts";
import DriverMaintenance from "../screens/DriverMaintenance";
import PTNavigation from "./PTNavigation";
import DriverProfile from "../screens/DriverProfile";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { useSelector } from "react-redux";
import OpenRoute from "./AuthProtector/OpenRoute";
import { ACCOUNT_TYPE } from "../../utils/constsant";

const Stack = createStackNavigator();

export default function StackNavigation() {
  const { user, token } = useSelector((state) => state.auth);

  return (
    <SafeAreaProvider>
      <NavigationContainer>
        <Stack.Navigator
          screenOptions={{
            headerShown: false,
            cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
          }}
          initialRouteName={"GetStarted"}
        >
          <Stack.Screen name="GetStarted" component={GetStarted} />
          <Stack.Screen name="Login" component={Login} />

          {user && token && user.accountType === ACCOUNT_TYPE.FLEETMANAGER && (
            <>
              <Stack.Screen name="MainStackNav" component={MainStackNav} />
              <Stack.Screen name="TabNavigation" component={TabNavigation} />
              <Stack.Screen name="Contacts" component={Contacts} />
              <Stack.Screen name="Notifications" component={Notifications} />
              <Stack.Screen name="ExpenseEntry" component={ExpenseEntry} />
              <Stack.Screen name="DriverMaintenance" component={DriverMaintenance} />
              <Stack.Screen name="PTNavigation" component={PTNavigation} />
              <Stack.Screen name="DriverProfile" component={DriverProfile} />
            </>
          )}
        </Stack.Navigator>
      </NavigationContainer>
    </SafeAreaProvider>
  );
}
