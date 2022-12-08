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

const ExpenseBox = (props) => {
    return (
        <Box
            padding="5"
            mx="3"
            my="3"
            backgroundColor={props.color}
            borderRadius="9"
        >
            <HStack>
        
                <Box>
                    <VStack space="1">
                        <Text fontSize={22} w={"48"}>
                            {props.expenseType}
                        </Text>
                        <Text fontSize={15} bold>
                            {props.uom}
                        </Text>
                        <Text>
                            {props.date}
                        </Text>
                    </VStack>
                </Box>

                <Box height={7} mx="12">
                    <Text pl="2" pr="2" fontSize={18} pt="1" color={"red.600"}>
                        {props.cost} 
                    </Text>
                    <Text mx={"4"}>
                        {props.remainCost}
                    </Text>
                </Box>
            </HStack>
        </Box>
    );
}
export default ExpenseBox;