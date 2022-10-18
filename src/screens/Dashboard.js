import * as React from "react";
import {
  Box,
  VStack,
  Heading,
  HStack,
  ScrollView,
  Text,
  Avatar,
} from "native-base";

// Importing Components
import HeroCard from "../components/dashboard/HeroCard";
import ShortcutButton from "../components/dashboard/ShortcutButton";
import StatusButton from "../components/dashboard/StatusButton";
import MaintenanceFAB from "../components/dashboard/MaintenanceFAB";
import AssignedTrip from "../components/dashboard/AssignedTrip";
// Importing Icons

export default function Dashboard({ navigation }) {
  const content = {
    shortcutButtons: [
      {
        index: 1,
        icon: "card-account-details-outline",
        title: "License",
        screen: "Contacts",
      },
      {
        index: 2,
        icon: "application-edit-outline",
        title: "Expense Entry",
        screen: "Notifications",
      },
      // {
      //   index: 3,
      //   icon: "road",
      //   title: "Assigned Trip",
      //   screen: "Docs",
      // },
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
      <Box background="blue.500" p={5} borderBottomRadius="3xl" h={"72"}>
        <VStack space={1}>
          <Avatar
            bg="cyan.500"
            source={{
              uri: "https://images.unsplash.com/photo-1603415526960-f7e0328c63b1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",
            }}
          >
            TE
          </Avatar>
          <Text fontSize={20} color="white">
            Hello, John
          </Text>
          <Text color="white">134SRA3572</Text>
          <HStack justifyContent="space-between" space={2}>
            {/* Hero Section Card 1 */}
            <HeroCard background="red.200" />

            {/* Hero Section Card 2 */}
            <HeroCard background="red.200" />
          </HStack>
        </VStack>
      </Box>

      <Box p={5}>
        {/* Shortcut Section */}
        <Box py={5}>
          <Heading size="md" letterSpacing={"lg"} fontWeight={"medium"} mb={3}>
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

        {/* Status Section */}
        <Box>
          <Heading size="md" letterSpacing={"lg"} fontWeight={"medium"} mb={3}>
            Status
          </Heading>

          <HStack justifyContent="space-between" px={2}>
            {content.statusButtons.map((statusButtons, index) => (
              <StatusButton
                name={statusButtons.icon}
                colors={statusButtons.color}
              />
            ))}
          </HStack>
        </Box>

        {/* 👇 Main Box */}
      </Box>

      {/* 🔘 Floating Action Button - Maintenance */}
      <MaintenanceFAB />
    </Box>
  );
}
