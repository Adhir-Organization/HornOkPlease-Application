import React from "react";
import Header from "../../components/Header";
import {
  Box,
  Text,
  VStack,
  Input,
  Button,
  ScrollView,
  FlatList,
  Heading,
  HStack,
  Spacer,
} from "native-base";

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
    {
      index: 12,
      title: "Body",
    },
    {
      index: 12,
      title: "Body",
    },
    {
      index: 12,
      title: "Body",
    },
    {
      index: 12,
      title: "Body",
    },
    {
      index: 12,
      title: "Body",
    },
    {
      index: 12,
      title: "Body",
    },
    {
      index: 12,
      title: "Body",
    },
    {
      index: 12,
      title: "Body",
    },
  ];

  return (
    <Box mb="10">
      <Heading fontSize="xl" p="4" pb="3">
        Inbox
      </Heading>
      <FlatList
        data={truckParts}
        renderItem={({ item }) => (
          <Box
            flex={1}
            background="#E0DCDC"
            p="2"
            mt="6"
            ml="6"
            mr="6"
            borderRadius="13"
          >
            <HStack space={[2, 3]} justifyContent="space-between">
              <VStack>
                <Text
                  _dark={{
                    color: "warmGray.50",
                  }}
                  color="coolGray.800"
                  bold
                >
                  {item.title}
                </Text>
              </VStack>
              <Spacer />
            </HStack>
          </Box>
        )}
        keyExtractor={(item) => item.id}
      />
    </Box>
  );
}

// <Box safeArea>
//   <Box background="#E0DCDC" p={5} h={"40"}>
//     <VStack space={1}>
//       <Text fontSize={20}> Truck ABC12 </Text>
//       <Text> Last Performed </Text>
//       <Text> John Doe </Text>
//       <Text> July 01, 2022 </Text>
//     </VStack>
//   </Box>
//   <ScrollView>
//     <Box p={5}>
//       <VStack space={2}>
//         {truckParts.map((truckParts, index) => (
//           <TruckParts key={index} title={truckParts.title} />
//         ))}
//       </VStack>
//     </Box>
//   </ScrollView>
// </Box>
//   );
// }
