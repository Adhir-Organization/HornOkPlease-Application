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
import InputBox from "../../../Component/Drawer/InputBox";
import { useNavigation } from "@react-navigation/native";
import Icon from "react-native-vector-icons/Ionicons";

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
      <Box mx="32">
        <Icon name="person-circle-outline" size={112} color="blue" />
      </Box>
      {/* <IconButton>
        <Icon name="camera-outline" size={40} />
      </IconButton> */}

      <Box>
        <InputBox title="Driver First Name " placeholder="1999" />
        <InputBox title="Driver Middle Name opt " placeholder="1999" />
        <InputBox title="Driver Last Name " placeholder="1999" />
        <InputBox title="Date of Birth " placeholder="1999" />
        <InputBox title="Driver Contact No." placeholder="1999" />
        <InputBox title="Joining Date" placeholder="1999" />
      </Box>
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
