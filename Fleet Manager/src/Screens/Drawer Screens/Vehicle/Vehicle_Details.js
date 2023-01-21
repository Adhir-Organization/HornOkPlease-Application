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
import VehicleList from "../../../../Component/Drawer/DrawerBox";

const Vehicle_Details = () => { 
  const navigation = useNavigation();

  const available = [
    {
      driverName: "GJ06Ab1122",
      number: "Ashok Layland",
      icon: "truck",
      color: "orange.200",
      btnColor: "orange.400",
      
    },

    {
      driverName: "GJ06Ab1122",
      number: "Ashok Layland",
      icon: "truck",
      color: "orange.200",
      btnColor: "orange.400",
    },
    {
      driverName: "GJ06Ab1122",
      number: "Ashok Layland",
      icon: "truck",
      color: "orange.200",
      btnColor: "orange.400",

    },
    {
      driverName: "GJ06Ab1122",
      number: "Ashok Layland",
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
            <Text fontSize="xl" color="white" mx={["120px"]}>
              Vehicle Details
            </Text>
          </Center>
        </HStack>
      </Box>
      <ScrollView mb="20" mt="5">
        {available.map((available, index) => (
          <VehicleList
            driverName={available.driverName}
            icon={available.icon}
            number={available.number}
            color={available.color}
            btnColor={available.btnColor}
            // screenNavigation={available.screenNavigation}
            key={index}
          />
        ))}
        <Button width="32" mx="auto" marginTop="7" onPress={() => navigation.navigate("Add_Vehicle1")}>
          Add Vehicle
        </Button>
      </ScrollView>
    </Box>
  );
};

export default Vehicle_Details;
