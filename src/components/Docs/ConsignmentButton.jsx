import React from "react";
import { Linking, TouchableOpacity } from "react-native";
import { Box, Text, HStack, Heading, Pressable } from "native-base";
import Icon from "react-native-vector-icons/Feather";

export default function ConsigmentButton(props) {
  return (
    <Box
      p="3"
      w="full"
      background={"white"}
      borderWidth="1"
      borderColor={"blue.100"}
      rounded="md"
    >
      <HStack justifyContent={"space-between"}>
        <Box flex={1} flexDirection={"row"}>
          {/* Icon */}
          <Icon name="file" size={24} color={"#2871E6"} />
          {/* Document Title */}
          <Text fontSize={"lg"} ml={2}>
            {props.documentTitle}
          </Text>
        </Box>
        <Box>
          <Pressable
            onPress={() => {
              console.log("Pressed");
            }}
          >
            <Icon name="camera" size={24} style={{ color: "black" }} />
          </Pressable>
        </Box>
      </HStack>
    </Box>
  );
}

ConsigmentButton.defaultProps = {
  documentTitle: "Document Title",
};
