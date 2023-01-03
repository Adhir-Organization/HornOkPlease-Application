import {
  Box,
  Center,
  Text,
  HStack,
  IconButton,
  VStack,
  Button,
} from "native-base";
import React from "react";

import Icons from "react-native-vector-icons/Ionicons";
const ConsignmentBox = (props) => {
  return (
    <Box mx="3" my="3" backgroundColor="gray.300" borderRadius="9">
      <HStack>
        <IconButton
          icon={
            <Icons name={"document-text-outline"} color={"black"} size={27} />
          }
          variant="unstyled"
          size="16"
        />

        <Box my="3">
          <Text fontSize={24}>{props.truckName}</Text>
        </Box>
      </HStack>
    </Box>
  );
};
export default ConsignmentBox;
