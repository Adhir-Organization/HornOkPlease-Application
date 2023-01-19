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

export default function Driver_Details() {
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
      <ScrollView>
        <Box>
          <Text>Deepesh kaala</Text>
          <Text>GJ06AB1234</Text>
          <Box height={7} width="1/4" backgroundColor={"blue.300"} borderRadius="16">
            <Text mx="auto" pt="1">
              Available
            </Text>
          </Box>
        </Box>
      </ScrollView>
  
    </Box>
  );
}

