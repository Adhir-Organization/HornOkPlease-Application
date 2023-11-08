import { createStackNavigator } from "@react-navigation/stack";
import { StatusBar } from "native-base";
import { useEffect, useState } from "react";
import PT1StartCheck from "../screens/PreTripCheckup/PT1StartCheck";
import PT2CheckUpList from "../screens/PreTripCheckup/PT2CheckUpList";
import PT3IndividualCheckup from "../screens/PreTripCheckup/PT3IndividualCheckup";
import PreTripContext from "../context/preTripContext";

export default function PTNavigation() {
  const Stack = createStackNavigator();
  const [parts, setParts] = useState(null);
  const truckParts = [
    {
      name: "Engine",
      status: false,
    },
    {
      name: "Fuel System",
      status: true,
    },
    {
      name: "Air Lines",
      status: false,
    },
    {
      name: "Battery",
      status: false,
    },
    {
      name: "Brakes",
      status: false,
    },
    {
      name: "Clutch",
      status: false,
    },
    {
      name: "Gear Box",
      status: false,
    },
    {
      name: "Body",
      status: false,
    },
  ];
  useEffect(() => {
    setParts(truckParts);
    console.log(parts);
  }, []);

  return (
    <>
      <StatusBar backgroundColor="#2871E6" barStyle="light-content" />
      {/* <PreTripContext.Provider value={{ parts, setParts }}> */}
        <Stack.Navigator
          screenOptions={{
            headerShown: true,
            headerStyle: {
              backgroundColor: "#2871E6",
            },
            headerTintColor: "#fff",
          }}
        >
          <Stack.Screen name="PT1StartCheck" component={PT1StartCheck} />
          <Stack.Screen name="PT2CheckUpList" component={PT2CheckUpList} />
          <Stack.Screen
            name="IndividualCheckups"
            component={PT3IndividualCheckup}
          />
        </Stack.Navigator>
      {/* </PreTripContext.Provider> */}
    </>
  );
}
