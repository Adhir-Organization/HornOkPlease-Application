import { Box, Text, HStack, Pressable } from "native-base";
import { DateTimePickerAndroid } from "@react-native-community/datetimepicker";

import { useState } from "react";
import Icon from "react-native-vector-icons/Feather";

export default function DateSelector(params) {
  const [date, setDate] = useState(new Date());

  const onChange = (selectedDate) => {
    const currentDate = selectedDate;
    setDate(currentDate);
  };

  const showMode = () => {
    DateTimePickerAndroid.open({
      value: date,
      onChange: { onChange },
      is24Hour: true,
    });
  };

  const showDatepicker = () => {
    showMode();
  };
  return (
    <>
      <Pressable
        onPress={() => {
          showDatepicker();
        }}
      >
        <Icon name={"calendar"} size={24} />
      </Pressable>
    </>
  );
}
