import React from "react";
import {
  Modal,
  Button,
  Input,
  VStack,
  HStack,
  Box,
  Text,
  FormControl,
  Center,
} from "native-base";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import { useState } from "react";
import { useNavigation } from "@react-navigation/native";
export default function AssignedTrip() {
  const [modalVisible, setModalVisible] = React.useState(false);

  const [placement, setPlacement] = useState(undefined);

  const [open, setOpen] = useState(false);
  const openModal = (placement) => {
    setOpen(true);
    setPlacement(placement);
  };
  const styles = {
    center: {},
  };
  const navigation = useNavigation();
  const FieldBox = (props) => {
    return (
      <Box backgroundColor={"#F2EDED"} borderRadius="md">
        <HStack justifyContent={"center"} alignItems="center">
          <Box flex="1">
            <Text fontSize={15} pl="3">
              {props.label}{" "}
            </Text>
          </Box>
          <Box>:</Box>
          <Box>
            <Input w="40" fontSize="13" borderColor={"#F2EDED"} editable={false} >
              {props.input}
            </Input>
          </Box>
        </HStack>
      </Box>
    );
  };
  return (
    <>
      <Modal
        isOpen={modalVisible}
        onClose={() => setModalVisible(false)}
        avoidKeyboard
        justifyContent="flex-end"
        bottom="4"
        size="lg"
      >
        <Center flex={1}>
          <Modal.Content>
            <Modal.CloseButton />
            <Modal.Header pl="24" color="blue.500">
              Assigned Trips
            </Modal.Header>
            <Modal.Body>
              <FormControl w={"80"}>
                <VStack space={2}>
                  <FieldBox label={"Vehicle Number"} input={"GJ06AB5739"} />
                  <FieldBox label={"Date"} input={"01 August 1999"} />
                  <FieldBox label={"From"} input={"Jamnagar"} />
                  <FieldBox label={"To"} input={"Surat"} />
                  <FieldBox label={"Duration "} input={"3 days"} />
                  <FieldBox label={"Diesel"} input={"155 L"} />
                  <FieldBox label={"Advance Amount"} input={"Rs. 2000"} />
                  <FieldBox label={"Flat"} input={"Rs. 2000"} />
                  <FieldBox label={"Estimated Km "} input={"1500"} />
                  <FieldBox label={"LR Number"} input={"ABH456"} />
                </VStack>
              </FormControl>
            </Modal.Body>
            <Modal.Footer>
              <Button
                flex="1"
                onPress={() => {
                  navigation.navigate("PTNavigation");
                  setModalVisible(!modalVisible);
                }}
              >
                Start Trip
              </Button>
            </Modal.Footer>
          </Modal.Content>
        </Center>
      </Modal>

      <Button
        p="3"
        w="full"
        background="blue.100"
        rounded="md"
        justifyContent={"flex-start"}
        shadow="0"
        onPress={() => {
          setModalVisible(!modalVisible);
          // openModal("center");
        }}
      >
        <HStack>
          <Box background={"blue.500"} p={2} rounded="full">
            <Icon name="road" color={"white"} size={20} />
          </Box>
          <Text
            alignSelf={"center"}
            ml={2}
            fontSize={"xl"}
            fontWeight={"medium"}
            color="blue.500"
          >
            Assigned Trip
          </Text>
        </HStack>
      </Button>
    </>
  );
}

// export default () => {
//   return (
//     <NativeBaseProvider>
//       <Center flex={1} px="3">
//         <Example />
//       </Center>
//     </NativeBaseProvider>
//   );
// };
