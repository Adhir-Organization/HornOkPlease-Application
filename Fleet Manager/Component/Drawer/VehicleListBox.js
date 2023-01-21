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
import Icon from "react-native-vector-icons/FontAwesome";

const VehicleList = ({ TruckNo, number, icon, color, btnColor }) => {
    return (
        <>
            <Box
                // padding="2"
                marginTop="3"
                mx="6"
                my="1"
                // backgroundColor={color}
                borderRadius="10"
            >
                <HStack>
                    <IconButton
                        icon={<Icon name={icon} color={"white"} size={27} />}
                        variant="unstyled"
                        rounded="full"
                        backgroundColor={btnColor}
                        size="16"
                    />
                    <Box mx="6">
                        <VStack >
                            <Text fontSize={24} >
                                {TruckNo}
                            </Text>
                            <Text fontSize={16} >
                                {number}
                            </Text>
                            <Box height={7} marginTop="2" width="20" display="flex" alignItems="center" justifyContent="center" backgroundColor={"blue.300"} borderRadius="16" >
                                <Text>
                                    Available
                                </Text>
                            </Box>
                        </VStack>
                    </Box>
                </HStack>
                <Text borderBottomStyle="dashed" borderBottomWidth={"1"}>
                </Text>
            </Box>
            <Box>

            </Box>
        </>
    )
}

export default VehicleList;