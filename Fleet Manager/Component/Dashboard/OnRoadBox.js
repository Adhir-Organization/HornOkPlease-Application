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
import OnroadTrucks from "../../src/Screens/OnroadTrucks";
import { useNavigation } from "@react-navigation/native";

const OnRoadBox = ({
  truckName,
  truckId,
  icon,
  from,
  to,
  screenNavigation,
  color,
  btnColor,
  update,
}) => {
  const navigation = useNavigation();

  return (
    <Box padding="5" mx="3" my="3" backgroundColor={color} borderRadius="9">
      <HStack>
        <IconButton
          icon={<Icon name={icon} color={"white"} size={27} />}
          variant="unstyled"
          rounded="full"
          backgroundColor={btnColor}
          size="16"
        />
        <Box mx="6">
          <VStack space="1">
            <HStack space="2">
              <Text fontSize={24} mb={-1}>
                {truckName}
              </Text>
              <Text marginTop="2">{update}</Text>
            </HStack>
            <Text fontSize={16} fontWeight="medium">
              {truckId}
            </Text>
          </VStack>
        </Box>
      </HStack>

      <HStack space="32" marginTop={3}>
        <Text fontSize={"lg"}>From: {from}</Text>
        <Text fontSize={"lg"}>To: {to}</Text>
      </HStack>
      <Box >
        <Button 
          mt="4"
          fontSize="xl"
          //   onPress={navigation.navigate(screenNavigation)}
          //   onPress={screenNavigation}
          onPress={() => navigation.navigate(screenNavigation)}
        >
          View Details
        </Button>
      </Box>
    </Box>
  );
};

export default OnRoadBox;
