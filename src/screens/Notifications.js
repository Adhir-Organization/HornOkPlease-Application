import { StyleSheet } from "react-native";
import { Linking, TouchableOpacity } from "react-native";

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
import HeroBox from "../components/contancts/HeroBox";
import NotifyCard from "../components/Notifications/NotifyCard";

export default function Notifications() {
  const data = [
    {
      name: "lorem ipsom 33 ",
    },
    {
      name: "lorem ipsom 34",
    },
    {
      name: "lorem ipsom 35",
    },
  ];
  const data2 =[
    {
      name: "lorem ipsom 36 ",
    },
    {
      name: "lorem ipsom 37",
    },
    {
      name: "lorem ipsom 38",
    },
    {
      name: "lorem ipsom 39",
    },
  ] 
  return (
    <Box safeArea>
      <VStack space={5}>
        <Box background="#0058DB" padding="3">
          <Center>
            <Text fontSize="xl" color="white">
              Notifications
            </Text>
          </Center>
        </Box>
        <ScrollView>
          <VStack>
            <Text  marginLeft={6} fontSize="xl">
              Today
            </Text>
            {data.map((notifications, index) => (
              <NotifyCard name={notifications.name} icon={notifications.icon} key={index} />
            ))}
          </VStack>
          <Text marginTop="8" marginLeft={6} fontSize="xl">
            Yesterday
          </Text>
          {data2.map((notifications, index) => (
              <NotifyCard name={notifications.name} icon={notifications.icon} key={index} />
            ))}
        </ScrollView>
      </VStack>
    </Box>



  );
}

const styles = StyleSheet.create({});
