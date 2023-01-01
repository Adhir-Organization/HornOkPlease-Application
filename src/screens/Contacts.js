import React from "react";
import { Box, ScrollView, HStack, FlatList, Text, VStack } from "native-base";
import Header from "../components/Header";
import { Linking, TouchableOpacity } from "react-native";
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

  return (
    <Box safeArea h="container">
      <VStack space={5}>
        <Header headerName={"Contacts"} />
        {/* <ScrollView contentContainerStyle={{ margin: 10 }}> */}
        {/* <VStack>
            {data.map((contact, index) => (
              <HeroBox key={index} name={contact.name} number={contact.phone} />
            ))}
          </VStack> */}
        <FlatList
          data={data}
          renderItem={({ item }) => (
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
                    <Text
                      fontSize="md"
                      fontWeight="medium"
                      pt={1}
                      paddingLeft={4}
                    >
                      {item.name}
                    </Text>
                    <Text fontSize="xs" pl={5}>
                      {item.phone}
                    </Text>
                  </Box>

                  <TouchableOpacity>
                    <Box pl="20" pt="3">
                      <Icon
                        name="call-sharp"
                        size={28}
                        // onPress={() => {
                        //   Linking.openURL(`tel:${item.phone}`);
                        // }}
                      />
                    </Box>
                  </TouchableOpacity>
                </Box>
              </HStack>
            </Box>
          )}
        ></FlatList>
        {/* </ScrollView> */}
      </VStack>
    </Box>
  );
}
