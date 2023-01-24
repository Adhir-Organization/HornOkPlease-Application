import React from "react";
import { Box, Text, Center, Input, Button } from "native-base";
import { useNavigation } from "@react-navigation/native";
export default function InputBox(props) {
  return (
    <Box mx="5" my="2">
      <Text bold>{props.title}</Text>
      <Input
        placeholder={props.placeholder}
        borderColor="black"
        borderRadius="lg"
        keyboardType={props.type}
      />
    </Box>
  );
}
