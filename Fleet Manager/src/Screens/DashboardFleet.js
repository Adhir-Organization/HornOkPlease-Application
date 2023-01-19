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
  View,
  Avatar,
} from "native-base";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import TruckBox from "../../Component/Dashboard/TruckBox";
import Graph from "../../Component/Dashboard/Graph";
// import AvailableTrucks from "./AvailableTrucks";
import { useNavigation } from "@react-navigation/native";
import Icons from "react-native-vector-icons/MaterialIcons";
import IconT from "react-native-vector-icons/FontAwesome5";
const DashboardFleet = () => {
  const navigation = useNavigation({});

  function Example() {
    return (
      <Box w="10%">
        <Menu
          w="240"
          h="830"
          trigger={(triggerProps) => {
            return (
              <Pressable {...triggerProps}>
                <HamburgerIcon size="8" color="white" />
              </Pressable>
            );
          }}
        >
          <HStack>
            <Avatar
              bg="cyan.500"
              source={{
                uri: "https://images.unsplash.com/photo-1603415526960-f7e0328c63b1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",
              }}
              mx="4"
              my="4"
              size="lg"
            />
            <Text color="blue.600" fontSize="2xl" bold my="8">
              John Doe
            </Text>
          </HStack>
          <Divider w="100%" color={"blue.50"} />
          <Menu.Group>
            <Menu.Item
              onPress={() =>
                navigation.navigate("DrawerNav", { screen: "Vehicle_Details" })
              }
            >
              <Icon name="truck" size={30} color="blue" />
              <Text fontSize="xl">Add Vehicle</Text>
            </Menu.Item>
            <Divider w="100%" />
            <Menu.Item
              onPress={() =>
                navigation.navigate("DrawerNav", { screen: "Add_Driver" })
              }
            >
              <Icons name="person-add-alt" size={30} color="blue" />
              <Text fontSize="xl">Add Driver</Text>
            </Menu.Item>
            <Divider w="100%" />
            <Menu.Item
              onPress={() =>
                navigation.navigate("DrawerNav", { screen: "Driver_Docs" })
              }
            >
              <Icon name="file-document-outline" size={30} color="blue" />
              <Text fontSize="xl">Driver Document</Text>{" "}
            </Menu.Item>
            <Divider w="100%" />
            <Menu.Item
              onPress={() =>
                navigation.navigate("DrawerNav", { screen: "Trips" })
              }
            >
              <IconT name="route" size={30} color="blue" />
              <Text fontSize="xl">Trips</Text>{" "}
            </Menu.Item>
            <Divider w="100%" />
            <Menu.Item
              onPress={() =>
                navigation.navigate("DrawerNav", { screen: "Maintenance" })
              }
            >
              <Icons name="miscellaneous-services" size={30} color="blue" />
              <Text fontSize="xl">Maintenance</Text>
            </Menu.Item>
            <Divider w="100%" />
            <Menu.Item
              onPress={() =>
                navigation.navigate("DrawerNav", { screen: "Add_Contact" })
              }
            >
              <Icons name="contact-phone" size={30} color="blue" />
              <Text fontSize="xl">Add Contact</Text>{" "}
            </Menu.Item>
            <Divider w="100%" />
            <Menu.Item
              onPress={() =>
                navigation.navigate("DrawerNav", { screen: "Add_Contact" })
              }
            >
              <Icons name="settings" size={30} color="blue" />
              <Text fontSize="xl">Settings</Text>{" "}
            </Menu.Item>
            <Menu.Item>
              <Button mx="12" my="10" w="20">
                Logout
              </Button>
            </Menu.Item>
          </Menu.Group>
        </Menu>
      </Box>
    );
  }

  return (
    <Box safeArea>
      <Box background="#0058DB" padding="3">
        <HStack>
          <Example />
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
          <HStack mx="auto" space="7" display="flex" flexDirection="row">
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
              <Text
                fontWeight="extrabold"
                borderRadius="2xl"
                px="3"
                bg="#0ACFCF"
                mt="4"
              >
                View Details
              </Text>
            </Button>
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
              <Text
                fontWeight="extrabold"
                borderRadius="2xl"
                px="3"
                bg="#0ACFCF"
                mt="4"
              >
                View Details
              </Text>
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
