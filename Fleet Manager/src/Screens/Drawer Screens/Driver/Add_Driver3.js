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
  TextArea,
} from "native-base";
import React from "react";
import InputBox from "../../../../Component/Drawer/InputBox";
import { useNavigation } from "@react-navigation/native";
import Icon from "react-native-vector-icons/Ionicons";

const Add_Driver3 = () => {
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
        <Box>
          <InputBox title="Reference by Name opt " placeholder="john" />
          <InputBox
            title="Reference by Mobile Number opt "
            placeholder="999xxxxx"
            type="numeric"
          />
          <Box mx="5" my="2">
            <Text bold>Address on License Card</Text>
            <TextArea
              h={20}
              placeholder="Input Address here "
              maxW="500"
              borderColor="black"
              borderRadius="lg"
            />
          </Box>
          <Box mx="5" my="2">
            <Text bold>Home Address</Text>
            <TextArea
              h={20}
              placeholder="Input Address here "
              maxW="500"
              borderColor="black"
              borderRadius="lg"
            />
          </Box>
        </Box>
      </ScrollView>
      <Button
        size="md"
        mx="32"
        my="10"
        onPress={() => navigation.navigate("Add_Driver2")}
      >
        Save
      </Button>
    </Box>
  );
};

export default Add_Driver3;
