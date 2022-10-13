import React from "react";
import { Linking, TouchableOpacity } from "react-native";
import {
  Box,
  Text,
  Center,
  ScrollView,
  VStack,
  HStack,
  IconButton,
  Flex,
} from "native-base";
import Icon from "react-native-vector-icons/Ionicons";
export default function Contacts() {
  const Header = () => {
    return <Box background="#0058DB">Contacts</Box>;
  };

  const HeroBox = (props) => {
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
            <VStack>
              <Box w="40">
                <Text fontSize="md" fontWeight="medium" pt={1} paddingLeft={4}>
                  {props.name}
                </Text>
                <Text fontSize="xs" pl={5}>
                  {props.number}
                </Text>
              </Box>
            </VStack>
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
  return (
    <Box safeArea>
      <VStack space={5}>
        <Box background="#0058DB" padding="3">
          <Center>
            <Text fontSize="xl" color="white">
              Contacts
            </Text>
          </Center>
        </Box>
        <ScrollView w={["400", "300"]} h="630">
          <VStack>
            <HeroBox name="Tyre Shop" number={9978352230} />
            <HeroBox name="Supervisor" number={9313826043} />
            <HeroBox name="WorkShop" number={9978352230} />
            <HeroBox name="FleetManager" number={9978352230} />
            <HeroBox name="Maintenance" number={9978352230} />
            <HeroBox name="Supervisor" number={9978352230} />
            <HeroBox name="Supervisor" number={9978352230} />
            <HeroBox name="Supervisor" number={9978352230} />
          </VStack>
        </ScrollView>
      </VStack>
    </Box>
  );
}
