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

const TripExpenseBox = (props) => {
    return (
        <>
            <Box
                padding="3"
                mx="3"
                my="3"
                backgroundColor={props.color}
                borderRadius="9"
            >
                <HStack alignItems="center">
                    <IconButton
                        icon={<Icon name={props.iconName} color={"white"} size={27} />}
                        variant="unstyled"
                        rounded="full"
                        backgroundColor={props.btnColor}
                        size="16"
                    />
                    <Box mx="3">
                        <VStack space="1">
                            <Text fontSize={18} bold>
                                {props.name}
                            </Text>
                        </VStack>
                    </Box>
                </HStack>
            </Box>
            <Box>

            </Box>
        </>
    )
}

export default TripExpenseBox;
