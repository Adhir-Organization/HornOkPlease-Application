import React from "react";

import {
  Box,
  Center,
  Text,
  HStack,
  ScrollView,
  Button,
  HamburgerIcon,
} from "native-base";
import Icon from "react-native-vector-icons/EvilIcons";
import TruckBox from "../../Component/Dashboard/TruckBox";
import Graph from "../../Component/Dashboard/Graph";
// import AvailableTrucks from "./AvailableTrucks";
import { useNavigation } from "@react-navigation/native";
import Draw from "../../Component/Dashboard/Draw";

const DashboardFleet = () => {
  const navigation = useNavigation({});
  return (
    <Box safeArea>
      <Box background="#0058DB" padding="3">
        <HStack>
          <HamburgerIcon
            size="8"
            color="white"
            onPress={() => navigation.navigate("DrawerNav")}
          ></HamburgerIcon>
          {/* <Icon name="navicon" size={30} color={"black"} /> */}
          <Center>
            <Text fontSize="xl" color="white" mx="24">
              Dashboard
            </Text>
          </Center>
        </HStack>
      </Box>
      <ScrollView>
        <Box mx="5" my="4">
          <TruckBox
            iconName={"road"}
            number={"10"}
            name={"On-Road"}
            color={"green.200"}
            btnColor={"#279600"}
            fn={() => navigation.navigate("OnroadTrucks")}
          />
          <TruckBox
            iconName={"truck"}
            number={"10"}
            name={"Available"}
            color={"orange.200"}
            btnColor={"orange.500"}
            fn={() => navigation.navigate("AvailableTrucks")}
          />
          <TruckBox
            iconName={"road"}
            number={"10"}
            name={"In-Workshop"}
            color={"#FFBCBC"}
            btnColor={"#FF3E3E"}
            fn={() => navigation.navigate("ExpenseSummary")}
          />
        </Box>
        <Box>
          <Text bold fontSize="24" mx="8">
            Accounts
          </Text>
          <Box borderColor="amber.500" borderWidth="1" mx="4">
            <Graph />
          </Box>
          {/* <HStack space="32" display="flex" flexDirection="row" >
            <Button
              // w="1/2"
              // h="20"
              my="1"
              size="md"
              onPress={() => navigation.navigate("ExpenseSummary")}
              >
              Expense Summary
            </Button>
            <Button size="md">wrdvrd</Button>
          </HStack> */}

          <Button
            width="32"
            mx="auto"
            my="16"
            onPress={() => navigation.navigate("AssignTrip")}
          >
            Assign Trip
          </Button>
        </Box>
      </ScrollView>
      {/* </Stack.Navigator> */}
    </Box>
  );
};

export default DashboardFleet;
