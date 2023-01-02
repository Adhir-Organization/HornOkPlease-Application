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
import Icon from "react-native-vector-icons/FontAwesome";
import Icons from "react-native-vector-icons/Ionicons";
const AvailableBox = (props) => {
  return (
    <Box
      padding="5"
      mx="3"
      my="3"
      backgroundColor={props.color}
      borderRadius="9"
    >
      <HStack>
        <IconButton
          icon={<Icon name={props.iconName} color={"white"} size={27} />}
          variant="unstyled"
          rounded="full"
          backgroundColor={props.btnColor}
          size="16"
        />

        <Box mx="6">
          <VStack space="1">
            <Text fontSize={24}>{props.truckName}</Text>
            <Text fontSize={16} bold>
              {props.truckId}
            </Text>
          </VStack>
        </Box>
      </HStack>
    </Box>
  );
};
export default AvailableBox;
