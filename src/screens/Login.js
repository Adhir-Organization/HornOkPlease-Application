import {
  Box,
  VStack,
  Heading,
  Text,
  Center,
  Input,
  Container,
  Button,
  Alert,
} from "native-base";
import { Image } from "react-native";

import axios from "axios";

import { ICONS, COLORS } from "../../constants/theme";

import Icon from "react-native-vector-icons/MaterialIcons";
import { useState } from "react";

export default function Login({ navigation }) {
  const [contactNo, setContactNo] = useState("");
  const [alertMsg, setAlertMsg] = useState(null);
  const handleRequest = async () => {
    try {
      const { data } = await axios.get(
        `http://192.168.211.202:5000/api/driver/get/searchBy?phone=${contactNo}`
      );
      console.log(data);
      navigation.navigate("OtpVerification", { phone: contactNo });
    } catch (e) {
      if (e.response.status === 400) {
        setAlertMsg("*You are not registered with us. Please register first.");
      }
      console.log(e.response.status);
      console.log(e.response.data);
    }
  };
  const pressHandler = async () => {
    // handleRequest();
    navigation.navigate("OtpVerification", { phone: 1234567890 });
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
            Welcome Back!
          </Heading>
          <Text fontSize="md">Login to your account to continue</Text>
        </Box>
        <Box>
          <Box marginY="5">
            <Icon name="mobile-friendly" size={80} color={COLORS.primaryBlue} />
          </Box>
          <Text fontSize="xl" fontWeight="semibold">
            Enter your mobile number
          </Text>
          <Text fontSize="md">We will send you a verification OTP code.</Text>
        </Box>
        <Box>
          <Input
            placeholder="+91 1234567890"
            w="100%"
            color="blue.500"
            _focus={{ color: "blue.500" }}
            value={contactNo}
            onChangeText={(text) => setContactNo(text)}
            size="md"
          />
          {alertMsg ? (
            <Text fontSize="sm" mt="3" color="red.500">
              {alertMsg}
            </Text>
          ) : null}
          <Button my="7" size="lg" onPress={pressHandler}>
            Get OTP
          </Button>
        </Box>
      </VStack>
    </Box>
  );
}
