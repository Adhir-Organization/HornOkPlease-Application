import {
  Box,
  Center,
  Text,
  HStack,
  IconButton,
  VStack,
  View,
  Button,
  ScrollView,
  FormControl,
  Input,
} from "native-base";
import React from "react";
import InputBox from "../../../../Component/Drawer/InputBox";
import { useNavigation } from "@react-navigation/native";
import Icon from "react-native-vector-icons/Ionicons";
import DateSelector from "../../../../Component/DateSelector";
const Add_Driver1 = () => {
  const navigation = useNavigation();
  return (
    <Box safeArea>
      <Box background="#0058DB" padding="3">
        <HStack>
          <Center>
            <Text fontSize="xl" color="white" mx={["135px"]}>
              Add Driver
            </Text>
          </Center>
        </HStack>
      </Box>
      <ScrollView>
        <Box mx="32">
          <Icon name="person-circle-outline" size={112} color="blue" />
        </Box>
        {/* <IconButton>
        <Icon name="camera-outline" size={40} />
      </IconButton> */}
        <Box my="6">
          <InputBox title="Driver First Name " placeholder="1999" />
          <InputBox title="Driver Middle Name opt " placeholder="1999" />
          <InputBox title="Driver Last Name " placeholder="1999" />
          <DateSelector name="Date of Date" />
          <InputBox
            title="Driver Contact No."
            placeholder="9978"
            type="phone-pad"
          />
          <DateSelector name="Joining Date" />
        </Box>
      </ScrollView>
      <Button
        size="md"
        mx="32"
        my="10"
        onPress={() => navigation.navigate("Add_Driver2")}
      >
        Next
      </Button>
    </Box>
  );
};

export default Add_Driver1;
