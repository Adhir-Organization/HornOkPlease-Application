import React from "react";
import { Box, ScrollView, VStack } from "native-base";
import Header from "../components/Header";

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

  return (
    <Box safeArea>
      <VStack space={5}>
        <Header headerName={"Contacts"} />
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
