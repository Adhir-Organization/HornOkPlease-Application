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
} from "native-base";
import { useState } from "react";
import IssueSelector from "../../../src/components/maintenance/IssueSelector";
import DateSelector from "../../../src/components/maintenance/DateSelector";

const AssignTrip = () => {

    const [todayDate, setTodayDate] = useState();
    return (
        <>
        <Box safeArea>
            <Box background="#0058DB" padding="3">
                <HStack>
                    <Center>
                        <Text fontSize="xl" color="white" mx={["110px"]}>
                            Available Trucks
                        </Text>
                    </Center>
                </HStack>
            </Box>

            <Box padding="3">
                <HStack>
                    <Text fontSize="xl" fontWeight={"bold"} color="black" mx="6">
                        Available Trucks
                    </Text>
                </HStack>
                </Box>
                
        
                    <Box p={5}>
                        <FormControl isRequired isInvalid>
                            <VStack space="5">
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
                                {/* Select Issue */}
                                <Box>
                                    <IssueSelector />
                                </Box>
                                {/* Amount Input */}
                                <Box>
                                    <FormControl.Label>Enter Amount</FormControl.Label>
                                    <Input placeholder="5000" />
                                </Box>
                                {/* Done date picker */}
                                <Box>
                                    <DateSelector />
                                </Box>
                                {/* Garage Name */}
                                <Box>
                                    <Input placeholder="Default Input" />
                                </Box>

                                {/* Remark Audio Record */}
                                <Box></Box>
                                {/* Submit Button */}
                                <Box></Box>
                            </VStack>
                        </FormControl>
                    </Box>


        </Box>
        </>
    );
};
export default AssignTrip;