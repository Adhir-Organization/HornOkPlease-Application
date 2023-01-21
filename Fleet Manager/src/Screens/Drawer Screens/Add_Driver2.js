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
} from "native-base";
import { useNavigation } from "@react-navigation/native";
import InputBox from "../../../Component/Drawer/InputBox";
import DateSelector from "../../../../src/components/maintenance/DateSelector";
import { useState } from "react";
import DateSelectors from "../../../Component/DateSelector";
const Add_Driver2 = () => {
  const [todayDate, setTodayDate] = useState();
  const [doneDate, setDoneDate] = useState();
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
            <Select.Item label="Direct" value="ux" />
            <Select.Item label="Preventive" value="web" />
          </Select>
        </Box>
        <InputBox title="ID Card Number" placeholder="John Doe" />
        <InputBox title="License Number " placeholder="John Doe" />
        <InputBox title="License Issue State " placeholder="John Doe" />
        {/* <InputBox title="Lincense Issue Date" placeholder="1999" />
        <InputBox title="Lincense Expiry Date" placeholder="1999" /> */}
        <DateSelectors name="Lincense Issue Date" />
        <DateSelectors name="Lincense Expiry Date" />
      </Box>
      <Button
        size="md"
        mx="32"
        my="10"
        onPress={() => navigation.navigate("Add_Vehicle2")}
      >
        Next
      </Button>
    </Box>
  );
};

export default Add_Driver2;
