import {
    Box,
    Center,
    Text,
    HStack,
    IconButton,
    VStack,
    Button,
} from "native-base";
import React from "react";
import Icon from "react-native-vector-icons/FontAwesome";

const TripExpenseBox = ({ name,icon, color, btnColor }) => {
    return (
        <>
            <Box
                padding="3"
                mx="3"
                my="3"
                backgroundColor={color}
                borderRadius="9"
            >
                <HStack alignItems="center">
                    <IconButton
                        icon={<Icon name={icon} color={"white"} size={27} />}
                        variant="unstyled"
                        rounded="full"
                        backgroundColor={btnColor}   
                        size="16"
                    />
                    <Box mx="1">
                        <HStack space="24">
                            <Text fontSize={18} bold width="16">
                                {name}
                            </Text>
                            <Text fontSize={18} bold>
                                $100000
                            </Text>
                        </HStack>
                    </Box>
                </HStack>
            </Box>
            <Box>
            </Box>
        </>
    )
}

export default TripExpenseBox;
