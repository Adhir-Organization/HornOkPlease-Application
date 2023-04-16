import * as React from "react";
import {
  Box,
  VStack,
  Heading,
  HStack,
  ScrollView,
  Text,
  Avatar,
  Pressable,
} from "native-base";

// Importing Components
import HeroCard from "../components/dashboard/HeroCard";
import ShortcutButton from "../components/dashboard/ShortcutButton";
import StatusButton from "../components/dashboard/StatusButton";
import MaintenanceFAB from "../components/dashboard/MaintenanceFAB";
import AssignedTrip from "../components/dashboard/AssignedTrip";
import MapViews from "../components/dashboard/MapViews";
import DriverProfile from "./DriverProfile";
import { useState } from "react";
// Importing Icons

export default function Dashboard({ navigation }) {
  const [activeStatus, setActiveStatus] = useState();
  const content = {
    shortcutButtons: [
      {
        index: 2,
        icon: "application-edit-outline",
        title: "Expense Entry",
        screen: "ExpenseEntry",
      },
    ],
    statusButtons: [
      {
        icon: "wind",
        color: "green.500",
        screen: () => navigation.navigate("Login"),
      },
      {
        icon: "truck",
        color: "yellow.500",
        screen: () => navigation.navigate("Login"),
      },
      {
        icon: "alert-triangle",
        color: "red.500",
        screen: () => navigation.navigate("Login"),
      },
    ],
  };

  return (
    <Box flex="1" safeArea background="white">
      {/* Hero Section Rounded */}
      <ScrollView>
        <Box background="blue.500" p={5} borderBottomRadius="3xl" h={"24"}>
          {/* <Pressable
              p="2"
              borderWidth="1"
              onPress={() => {
                navigation.navigate("DriverProfile");
              }}
              w={"full"}
            >
              <Avatar
                bg="cyan.500"
                source={{
                  uri: "https://images.unsplash.com/photo-1603415526960-f7e0328c63b1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",
                }}
              />
            </Pressable> */}
          <HStack space={"1/2"}>
            <VStack>
              <Text fontSize={20} color="white">
                Hello, John
              </Text>
              <Text color="white">134SRA3572</Text>
            </VStack>
            <DriverProfile />
          </HStack>
          {/* <HStack justifyContent="space-between" space={2}> */}
          {/* Hero Section Card 1 */}
          {/* <HeroCard background="red.200" /> */}

          {/* Hero Section Card 2 */}
          {/* <HeroCard background="red.200" /> */}
          {/* </HStack> */}
        </Box>
        <Box mx="10" my="10">
          <MapViews />
        </Box>
        <Box p={5}>
          <Heading size="md" letterSpacing={"lg"} fontWeight={"medium"} mb={5}>
            Status
          </Heading>

          <HStack justifyContent="space-between" px={2}>
            {content.statusButtons.map((statusButtons, index) => (
              <StatusButton
                key={index}
                activeStatus={activeStatus}
                index={index}
                setActiveStatus={setActiveStatus}
                name={statusButtons.icon}
                colors={statusButtons.color}
              />
            ))}
          </HStack>
        </Box>

        <Box px={5}>
          {/* Shortcut Section */}
          <Box py={2}>
            <Heading
              size="md"
              letterSpacing={"lg"}
              fontWeight={"medium"}
              mb={3}
            >
              Shortcuts
            </Heading>
            <VStack space={2} alignItems="center" justifyContent="center">
              {content.shortcutButtons.map((shortcutButtons, index) => (
                <ShortcutButton
                  key={index}
                  iconName={shortcutButtons.icon}
                  names={shortcutButtons.title}
                  nav={shortcutButtons.screen}
                />
              ))}
              <AssignedTrip />
            </VStack>
          </Box>

          {/* 👇 Main Box */}
        </Box>
      </ScrollView>
      {/* Status Section */}

      {/* 🔘 Floating Action Button - Maintenance */}
      <MaintenanceFAB />
    </Box>
  );
}
