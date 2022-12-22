import {
    Box,
    Center,
    Text,
    HStack,
    IconButton,
    VStack,
    Button,
    ScrollView,
} from "native-base";
import React from "react";
import AvailableBox from "../../Component/Dashboard/AvailableBox";
import Icon from "react-native-vector-icons/EvilIcons";


const AvailableTrucks = () => {
    return (
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

            <ScrollView>
                <Box mx="3" my="4">
                    <AvailableBox
                        truckName={"Tata"}
                        iconName={"truck"}
                        truckId={"11s545242"}
                        color={"#D2D2D2"}
                        btnColor={"#FFBE17"}
                    />
                    <AvailableBox
                        truckName={"Volvo"}
                        iconName={"truck"}
                        truckId={"11s545242"}
                        color={"#D2D2D2"}
                        btnColor={"#FFBE17"}
                    />
                    <AvailableBox
                        truckName={"Volvo"}
                        iconName={"truck"}
                        truckId={"11s545242"} 
                        color={"#D2D2D2"}
                        btnColor={"#FFBE17"}
                    />
                    <AvailableBox
                        truckName={"Eicher"}
                        iconName={"truck"}
                        truckId={"11s545242"}
                        color={"#D2D2D2"}
                        btnColor={"#FFBE17"}

                    />
                    <AvailableBox
                        truckName={"tata"}
                        iconName={"truck"}
                        truckId={"11s545242"}
                        color={"#D2D2D2"}
                        btnColor={"#FFBE17"}

                    />
                    <AvailableBox
                        truckName={"tata"}
                        iconName={"truck"}
                        truckId={"11s545242"}
                        color={"#D2D2D2"}
                        btnColor={"#FFBE17"}

                    /> 
                    <AvailableBox
                        truckName={"tata"}
                        iconName={"truck"}
                        truckId={"11s545242"}
                        color={"#D2D2D2"}
                        btnColor={"#FFBE17"}
                    />
                  </Box> 
                <Box>
                </Box>
            </ScrollView>  

        </Box>
    );
};

export default AvailableTrucks;
