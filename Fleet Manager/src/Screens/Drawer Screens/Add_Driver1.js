import {
    Box,
    Center,
    Text,
    HStack,
    IconButton,
    VStack,
    View,
    Button,
    ScrollView,
    FormControl,
    Input,
} from "native-base";
import React from "react";
import { useNavigation } from "@react-navigation/native";

const Add_Driver = () => {
   
    return (
        <Box safeArea>
            <Box background="#0058DB" padding="3">
                <HStack>
                    <Center>
                        <Text fontSize="xl" color="white" mx={["135px"]}>
                            Add Driver
                        </Text>
                    </Center>
                </HStack>
            </Box>
        </Box>
    )
}

export default Add_Driver;