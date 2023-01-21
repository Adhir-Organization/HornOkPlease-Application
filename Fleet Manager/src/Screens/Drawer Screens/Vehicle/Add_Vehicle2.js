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
const Add_Vehicle2 = () => {
  const navigation = useNavigation({});
  return (
    <Box safeArea>
      <Box background="#0058DB" padding="3">
        <Center>
          <Text fontSize="xl" color="white" mx={["110px"]}>
            Add Vehicle
          </Text>
        </Center>
      </Box>
      <Box my="4">
        <InputBo title="Driver ID" placeholder="1999" />
        <InputBo title="Driver Contact " placeholder="1999" />
        <InputBo title="Tn Old Number " placeholder="23083408" />
        <InputBo title="NewBx Number " placeholder="23083408" />
        <InputBo title="Last ODO Read " placeholder="23083408" />
        <InputBo title="Last ODO Read Date" placeholder="00/00/00" />
        <InputBo title="Tool List" placeholder="Ashok Leyland" />
        <InputBo title="Average" placeholder="3km/hr" />
      </Box>
      <Button
        size="md"
        mx="32"
        my="-1"
        // onPress={() => navigation.navigate("Add_Vehicle2")}
      >
        Save
      </Button>
    </Box>
  );
};

export default Add_Vehicle2;
