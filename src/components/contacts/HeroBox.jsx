import React from "react";
import { Linking, TouchableOpacity } from "react-native";
import {
  Box,
  Text,
 
  HStack,
 
} from "native-base";
import Icon from "react-native-vector-icons/Ionicons";

export default function HeroBox  (props) {
    return (
      <Box
        flex={1}
        background="#E0DCDC"
        p="2"
        mt="6"
        ml="6"
        mr="6"
        borderRadius="13"
      >
        <HStack>
          <Box pt="1">
            <Icon
              name="person-circle-sharp"
              size={50}
              style={{ color: "#FFBE17" }}
            />
          </Box>

          <Box flexDirection="row">
            
              <Box w="40">
                <Text fontSize="md" fontWeight="medium" pt={1} paddingLeft={4}>
                  {props.name}
                </Text>
                <Text fontSize="xs" pl={5}>
                  {props.number}
                </Text>
              </Box>
            
            <TouchableOpacity>
              <Box pl="20" pt="3">
                <Icon
                  name="call-sharp"
                  size={28}
                  onPress={() => {
                    Linking.openURL(`tel:${props.number}`);
                  }}
                />
              </Box>
            </TouchableOpacity>
          </Box>
        </HStack>
      </Box>
    );
  };