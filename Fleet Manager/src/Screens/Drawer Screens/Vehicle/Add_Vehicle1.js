import React from "react";
import { Box, Text, Center, Input, Button, ScrollView } from "native-base";
import { useNavigation } from "@react-navigation/native";
import InputBox from "../../../../Component/Drawer/InputBox";
const Add_Vehicle1 = () => {
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
      <ScrollView>
        <Box my="4">
          <InputBox title="Vehicle Number" placeholder="GJ06AB1234" />
          <InputBox title="Transpoter ID" placeholder="John Doe" />
          <InputBox title="Broker/Owner " placeholder="John Doe" />
          <InputBox title="Vehicle Model" placeholder="John Doe" />
          <InputBox title="Vehicle Year" placeholder="1999" />
          <InputBox title="Vehicle Buy Date" placeholder="1999" />
          <InputBox title="Engine Number" placeholder="1999" />
          <InputBox title="Chasis Number" placeholder="1999" />
        </Box>
      </ScrollView>
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
