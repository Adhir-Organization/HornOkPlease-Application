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
  Avatar,
  Pressable
} from "native-base";
import Icon from "react-native-vector-icons/MaterialCommunityIcons" ;
import Icons from "react-native-vector-icons/Ionicons" ;

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
      <Box >
        <HStack 
        justifyContent={"center"} 
        alignItems="center" 
        borderBottomWidth={"2"} 
        borderBottomColor={"gray.200"} 
        
        >
               <Icon name={props.icon} size={30} color="#0058DB"/>
            <Icons name={props.icons} size={30} color="#0058DB"/>
          <Box flex="1" my="4" mx="16" >
            <Text fontSize={18} >
              {props.label}{" "}
            </Text>
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
            <Modal.Header pl="32" color="blue.500">
             Profile
            </Modal.Header>
            <Modal.Body>
              <FormControl w={"80"}>
                <VStack space={2}>
                <FieldBox label={"John"} icons={"person-outline"} />
                  <FieldBox label={"+91999399999"} icons={"ios-call-outline"} />
                  <FieldBox label={"GJ10HR8978"} icon={"truck-outline"}  />
                  <FieldBox label={"Tata Truck"} icon={"truck-minus"} />
                  <FieldBox label={"974974930"} icon={"card-account-details-outline"} />
                  <FieldBox label={"89797079 "}icons={"person-outline"} />
                  <FieldBox label={"04 August 2002"} icon={"calendar-month-outline"} />
                  
                </VStack>
              </FormControl>
            </Modal.Body>
            <Modal.Footer>
              <Button
                flex="1"
                onPress={() => {
<<<<<<< HEAD
                  navigation.navigate("PTNavigation");
=======
                  navigation.navigate("OTPVerificationFleet");
>>>>>>> d262cb5a9d66eee9a2ec711157d154227c46ed0d
                  setModalVisible(!modalVisible);
                }}
              >
                Logout
              </Button>
            </Modal.Footer>
          </Modal.Content>
        </Center>
      </Modal>

      <Pressable
        onPress={() => {
          setModalVisible(!modalVisible);
          // openModal("center");
        }}
      >
       <Avatar
            bg="cyan.500"
            source={{
              uri: "https://images.unsplash.com/photo-1603415526960-f7e0328c63b1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",
            }}
          />
      </Pressable>
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
