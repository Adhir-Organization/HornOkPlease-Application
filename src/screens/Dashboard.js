import * as React from "react";
import { Box, VStack, Heading, HStack, ScrollView } from "native-base";

// Importing Components
import HeroCard from "../components/dashboard/HeroCard";
import ShortcutButton from "../components/dashboard/ShortcutButton";
import StatusButton from "../components/dashboard/StatusButton";

export default function Dashboard({ navigation }) {
  const content = {
    shortcutButtons: [
      {
        icon: "address-card",
        title: "License",
        screen: () => navigation.navigate("ScreenName"),
      },
      {
        icon: "rupee-sign",
        title: "Expense Entry",
        screen: () => navigation.navigate("ScreenName"),
      },
      {
        icon: "user",
        title: "Assigned Trip",
        screen: () => navigation.navigate("ScreenName"),
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
        icon: "exclamation",
        color: "red.500",
        screen: () => navigation.navigate("Login"),
      },
    ],
  };

  return (
    <Box flex="1" safeArea background="gray.50">
      <ScrollView>
        {/* Hero Section Rounded */}
        <Box background="blue.500" p={5} borderBottomRadius="3xl">
          <HStack justifyContent="space-between" space={2}>
            {/* Hero Section Card 1 */}
            <HeroCard background="red.200" />

            {/* Hero Section Card 2 */}
            <HeroCard background="red.200" />
          </HStack>
        </Box>

        <Box p={5}>
          {/* Shortcut Section */}
          <Box py={5}>
            <Heading
              size="md"
              letterSpacing={"lg"}
              fontWeight={"medium"}
              mb={3}
            >
              Shortcuts
            </Heading>
            <VStack space={2} alignItems="center" justifyContent="center">
              <ShortcutButton />
              <ShortcutButton />
              <ShortcutButton />
            </VStack>
          </Box>

          {/* Status Section */}
          <Box>
            <Heading
              size="md"
              letterSpacing={"lg"}
              fontWeight={"medium"}
              mb={3}
            >
              Status
            </Heading>

            <HStack justifyContent="space-between" px={2}>
              <StatusButton />
              <StatusButton />
              <StatusButton />
            </HStack>
          </Box>

          {/* 👇 Main Box */}
        </Box>
      </ScrollView>
    </Box>
  );
}
