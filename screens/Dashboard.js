import * as React from "react";
import { Box, VStack, Heading, Text, HStack, ScrollView, IconButton, Button } from "native-base";
/* Importing the FontAwesome5 icon library. */
import Icon from "react-native-vector-icons/FontAwesome5";
import MaterialIcon from "react-native-vector-icons/MaterialCommunityIcons";
import AntIcon from "react-native-vector-icons/AntDesign";
import FontAwesomeIcon from "react-native-vector-icons/FontAwesome";
import SimpleIcon from "react-native-vector-icons/SimpleLineIcons";

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
        title: "Profile",
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
    // TODO: Create Navbar component
    // <Navbar />
    <Box flex="1">
      <Box background="#0058DB" py={10} p={7} borderBottomLeftRadius="30" borderBottomRightRadius="30">
        <VStack space="5">
          <Box>
            {/* Fetch from API : Name of Driver */}
            <Heading color={"white"} size="lg" mt={8}>
              Hello, John
            </Heading>
            {/* Driver ID: */}
            <Text color={"white"}>1BSR23134S</Text>
          </Box>
          <HStack space={5} alignItems="stretch" justifyContent="center">
            {/* Block 1 */}
            <VStack background="#FFE1E1" w={"40"} p="3" borderRadius="15">
              <Box>
                <Icon name="rupee-sign" size={27} />
                <Text fontSize="lg" mt={2} fontWeight="semibold">
                  On-road Expense
                </Text>
                <Text fontSize="sm" mt={-1}>
                  Current Trip
                </Text>
              </Box>
              <Box>
                {/* Amount */}
                <Text fontSize="2xl" color={"#FF3838"} fontWeight="bold" mt={"2"}>
                  40,000
                </Text>
              </Box>
            </VStack>

            {/*Block 2 */}
            <VStack background="#D4FFE5" w={"40"} p="3" borderRadius="15">
              <Box>
                <Icon name="tools" size={27} />
                <Text fontSize="lg" mt={2} fontWeight="semibold">
                  Workshop
                </Text>
                <Text fontSize="sm" mt={-1}>
                  Repaired
                </Text>
              </Box>
              <Box>
                {/* Amount */}
                <Text fontSize="2xl" color={"#41AD0E"} fontWeight="bold" mt={"2"}>
                  975
                </Text>
              </Box>
            </VStack>
          </HStack>
        </VStack>
      </Box>

      <ScrollView>
        <Box px={7} py={4}>
          <VStack space="5">
            <Box>
              <Heading size="lg">Shortcuts</Heading>
            </Box>
            <VStack space={2} alignItems="center" justifyContent="center">
              {content.shortcutButtons.map((btn, index) => (
                <Button onPress={btn.screen} p="3" w="full" key={index} background={"#D5E6FF"} rounded="md" justifyContent={"flex-start"}>
                  <HStack alignItems="flex-start" justifyItems={"center"}>
                    <Box background={"#0058DB"} h={10} w={10} rounded="full" justifyContent={"center"} alignItems={"center"}>
                      <Icon name={btn.icon} color={"white"} size={20} />
                    </Box>
                    <Heading size="md" alignSelf={"center"} color={"#0058DB"} ml={2}>
                      {btn.title}
                    </Heading>
                  </HStack>
                </Button>
              ))}
            </VStack>
          </VStack>
        </Box>

        <Box px={7} py={4}>
          <VStack space="3">
            <Box>
              <Heading size="lg">Trip</Heading>
            </Box>
            <VStack space={2} alignItems="center" justifyContent="center">
              <HStack background={"#0058DB"} w="full" justifyContent={"center"} rounded={"lg"} p="3">
                <Icon name="plus" color={"white"} size={20} />
                <Heading size="md" color={"white"} ml={2}>
                  Start Trip
                </Heading>
              </HStack>
            </VStack>
          </VStack>
        </Box>

        <Box px={7} py={4}>
          <VStack space="5">
            <Box>
              <Heading size="lg">Status</Heading>
            </Box>
            <HStack space={10} alignItems="center" justifyContent="center">
              {content.statusButtons.map((btn, index) => (
                <IconButton key={index} onPress={btn.screen} icon={<Icon name={btn.icon} color={"white"} size={27} />} variant="unstyled" background={btn.color} rounded="full" h={16} w={16} alignItems="center" justifyContent={"center"}></IconButton>
              ))}
            </HStack>
          </VStack>
        </Box>
      </ScrollView>

      {/* Maintenance report button */}
      {/* <Box position="absolute" bottom={0} right={0} left={0} zIndex={1}>
        <HStack space={2} alignItems="flex-end" justifyContent="flex-end" p={2}>
          <IconButton onPress={() => navigation.navigate("Dashboard")} icon={<Icon name="exclamation-triangle" size={27} color={"#000"} />} variant="unstyled" rounded="full" h={16} w={16} background={"yellow.400"} />
        </HStack>
      </Box> */}

      {/* Bottom Navbar */}
      <Box background={"#B8D4FF"} shadow={"black"}>
        <HStack space={0} alignItems="center" justifyContent="space-around" py={0}>
          <VStack space={0} alignItems="center" justifyContent="center">
            <IconButton onPress={() => navigation.navigate("Dashboard")} icon={<AntIcon name="home" size={27} color={"#000"} />} variant="unstyled" rounded="full" h={16} w={16} />
            <Box mt={-3}>Home</Box>
          </VStack>
          <VStack space={0} alignItems="center" justifyContent="center">
            <IconButton onPress={() => navigation.navigate("Docs")} icon={<AntIcon name="filetext1" size={27} color={"#000"} />} variant="unstyled" rounded="full" h={16} w={16} />
            <Box mt={-3}>Docs</Box>
          </VStack>
          <VStack space={0} alignItems="center" justifyContent="center">
            <IconButton onPress={() => navigation.navigate("Notifications")} icon={<SimpleIcon name="bell" size={27} color={"#000"} />} variant="unstyled" rounded="full" h={16} w={16} />
            <Box mt={-3}>Notifications</Box>
          </VStack>
          <VStack space={0} alignItems="center" justifyContent="center">
            <IconButton onPress={() => navigation.navigate("Profile")} icon={<FontAwesomeIcon name="user-o" size={27} color={"#000"} />} variant="unstyled" rounded="full" h={16} w={16} />
            <Box mt={-3}>Profile</Box>
          </VStack>
        </HStack>
      </Box>
    </Box>
  );
}
