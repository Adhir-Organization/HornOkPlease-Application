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
import OnRoadBox from "../../Component/Dashboard/OnRoadBox";

const OnroadTrucks = () => {

    const available = [
        {
            truckName: "Tata",
            truckId: "5515s54154",
            icon: "truck",
            from: "Junagadh",
            to: "dubai",
            color: "#D2D2D2",
            btnColor:"#FFBE17",
        },
        
        {
            truckName: "Volvo",
            truckId: "5515s54154",
            icon: "truck",
            from: "Junagadh",
            to: "dubai",
            color: "#D2D2D2",
            btnColor: "#FFBE17",
        },
        {
            truckName: "Volvo",
            truckId: "5515s54154",
            icon: "truck",
            from: "Junagadh",
            to: "dubai",
            color: "#D2D2D2",
            btnColor: "#FFBE17",
        },
        {
            truckName: "tata",
            truckId: "5515s54154",
            icon: "truck",
            from: "Junagadh",
            to: "dubai",
            color: "#D2D2D2",
            btnColor: "#FFBE17",
        },
    ];


    return (
        <Box safeArea>

            <Box background="#0058DB" padding="3">
                <HStack>
                    <Center>
                        <Text fontSize="xl" color="white" mx={["115px"]}>
                            On Road Trucks
                        </Text>
                    </Center>
                </HStack>
            </Box>

            <Box padding="3">
                <HStack>
                    <Text fontSize="xl" fontWeight={"bold"} color="black" mx="2" mt={4} mb={-4}>
                        On Road Trucks  
                    </Text>
                </HStack> 
            </Box>
            {available.map((available, index) => (
                <OnRoadBox {...available} key={index} />
            ))}
        </Box>
    );
};

export default OnroadTrucks;