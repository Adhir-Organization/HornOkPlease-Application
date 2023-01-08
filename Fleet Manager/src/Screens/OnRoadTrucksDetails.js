import {
    Box,
    Center,
    Text,
    HStack,
    iconButton,
    VStack,
    Button,
    ScrollView,
} from "native-base";
import React from "react";
import TripExpenseBox from "../../Component/Dashboard/TripExpenseBox";
import Icons from "react-native-vector-icons/MaterialIcons";
import Icon from "react-native-vector-icons/FontAwesome";

const OnRoadTrucksDetails = () => {
    return (
        <Box safeArea>
            <Box background="#0058DB" padding="3">
                <HStack>
                    <Center>
                        <Text fontSize="xl" color="white" mx={["75px"]}>
                            On Road Trucks Details
                        </Text>
                    </Center>
                </HStack>
            </Box>
            <ScrollView>

                <Box padding="3">
                    <HStack>
                        <Text fontSize="xl" fontWeight={"bold"} color="black" mx="4">
                            Tata Truck Ab12
                        </Text>
                    </HStack>
                </Box>

                <Box display="flex" flexDirection="row" backgroundColor="#D2D2D2" h="12" fontSize="xl">
                    <HStack space="32" alignItems="center">
                        <Text fontSize="xl" color="black" mx="6" w="20">
                            Name
                        </Text>
                        <Text fontSize="xl" color="black">
                            John Deo
                        </Text>
                    </HStack>
                </Box>
                <Box display="flex" mt="4" flexDirection="row" backgroundColor="#D2D2D2" h="16" fontSize="xl">
                    <HStack space="32" alignItems="center">
                        <Text fontSize="xl" color="black" mx="6" w="20">
                            Truck Number
                        </Text>
                        <Text fontSize="xl" color="black">
                            GJ1078978
                        </Text>
                    </HStack>
                </Box>
                <VStack>
                    <Box padding="6" mt="1">
                        <Text fontSize="xl" fontWeight={"bold"} color="black" mx="3">
                            Live Location
                        </Text>
                        <Box backgroundColor="#D2D2D2" h="80" fontSize="xl" mt="3" borderRadius="2xl" />
                    </Box>
                </VStack>
                <VStack>
                    <Box>
                        <HStack space="24" alignItems="center" justifyItems="center">
                            <Text fontSize="xl" fontWeight={"bold"} color="black" mx="6">
                                Trip Expense
                            </Text>
                            <Box height={7} backgroundColor={"blue.300"} borderRadius="16" mx="10">
                                <Text pl="3" pr="4" pt="1">
                                    View All
                                </Text>
                            </Box>
                        </HStack>
                    </Box>
                </VStack>
                <Box mx="5" my="4" mb="16">
                    <TripExpenseBox
                        icon={"truck"}
                        name={"Food"}
                        color={"#D2D2D2"}
                        btnColor={"#279600"}
                    />
                    <TripExpenseBox
                        icon={"truck"}
                        name={"Fuel"}
                        color={"#D2D2D2"}
                        btnColor={"orange.500"}
                    />
                    <TripExpenseBox
                        icon={"road"}
                        name={"Food"}
                        color={"#D2D2D2"}
                        btnColor={"#FF3E3E"}
                    />
                </Box>

            </ScrollView>
        </Box>
    )
}

export default OnRoadTrucksDetails;