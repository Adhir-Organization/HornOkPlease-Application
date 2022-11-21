import { Box, Text, HStack, Pressable } from "native-base";
import { DateTimePickerAndroid } from "@react-native-community/datetimepicker";
import { useState } from "react";
import Icon from "react-native-vector-icons/Feather";

export default function DateSelector() {
  const [date, setDate] = useState(new Date());

  const onChange = (event, selectedDate) => {
    const currentDate = selectedDate;
    setDate(currentDate);
  };

  const showMode = (currentMode) => {
    DateTimePickerAndroid.open({
      value: date,
      onChange,
      mode: currentMode,
      is24Hour: true,
    });
  };

  const showDatepicker = () => {
    showMode("date");
  };
  return (
    <>
      <Box>
        <Text fontSize="sm" pb={2} fontWeight={"semibold"} color={"gray.500"}>
          Select Date
        </Text>

        <HStack
          justifyContent={"space-between"}
          alignItems={"center"}
          p={3}
          borderWidth="1"
          borderColor={"blue.100"}
          rounded="md"
          w="full"
        >
          <Text fontSize={"xs"}>{date.toDateString()}</Text>
          <Pressable
            onPress={() => {
              showDatepicker();
            }}
          >
            <Icon name={"calendar"} size={24} />
          </Pressable>
        </HStack>
      </Box>
    </>
  );
}
