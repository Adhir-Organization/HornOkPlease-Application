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
        </Box>
    )
}

export default OnRoadTrucksDetails;