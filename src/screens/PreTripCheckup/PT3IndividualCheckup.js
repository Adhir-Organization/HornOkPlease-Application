import React, { useContext } from "react";
import { Box, Text, VStack, Input, Button, Heading, HStack } from "native-base";
import { useNavigation } from "@react-navigation/native";
import PreTripContext from "../../context/preTripContext";

export default function PT3IndividualCheckup({ route }) {
  const { parts, setParts } = useContext(PreTripContext);
  const { data } = route.params;
  console.log(data.status);
  const navigation = useNavigation();
  return (
    <Box safeArea>
      <VStack space="2" alignItems={"center"} justifyContent="center">
        <Heading size="xl" mt="12" mb="3">
          {data.name}
        </Heading>
        <Text>
          Current Status :{" "}
          {data.status === false
            ? "Broken"
            : data.status === true
            ? "Good"
            : null}
        </Text>
        <Text textAlign={"center"}>
          Examine the {data.name.toLowerCase()} and verify that there are no
          defects and properly working
        </Text>
        <Box background={"#FCD4D4"} px="3" py="1" rounded="lg">
          <Text color="#FF3E3E">Required</Text>
        </Box>
        <Box background={"#E1E1E1"} h="300" w="300" rounded="lg" mt="7">
          <Text>Photo</Text>
        </Box>
        <HStack space="2" mt="7">
          <Button onPress={() => navigation.navigate("PT2CheckUpList")}>
            Broken
          </Button>
          <Button
            // https://bobbyhadz.com/blog/react-update-state-array-of-objects#:~:text=To%20update%20an%20array%20of,object%20that%20matches%20the%20condition.
            onPress={() => {
              // navigation.navigate("PT2CheckUpList");
              // setParts(...State,)
              setParts((current) => {
                // console.log(current);
                current.map((item) => {
                  if (item.name == data.name) {
                    // return { ...item, status: true };
                    return { ...item };
                  }
                  return item;
                });
              });
            }}
          >
            Good
          </Button>
        </HStack>
      </VStack>
    </Box>
  );
}
