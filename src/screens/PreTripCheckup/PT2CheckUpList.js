import { Box, Text, VStack, Input, Button, ScrollView } from "native-base";

// Importing component(s)
import TruckParts from "../../components/PreTripCheckup/TruckParts";
import { useContext } from "react";
import PreTripContext from "../../context/preTripContext";

export default function PT2CheckUpList({ navigation }) {
  const { parts } = useContext(PreTripContext);
  console.log(typeof parts);
  console.log(parts);

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
          <VStack space={2}>
            {parts.map((part, index) => (
              <TruckParts key={index} data={part} />
            ))}
          </VStack>
        </Box>
      </ScrollView>
    </Box>
  );
}
