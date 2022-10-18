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
  NativeBaseProvider,
  
} from "native-base";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import { useState } from "react";
export default function AssignedTrip() {
  const [modalVisible, setModalVisible] = React.useState(false);

  const [placement, setPlacement] = useState(undefined);

  const [open, setOpen] = useState(false);
  const openModal = placement => {
    setOpen(true);
    setPlacement(placement);
  };
  const styles= {
    center : {}

  }
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
      <Center flex={1}  w={"full"} >
        <Modal.Content  >
          <Modal.CloseButton />
          <Modal.Header pl="24" color="blue.500">Assigned Trip</Modal.Header>
          <Modal.Body>
           
            <FormControl mt="1">
                <Box color={"blue.200"}>
              <HStack>
              <FormControl.Label fontSize={10} mr="20">Email : </FormControl.Label>
                <Input w="32" size="xs"></Input>
              </HStack>
                </Box>
              <FormControl.Label >Email : </FormControl.Label>
              <FormControl.Label>Email</FormControl.Label>
              <FormControl.Label>Email</FormControl.Label>
              
              
            </FormControl>
          </Modal.Body>
          <Modal.Footer>
            <Button
              flex="1"
              onPress={() => {
                setModalVisible(false);
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
