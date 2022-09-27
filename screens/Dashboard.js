import * as React from "react";
import { Container, Box, VStack, Heading, Text, HStack } from "native-base";
import Icon from "react-native-vector-icons/FontAwesome5";
export default function Dashboard() {
  return (
    // TODO: Create Navbar component
    //<Navbar />
    <Box flex="1" safeArea>
      <Box
        background="blue.500"
        borderBottomLeftRadius="10"
        borderBottomRightRadius="10"
        p="5"
      >
        <VStack space="5">
          <Box>
            {/* Fetch from API : Name of Driver */}
            <Heading size="lg">Hello, John</Heading>
            {/* Driver ID: */}
            <Text>1BSR23134S</Text>
          </Box>
          <HStack space="3" alignItems="center" justifyContent="space-between">
            {/* Block 1 */}
            <VStack background="red.100" p="3" borderRadius="10">
              <Box>
                <Icon name="rupee-sign" size={20} />
                <Text fontSize="md" fontWeight="semibold">
                  On-road Expense
                </Text>
                <Text fontSize="sm">Current Trip</Text>
              </Box>
              <Box>
                {/* Amount */}
                <Text fontSize="xl" fontWeight="bold">
                  40,000
                </Text>
              </Box>
            </VStack>

            {/*Block 2 */}
            <VStack background="red.100" p="3" borderRadius="10">
              <Box>
                <Icon name="rupee-sign" size={20} />
                <Text fontSize="md" fontWeight="semibold">
                  On-road Expense
                </Text>
                <Text fontSize="sm">Current Trip</Text>
              </Box>
              <Box>
                {/* Amount */}
                <Text fontSize="xl" fontWeight="bold">
                  40,000
                </Text>
              </Box>
            </VStack>
          </HStack>
        </VStack>
      </Box>
    </Box>
  );
export default function Dashboard() {
    return (
        <SafeAreaView style={styles.global}>
            <SafeAreaView style={styles.tripData}>
                <Text style={styles.username}>Hello John</Text>
                <Text style={styles.userid}>13sf4556</Text>
            </SafeAreaView>
            <SafeAreaView style={styles.boxes}>
                <SafeAreaView style={styles.box1}>
                    <Text style={styles.liveData}>On-Road expense</Text>
                    <Text style={styles.CTrip}>Current Trip</Text>
                    <Text style={styles.RoadNumber}>455</Text>
                </SafeAreaView>
                <SafeAreaView style={styles.box2}>
                    <Text style={styles.Workshop}>Workshop</Text>
                    <Text style={styles.WData}>Repaired</Text>
                    <Text style={styles.WorkshopNumber}>0</Text>
                </SafeAreaView>
            </SafeAreaView>
            <SafeAreaView style={styles.Shortcuts}>
                <Text style={styles.Short}>Shortcuts</Text>
            </SafeAreaView>
            <SafeAreaView style={styles.helloStarted}>
                {/* TODO: make this button reusable */}
                <Button title="Start Trip" color={"#2871E6"} />
            </SafeAreaView>
        </SafeAreaView>
    );
}
