import React from "react";

import {
  Box,
  Center,
  Text,
  HStack,
  ScrollView,
  Button,
  HamburgerIcon,
  NativeBaseProvider,
  Menu,
  Divider,
  Pressable,
  View
} from "native-base";
import Icon from "react-native-vector-icons/EvilIcons";
import TruckBox from "../../Component/Dashboard/TruckBox";
import Graph from "../../Component/Dashboard/Graph";
// import AvailableTrucks from "./AvailableTrucks";
import { useNavigation } from "@react-navigation/native";
import Draw from "../../Component/Dashboard/Draw";

const DashboardFleet = () => {
  const navigation = useNavigation({});

  function Example() {
    return <Box w="100%">
      <Menu w="440" h="735" trigger={triggerProps => {
        return <Pressable {...triggerProps}>
          <HamburgerIcon size="8" />
        </Pressable>;
      }}>
        <Menu.Group title="Free">
          <Menu.Item>vehicle</Menu.Item>
          <Menu.Item>driver</Menu.Item>
          <Menu.Item>driver document</Menu.Item>
          <Menu.Item>driver document</Menu.Item>
          <Menu.Item>driver document</Menu.Item>
          <Menu.Item>driver document</Menu.Item>

        </Menu.Group>
        <Divider mt="3" w="100%" />
        <Menu.Group title="Paid">
          <Menu.Item>SF Pro</Menu.Item>
          <Menu.Item>Helvetica</Menu.Item>
        </Menu.Group>
      </Menu>
    </Box>;
  }


  return (
    <Box safeArea>
      <Box background="#0058DB" padding="3">
        <HStack>
          <HamburgerIcon
            size="8"
            color="white"
            // onPress={() => navigation.navigate( 'Draw' )}
            onPress={() => navigation.navigate("Draw")}
          ></HamburgerIcon>
          {/* <Icon name="navicon" size={30} color={"black"} /> */}
          <Center>
            <Text fontSize="xl" color="white" mx="24">
              Dashboard
            </Text>
          </Center>
        </HStack>
      </Box>

      {/* //hamburger  */}
      <Center py="4" ml="2">
        <Example />
      </Center>
      
      
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
          <HStack mx="auto" space="7" display="flex" flexDirection="row" >
            <Button 
              _text={{
                color: "black",
              }}
              shadow="4"
              backgroundColor="#FFFFFF"
              w="1/3"
              h="32"
              my="8"
              size="md"
              borderRadius="xl"
              onPress={() => navigation.navigate("ExpenseSummary")}
            >
              <Text fontSize="xl">10,000</Text>
              <Text fontSize="xs">Last Month Expense</Text>
              <Text fontWeight="extrabold" borderRadius="2xl" px="3" bg="#0ACFCF" mt="4">View Details</Text>
            </Button >
            <Button
              _text={{
                color: "black",
              }}
              shadow="4"
              backgroundColor="#FFFFFF"
              w="1/3"
              h="32"
              my="8"
              size="md"
              borderRadius="xl"
              onPress={() => navigation.navigate("ExpenseSummary")}
            >
              <Text fontSize="xl">42</Text>
              <Text fontSize="xs">Trips Occurred</Text>
              <Text fontWeight="extrabold" borderRadius="2xl" px="3" bg="#0ACFCF" mt="4">View Details</Text>
            </Button>
          </HStack>

          

          <Button
            marginTop="1"
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
