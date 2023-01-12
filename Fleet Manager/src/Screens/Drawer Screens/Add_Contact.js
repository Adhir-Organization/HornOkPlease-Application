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

const Add_Contact = () => {

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
        <Box p={5}>
          <FormControl isRequired isInvalid>
            <VStack space="5">
              <Box>
                <FormControl.Label>Tyre Shop</FormControl.Label>
                <Input placeholder="Jonhy doe" />
              </Box>
              <Box>
                <FormControl.Label>Supervisor</FormControl.Label>
                <Input placeholder="123456789" />
              </Box>
              <Box>
                <FormControl.Label>Workshop</FormControl.Label>
                <Input placeholder="ABC" />
              </Box>
              <Box>
                <FormControl.Label>Maintenance</FormControl.Label>
                <Input placeholder="ABC" />
              </Box>
              <Box>
                <FormControl.Label>Fleet Manager</FormControl.Label>
                <Input placeholder="ABC" />
              </Box>
            </VStack>
            <Button width="32" mx="auto" marginTop="8">
              Save
            </Button>
          </FormControl>
        </Box>
      </ScrollView>
    </Box>
  );
};

export default Add_Contact;
