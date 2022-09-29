import * as React from "react";
import { Container, Box, VStack, Heading, Text, HStack } from "native-base";
import Icon from "react-native-vector-icons/FontAwesome5";

export default function Dashboard() {
  return (
    // TODO: Create Navbar component
    //<Navbar />
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
            <VStack background="#FFE1E1" w={"40"} p="5" borderRadius="13">
              <Box>
                <Icon name="rupee-sign" size={30} />
                <Text fontSize="lg" mt={2} fontWeight="semibold">
                  On-road Expense
                </Text>
                <Text fontSize="sm" mt={-1}>
                  Current Trip
                </Text>
              </Box>
              <Box>
                {/* Amount */}
                <Text fontSize="3xl" color={"#FF3838"} fontWeight="bold" mt={"2"}>
                  40,000
                </Text>
              </Box>
            </VStack>

            {/*Block 2 */}
            <VStack background="#D4FFE5" w={"40"} p="5" borderRadius="13">
              <Box>
                <Icon name="tools" size={30} />
                <Text fontSize="lg" mt={2} fontWeight="semibold">
                  Workshop
                </Text>
                <Text fontSize="sm" mt={-1}>
                  Repaired
                </Text>
              </Box>
              <Box>
                {/* Amount */}
                <Text fontSize="3xl" color={"#41AD0E"} fontWeight="bold" mt={"2"}>
                  975
                </Text>
              </Box>
            </VStack>
          </HStack>
        </VStack>
      </Box>
      <Box flex="1" p={7}>
        <VStack space="5">
          <Box>
            <Heading size="xl">Shortcuts</Heading>
          </Box>
          <HStack space={5} alignItems="stretch" justifyContent="center">
            <HStack p="3" flex={1} alignItems="center" background={"#D5E6FF"} rounded="md">
              <Box background={"#0058DB"} h={10} w={10} rounded="full" justifyContent={"center"} alignItems={"center"}>
                <Icon name="rupee-sign" color={"white"} size={20} />
              </Box>
              <Heading size="md" color={"#0058DB"} ml={5}>
                Expense Entry
              </Heading>
            </HStack>
          </HStack>
        </VStack>
      </Box>
    </Box>
  );
}
