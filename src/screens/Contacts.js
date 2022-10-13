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
import HeroBox from "../components/contancts/HeroBox";
export default function Contacts() {
  const Header = () => {
    return <Box background="#0058DB">Contacts</Box>;
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
