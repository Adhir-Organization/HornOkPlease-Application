import {
  Box,
  Center,
  Text,
  HStack,
  IconButton,
  VStack,
  View,
  Button,
  ScrollView,
  FormControl,
  Input,
} from "native-base";
import React from "react";
import { useNavigation } from "@react-navigation/native";
import DrawerBox from "../../../../Component/Drawer/DrawerBox";

const Driver_Details = () => {
  const navigation = useNavigation();

  const available = [
    {
      // screenNavigation: "OnRoadTrucksDetails",
      driverName: "Dipesh Kala",
      number: "GJ06AB1234",
      icon: "road",
      color: "orange.200",
      btnColor: "orange.400",
    },

    {
      // screenNavigation: "OnRoadTrucksDetails",
      driverName: "Ram Pal",
      number: "GJ06AB1234",
      icon: "truck",
      color: "orange.200",
      btnColor: "orange.400",
    },
    {
      // screenNavigation: "OnRoadTrucksDetails",
      driverName: "Raju Gupta",
      number: "GJ06AB1234",
      icon: "truck",
      color: "orange.200",
      btnColor: "orange.400",
    },
    {
      // screenNavigation: "OnRoadTrucksDetails",
      driverName: "John Doe",
      number: "GJ06AB1234",
      icon: "truck",
      color: "orange.200",
      btnColor: "orange.400",
    },
  ];

  return (
    <Box safeArea>
      <Box background="#0058DB" padding="3">
        <HStack>
          <Center>
            <Text fontSize="xl" color="white" mx={["125px"]}>
              Driver Details
            </Text>
          </Center>
        </HStack>
      </Box>
      <ScrollView mb="20" mt="5">
        {available.map((available, index) => (
          <DrawerBox
            driverName={available.driverName}
            icon={available.icon}
            number={available.number}
            color={available.color}
            btnColor={available.btnColor}
            // screenNavigation={available.screenNavigation}
            key={index}
          />
        ))}
        <Button
          width="32"
          mx="auto"
          marginTop="7"
          onPress={() => navigation.navigate("Add_Driver1")}
        >
          Add Driver
        </Button>
      </ScrollView>
    </Box>
  );
};

export default Driver_Details;
