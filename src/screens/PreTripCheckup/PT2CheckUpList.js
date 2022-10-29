import React from 'react'
import Header from "../../components/Header";
import { Box, Text, VStack, Input, Button, ScrollView } from "native-base";

// Importing component(s)
import TruckParts from "../../components/PreTripCheckup/TruckParts";

export default function PT2CheckUpList({ navigation }) {
  const truckParts = [
    {
      index: 1,
      title: "Engine",
    },
    {
      index: 2,
      title: "Fuel System",
    },
    {
      index: 3,
      title: "Air Lines",
    },
    {
      index: 4,
      title: "Battery",
    },
    {
      index: 5,
      title: "Brakes",
    },
    {
      index: 6,
      title: "Clutch",
    },
    {
      index: 7,
      title: "Gear Box",
    },
    {
      index: 8,
      title: "Body",
    },
    {
      index: 9,
      title: "Body",
    },
    {
      index: 10,
      title: "Body",
    },
    {
      index: 11,
      title: "Body",
    },
    {
      index: 12,
      title: "Body",
    },
  ];

  return (
    <Box safeArea>
      <Box background="#E0DCDC" p={5} h={"40"}>
        <VStack space={1}>
          <Text fontSize={20}> Truck ABC12 </Text>
          <Text> Last Performed </Text>
          <Text> John Doe </Text>
          <Text> July 01, 2022 </Text>
        </VStack>
      </Box>
      <ScrollView>
        <Box p={5}>
          <VStack>
            {truckParts.map((truckParts, index) => (
              <TruckParts key={index} title={truckParts.title} />
            ))}
          </VStack>
        </Box>
      </ScrollView>

    </Box>
  )

}
