import React from "react";
import { Box, Text, Center, Input, Button } from "native-base";
import { useNavigation } from "@react-navigation/native";
function InputBo(props) {
  return (
    <Box mx="5" my="2">
      <Text bold>{props.title}</Text>
      <Input
        placeholder={props.placeholder}
        borderColor="black"
        borderRadius="lg"
      />
    </Box>
  );
}
const Add_Vehicle1 = () => {
  const navigation = useNavigation({});
  return (
    <Box safeArea>
      <Box background="#0058DB" padding="3">
        <Center>
          <Text fontSize="xl" color="white" mx={["110px"]}>
            Vehicle Details
          </Text>
        </Center>
      </Box>
      <Box my="4">
        <InputBo title="Vehicle Number" placeholder="GJ06AB1234" />
        <InputBo title="Transpoter ID" placeholder="John Doe" />
        <InputBo title="Broker/Owner " placeholder="John Doe" />
        <InputBo title="Vehicle Model" placeholder="John Doe" />
        <InputBo title="Vehicle Year" placeholder="1999" />
        <InputBo title="Vehicle Buy Date" placeholder="1999" />
        <InputBo title="Engine Number" placeholder="1999" />
        <InputBo title="Chasis Number" placeholder="1999" />
      </Box>
      <Button
        size="md"
        mx="32"
        my="-1"
        onPress={() => navigation.navigate("Add_Vehicle2")}
      >
        Next
      </Button>
    </Box>
  );
};

export default Add_Vehicle1;
