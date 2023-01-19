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

const Add_Driver = () => {
  return (
    <Box safeArea>
      <Box background="#0058DB" padding="3">
        <HStack>
          <Center>
            <Text fontSize="xl" color="white" mx={["125px"]}>
              Add Contacts
            </Text>
          </Center>
        </HStack>
      </Box>
      <ScrollView>
        <Box>
          <Text>Deepesh kaala</Text>
          <Text>GJ06AB1234</Text>
          <Button>Available</Button>
        </Box>
      </ScrollView>
    </Box>
  );
};

export default Add_Driver;
