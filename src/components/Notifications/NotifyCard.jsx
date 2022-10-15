import React from "react";
import { Linking, TouchableOpacity } from "react-native";
import { Box, Text, Center, ScrollView, VStack, HStack, IconButton, Flex } from "native-base";
import Icon from "react-native-vector-icons/Ionicons";

export default function HeroBox(props) {
  return (
    <>
      <Box flex={1} background="#E0DCDC" h="16" mt="2" ml="6" mr="6" borderRadius="13">
        <HStack>
          <Box flexDirection="row">
            <Box pt="1">
              <Icon name="person-circle-sharp"
                size={50}
                style={{ color: "#bababa" }} />
            </Box>
            <VStack>
              <Box w="72" flex={1} justifyContent="center" marginLeft="2">
                <Text fontSize="xl" fontWeight="medium">
                  {props.name}
                </Text>
              </Box>
            </VStack>
          </Box>
        </HStack>
      </Box>
 
    </>
  );
}
