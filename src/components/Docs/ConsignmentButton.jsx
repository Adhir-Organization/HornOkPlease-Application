import React from "react";
import { Linking, TouchableOpacity } from "react-native";
import { Box, Text, HStack, Heading } from "native-base";
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
          <Icon name="file" size={24} color={"blue"} />
          {/* Document Title */}
          <Text fontSize={"lg"}>{props.documentTitle}</Text>
        </Box>
        <Box>
          <Icon name="camera" size={24} style={{ color: "black" }} />
        </Box>
      </HStack>
    </Box>
  );
}

ConsigmentButton.defaultProps = {
  documentTitle: "Document Title",
};
