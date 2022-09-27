import { Box, VStack, Heading, Text, Center, Input, Container, Button } from "native-base";
import { StyleSheet, View, Image, ScrollView } from "react-native";

import { ICONS, COLORS } from "../constants/theme";
import Icon from "react-native-vector-icons/MaterialIcons";

export default function Login({ navigation }) {
  const pressHandler = () => {
    // Here we pass the name of navigator from "homeStack.js" file:
    // navigation.navigate(" NAME OF NAVIGATOR ");

    navigation.navigate("OtpVerification");
  };
  return (
    <Box flex="1" safeArea p="5">
      <VStack space="5">
        <Center>
          <Heading size="xl">Welcome Back!</Heading>
          <Text fontSize="lg">Login to your account to continue</Text>
        </Center>
        <Center marginY="10">
          <Icon name={ICONS.loginIcon} size={100} color={COLORS.primaryBlue} />
        </Center>
        <Center>
          <Text fontSize="xl" fontWeight="semibold">
            Enter your mobile number
          </Text>
          <Text fontSize="md">We will send you a verification OTP code.</Text>
        </Center>
        <Center>
          <Input mx="3" placeholder="Input" w="100%" colorScheme="blue" />
          <Button marginY="10" size="lg" onPress={pressHandler}>
            Get OTP
          </Button>
        </Center>

        {/* </Box> */}
      </VStack>

      {/* TODO OTP functionality */}
      {/* <Button title="Get OTP" color={"#2871E6"} onPress={pressHandler} /> */}
      {/* TODO forgot psw and contact owner in one line */}
      {/* <Text style={{ paddingTop: 120 }}> Forgot Password?</Text> */}
      {/* <Text> Contact Owner</Text> */}
      {/* </SafeAreaView> */}
      {/* </SafeAreaView> */}
    </Box>
  );
}
