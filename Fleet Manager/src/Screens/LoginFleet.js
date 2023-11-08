import React from "react";
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
import { ICONS, COLORS } from "../../../constants/theme";
import { useNavigation } from "@react-navigation/native";
import Icon from "react-native-vector-icons/MaterialIcons";
const LoginFleet = () => {
  const navigation = useNavigation();
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
          source={require("../../../assets/images/hopLogo.png")}
        />
        <Box>
          <Heading size="lg" color={COLORS.primaryBlue}>
            Welcome Manager!
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
            size="md"
          />

          <Button
            my="7"
            size="lg"
            // onPress={() => navigation.navigate("OTPVerificationFleet")}
          >
            Get OTP
          </Button>
        </Box>
      </VStack>
    </Box>
  );
};

export default LoginFleet;
