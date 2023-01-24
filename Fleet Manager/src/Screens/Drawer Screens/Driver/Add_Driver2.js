import React from "react";
import {
  Box,
  Text,
  Center,
  Input,
  Button,
  Select,
  FormControl,
  HStack,
  ScrollView,
} from "native-base";
import { useNavigation } from "@react-navigation/native";
import InputBox from "../../../../Component/Drawer/InputBox";

import { useState } from "react";
import DateSelectors from "../../../../Component/DateSelector";
const Add_Driver2 = () => {
  const [service, setService] = React.useState("");
  const navigation = useNavigation({});
  return (
    <Box safeArea>
      <Box background="#0058DB" padding="3">
        <Center>
          <Text fontSize="xl" color="white" mx={["110px"]}>
            Add Driver
          </Text>
        </Center>
      </Box>
      <ScrollView>
        <Box my="6">
          <Box mx="5" my="2">
            <Text bold>ID Card Type </Text>
            <Select
              accessibilityLabel="Choose Service"
              placeholder="Select"
              fontSize="md"
              borderColor="black"
              borderRadius="lg"
              _selectedItem={{
                bg: "teal.600",
              }}
              mt={1}
              onValueChange={(itemValue) => setService(itemValue)}
            >
              <Select.Item label="Passport" value="web" />
              <Select.Item label="Election card" value="web" />
              <Select.Item label="Aadhar card" value="web" />
            </Select>
          </Box>
          <InputBox title="ID Card Number" placeholder="99SDxxx" />
          <InputBox title="License Number " placeholder="John Doe" />
          <InputBox title="License Issue State " placeholder="John Doe" />
          {/* <InputBox title="Lincense Issue Date" placeholder="1999" />
        <InputBox title="Lincense Expiry Date" placeholder="1999" /> */}
          <DateSelectors name="License Issue Date" />
          <DateSelectors name="License Expiry Date" />
        </Box>
      </ScrollView>
      <Button
        size="md"
        mx="32"
        my="10"
        onPress={() => navigation.navigate("Add_Driver3")}
      >
        Next
      </Button>
    </Box>
  );
};

export default Add_Driver2;
