import React from "react";
import { Box, Text, Center, Input, Button, FormControl } from "native-base";
import { useNavigation } from "@react-navigation/native";
export default function InputBox(props) {
  return (
    <FormControl isRequired isInvalid>
      <Box mx="5" my="2">
        <FormControl.Label bold>{props.title}</FormControl.Label>
        <Input
          placeholder={props.placeholder}
          borderColor="black"
          borderRadius="lg"
          keyboardType={props.type}
        />
      </Box>
    </FormControl>
  );
}
