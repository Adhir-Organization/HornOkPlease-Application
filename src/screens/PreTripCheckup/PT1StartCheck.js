import React from "react";
import Header from "../../components/Header";
import { Box, Text, VStack, Input, Button } from "native-base";
import { useNavigation } from "@react-navigation/native";
const PT1 = (props) => {
  return (
    <Box mr="10" ml="10" mt="4">
      <Text fontSize="md">{props.name}</Text>
      <Input
        size="xs"
        placeholder={props.placeholder}
        fontSize="md"
        marginTop="2"
        backgroundColor={"#E1E1E1"}
      />
    </Box>
  );
};
export default function PT1StartCheck() {
  const navigation = useNavigation();
  return (
    <Box safeArea>
      <VStack space="2">
        {/* removing this because of set built in header to true with appropriate colors */}
        {/* <Header headerName={"Pre-Trip Checkup"} /> */}
        <PT1 name={"Driver Name"} placeholder={"John Roy"} />
        <PT1 name={"Vehicle Number"} placeholder={"GJ249078"} />
        <Button
          mr="20"
          ml="20"
          mt="16"
          onPress={() => navigation.navigate("PT2CheckUpList")}
        >
          Start CheckUp
        </Button>
      </VStack>
    </Box>
  );
}
