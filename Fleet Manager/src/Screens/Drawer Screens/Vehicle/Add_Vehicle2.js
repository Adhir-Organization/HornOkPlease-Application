import React from "react";
import { Box, Text, Center, Input, Button, ScrollView } from "native-base";
import { useNavigation } from "@react-navigation/native";
import InputBox from "../../../../Component/Drawer/InputBox";
const Add_Vehicle2 = () => {
  const navigation = useNavigation();
  return (
    <Box safeArea>
      <Box background="#0058DB" padding="3">
        <Center>
          <Text fontSize="xl" color="white" mx={["110px"]}>
            Add Vehicle
          </Text>
        </Center>
      </Box>
      <ScrollView>
        <Box my="4">
          <InputBox title="Driver ID" placeholder="1999" />
          <InputBox title="Driver Contact " placeholder="1999" />
          <InputBox title="Tn Old Number " placeholder="23083408" />
          <InputBox title="NewBx Number " placeholder="23083408" />
          <InputBox title="Last ODO Read " placeholder="23083408" />
          <InputBox title="Last ODO Read Date" placeholder="00/00/00" />
          <InputBox title="Tool List" placeholder="Ashok Leyland" />
          <InputBox title="Average" placeholder="3km/hr" />
        </Box>
        <Button
          size="md"
          mx="32"
          my="-1"
          // onPress={() => navigation.navigate("Add_Vehicle2")}
        >
          Save
        </Button>
      </ScrollView>
    </Box>
  );
};

export default Add_Vehicle2;
