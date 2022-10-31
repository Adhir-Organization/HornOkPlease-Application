import { useContext, useEffect, useState } from "react";
import { Heading, VStack, Box, Text, Input, Button } from "native-base";
import { COLORS } from "../../constants/theme";

import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import { Image } from "react-native";

import AsyncStorage from "@react-native-async-storage/async-storage";
import { useNavigation } from "@react-navigation/native";
import authContext from "../context/authContext";

export default function OtpVerification({ route }) {
  const { setIsLoggedIn } = useContext(authContext);
  const navigation = useNavigation();

  const { phone } = route.params;

  // const [otp, setOtp] = useState(1234);
  // const [inputOtp, setInputOtp] = useState(0);
  const pressHandler = async () => {
    setIsLoggedIn(true);
    await AsyncStorage.setItem("authToken", "1234567890");
    navigation.navigate("TabNavigation");
  };

  const storeData = async () => {
    try {
      await AsyncStorage.setItem("authToken", "abcd");
      // const value = await AsyncStorage.getItem("authToken");
      // console.log(value);
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <Box flex="1" safeArea p="5">
      <VStack space="5">
        <Image
          style={{
            width: "50%",
            alignSelf: "center",
            height: "10%",
            resizeMode: "contain",
          }}
          source={require("../../assets/images/hopLogo.png")}
        />
        <Box>
          <Heading size="lg" color={COLORS.primaryBlue}>
            OTP Verification
          </Heading>
          <Text fontSize="md">
            An OTP is sent your registered mobile number
          </Text>
          <Box marginY="5">
            <Icon
              name="message-processing-outline"
              size={80}
              color={COLORS.primaryBlue}
            />
          </Box>
        </Box>
        <Box>
          <Text fontSize="sm">Enter OTP code sent to your number</Text>
          <Text fontWeight="semibold" fontSize="lg" marginBottom="5">
            +91 {phone}
          </Text>
          <Input
            placeholder="Enter OTP"
            w="100%"
            color="blue.500"
            _focus={{ color: "blue.500" }}
            size="md"
            // value={inputOtp}
            // onChangeText={(value) => setInputOtp(value)}
            keyboardType="number-pad"
          />
          <Button marginY="10" size="lg" onPress={pressHandler}>
            Login
          </Button>
        </Box>
      </VStack>
    </Box>
  );
}
