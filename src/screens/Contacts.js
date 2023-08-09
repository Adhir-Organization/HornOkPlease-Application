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
import HeroBox from "../components/contacts/HeroBox";
export default function Contacts() {
  const data = [
    {
      name: "Tyre",
      phone: "9978352230",
    },
    {
      name: "Supervisor",
      phone: "9313826043",
    },
    {
      name: "WorkShop",
      phone: "9978352230",
    },
    {
      name: "FleetManager",
      phone: "9978352230",
    },
    {
      name: "Maintenance",
      phone: "9978352230",
    },
    {
      name: "Supervisor",
      phone: "9978352230",
    },
    {
      name: "Supervisor",
      phone: "9978352230",
    },
    {
      name: "Supervisor",
      phone: "9978352230",
    },
    {
      name: "Supervisor",
      phone: "9978352230",
    },
  ];
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
        <ScrollView h={650}>
          <VStack>
            {data.map((contact, index) => (
              <HeroBox name={contact.name} number={contact.phone} />
            ))}
          </VStack>
        </ScrollView>
      </VStack>
    </Box>
  );
}
