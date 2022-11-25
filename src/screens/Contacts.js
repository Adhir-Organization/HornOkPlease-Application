import React from "react";
import { Box, ScrollView, VStack } from "native-base";
import Header from "../components/Header";

import HeroBox from "../components/contacts/HeroBox";
import { FlatList } from "react-native-gesture-handler";
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

  return (
    <Box safeArea h="container">
      <VStack space={5}>
        <Header headerName={"Contacts"} />
        <ScrollView>
          <FlatList
            // {data.map((contact, index) => (
            // <HeroBox key={index} name={contact.name} number={contact.phone} />

            data={data}
            renderItem={({ item }) => (
              <HeroBox name={item.name} number={item.phone} />
            )}
          />
        </ScrollView>
      </VStack>
    </Box>
  );
}
