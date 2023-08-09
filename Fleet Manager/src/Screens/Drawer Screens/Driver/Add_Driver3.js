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
<<<<<<< HEAD

const Add_Driver3 = () => {
  const navigation = useNavigation();
  return (
    <Box safeArea>
=======
import { useState, useEffect, useRef } from 'react';
import * as Device from 'expo-device';
import * as Notifications from 'expo-notifications';
import * as Permissions from 'expo-permissions';



const Add_Driver3 = () => {
  

    
  const navigation = useNavigation();

  useEffect(() => {
    registerForPushNotification().then(token => console.log(token));
    // notificationListener.current = Notifications.addNotificationReceivedListener(notification => {
    //   console.log(notification);
    // });
    // responseListener.current = Notifications.addNotificationResponseReceivedListener(response => {
    //   console.log(response);
    // });
    // return () => {
    //   cleanup
    // }
  }, [])

  console.log(token);
  console.log(verifytoken);
  async function registerForPushNotification() {
    const { status } = await Permissions.getAsync(Permissions.NOTIFICATIONS);
    if (status != 'granted') {
      const { status } = await Permissions.askAsync(Permissions.NOTIFICATIONS);
      // finalStatus = status;
    }
    if (status !== 'granted') {
      alert('Failed to get push token for push notification!');
      return;
    }
    token = (await Notifications.getExpoPushTokenAsync()).data;
    return token
  }
  return (
    <Box safeArea>
          <Text>Your expo push token: {expoPushToken}</Text>
>>>>>>> d262cb5a9d66eee9a2ec711157d154227c46ed0d
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
<<<<<<< HEAD
=======

>>>>>>> d262cb5a9d66eee9a2ec711157d154227c46ed0d
