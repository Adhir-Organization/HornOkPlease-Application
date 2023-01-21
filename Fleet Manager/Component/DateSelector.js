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
import React from "react";
import DateSelector from "../../src/components/maintenance/DateSelector";
import { useState } from "react";
const DateSelectors = (props) => {
  const [todayDate, setTodayDate] = useState();
  const [doneDate, setDoneDate] = useState();
  return (
    <Box mx="5" my="2">
      <FormControl.Label>
        <Text bold color="black">
          {props.name}
        </Text>
      </FormControl.Label>
      <HStack
        justifyContent={"space-between"}
        alignItems={"center"}
        p={3}
        borderWidth="1"
        borderColor={"black"}
        rounded="md"
        w="full"
      >
        <Text fontSize={"xs"}>{todayDate}</Text>
        <DateSelector value={todayDate} onInputValueChange={setTodayDate} />
      </HStack>
    </Box>
  );
};

export default DateSelectors;
