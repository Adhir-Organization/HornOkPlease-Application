import { Box, Center, Text, HStack, ScrollView, Button } from "native-base";
import ExpenseBox from "../../Component/Dashboard/ExpenseBox";


const ExpenseSummary = () => {
    return (
        <Box safeArea>

            <Box background="#0058DB" padding="3">
                <HStack>
                    <Center>
                        <Text fontSize="xl" color="white" mx={"24"}>
                            Expense Summary
                        </Text>
                    </Center>
                </HStack>
            </Box>
            <ScrollView>
                <Box mx="3" my="4">
                    <ExpenseBox
                        expenseType={"Diesel"}
                        uom={"cost/UOM"}
                        color={"#D2D2D2"}
                        date={"10 august 2022"}
                        cost={"-220"}
                        remainCost={"₹80"}
                    />
                    <ExpenseBox
                        expenseType={"Tyre Maintanence"}
                        uom={"cost/UOM"}
                        color={"#D2D2D2"}
                        date={"10 august 2022"}
                        cost={"-2200"}
                        remainCost={"₹80"}

                    />
                    <ExpenseBox
                        expenseType={"Engine Repair"}
                        uom={"cost/UOM"}
                        color={"#D2D2D2"}
                        date={"10 august 2022"}
                        cost={"-4500"}
                        remainCost={"₹80"}

                    />
                    <ExpenseBox
                        expenseType={"Engine Repair"}
                        uom={"cost/UOM"}
                        color={"#D2D2D2"}
                        date={"10 august 2022"}
                        cost={"-1500"}
                        remainCost={"₹80"}

                    />
                    <ExpenseBox
                        expenseType={"Engine Repair"}
                        uom={"cost/UOM"}
                        color={"#D2D2D2"}
                        date={"10 august 2022"}
                        cost={"-2000"}
                        remainCost={"₹80"}
                    />
                </Box>
                <Box>
                </Box>
            </ScrollView>
            {/* </Stack.Navigator> */}
        </Box>
    );
};

export default ExpenseSummary;