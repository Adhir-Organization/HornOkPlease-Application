import React from "react";
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
import Header from "../components/Header";
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
        <Header />
        <ScrollView>
          <VStack>
            {data.map((contact, index) => (
              <HeroBox key={index} name={contact.name} number={contact.phone} />
            ))}
          </VStack>
        </ScrollView>
      </VStack>
    </Box>
  );
}
