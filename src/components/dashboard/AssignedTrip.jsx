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

export default function AssignedTrip() {
  const [modalVisible, setModalVisible] = React.useState(false);
  
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
        <Modal.Content>
          <Modal.CloseButton />
          <Modal.Header>Assigned Trip</Modal.Header>
          <Modal.Body>
            Enter email address and we'll send a link to reset your password.
            <FormControl mt="3">
              <FormControl.Label>Email</FormControl.Label>
              <Input />
            </FormControl>
          </Modal.Body>
          <Modal.Footer>
            <Button
              flex="1"
              onPress={() => {
                setModalVisible(false);
              }}
            >
              Proceed
            </Button>
          </Modal.Footer>
        </Modal.Content>
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
