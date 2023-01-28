import React from "react";
import {
    Box,
    VStack,
    Heading,
    Text,
    HStack,
    Center,
    Input,
    Container,
    Button,
    FormControl,
    Alert,
    ScrollView,
} from "native-base";
import { useState } from "react";

import DateSelector from "../../../src/components/maintenance/DateSelector";

const AssignTrip = () => {

    const [todayDate, setTodayDate] = useState();
    return (
        <>
            <Box safeArea>
                <Box background="#0058DB" padding="3">
                    <HStack>
                        <Center>
                            <Text fontSize="xl" color="white" mx={["136px"]}>
                                Assign Trip
                            </Text>
                        </Center>
                    </HStack>
                </Box>

                <ScrollView>
                    <Box padding="3">
                        <HStack>
                            {/* <Text fontSize="xl" fontWeight={"bold"} color="black" mx="3">
                                Assign Trip
                            </Text> */}
                        </HStack>
                    </Box>
                    <Box p={5}>
                        <FormControl isRequired isInvalid>
                            <VStack space="5">
                                <Box>
                                    <FormControl.Label>Vehicle number</FormControl.Label>
                                    <Input placeholder="GJ10AB9999" />
                                </Box>

                                {/* Date Picker */}
                                <Box>
                                    <FormControl.Label>Select Date</FormControl.Label>
                                    <HStack
                                        justifyContent={"space-between"}
                                        alignItems={"center"}
                                        p={3}
                                        borderWidth="1"
                                        borderColor={"blue.100"}
                                        rounded="md"
                                        w="full"
                                    >
                                        <Text fontSize={"xs"}>{todayDate}</Text>
                                        <DateSelector
                                            value={todayDate}
                                            onInputValueChange={setTodayDate}
                                        />
                                    </HStack>
                                </Box>

                                <Box>
                                    <FormControl.Label>From</FormControl.Label>
                                    <Input placeholder="Jamnagar" />
                                </Box>
                                <Box>
                                    <FormControl.Label>To</FormControl.Label>
                                    <Input placeholder="Junagadh" />
                                </Box>
                                <Box>
                                    <FormControl.Label>Duration</FormControl.Label>
                                    <Input placeholder="3 Days" />
                                </Box>
                                <Box>
                                    <FormControl.Label>Diesel</FormControl.Label>
                                    <Input placeholder="155L" />
                                </Box>
                                <Box>
                                    <FormControl.Label>Advance Amount</FormControl.Label>
                                    <Input placeholder="RS. 5000" />
                                </Box>
                                <Box>
                                    <FormControl.Label>Flat</FormControl.Label>
                                    <Input placeholder="RS. 5000" />
                                </Box>
                                <Box>
                                    <FormControl.Label>Sort Halt</FormControl.Label>
                                    <Input placeholder="Numbers of hours" />
                                </Box>
                                <Box>
                                    <FormControl.Label>Long Halt</FormControl.Label>
                                    <Input placeholder="Numbers of hours" />
                                </Box>
                                <Box marginBottom="6" display="flex" mx="auto" >
                                    <Box display="flex" flexDirection="row" marginBottom="4">
                                    <FormControl.Label>Estimate Kms</FormControl.Label>
                                    <Input placeholder="Numbers of hours" width="40" />
                                    </Box>
                                    
                                    <Box display="flex" flexDirection="row">
                                        <FormControl.Label>Estimate Kms</FormControl.Label>
                                        <Input placeholder="Numbers of hours" width="40" />
                                    </Box>
                                </Box>
                            </VStack>
                            <Button width="32" mx="auto" marginBottom="12">
                                Assign Trip
                            </Button>
                        </FormControl>
                    </Box>
                </ScrollView>
            </Box>
        </>
    );
};
export default AssignTrip;