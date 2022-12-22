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
import Icons from "react-native-vector-icons/MaterialCommunityIcons";
const TruckBox = (props) => {
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
            <Text fontSize={24} color={props.btnColor}>
              {props.number}
            </Text>
            <Text fontSize={16} bold>
              {props.name}
            </Text>
            {/* <Box height={7} backgroundColor={"blue.300"} borderRadius="16" mx="12">
              <Button onPress={props.fn} pl="3" pr="3" pt="1">
                 <Icon name="arrow-right"></Icon>
              </Button>
            </Box> */}
          </VStack>
        </Box>

        <Box height={7} backgroundColor={"blue.300"} borderRadius="16" mx="12">
          <Text onPress={props.fn} pl="2" pr="3" pt="1">
            View All <Icon name="arrow-right"></Icon>
          </Text>
        </Box>
      </HStack>
    </Box>
  );
};

export default TruckBox;
