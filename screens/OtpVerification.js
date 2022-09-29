import { Center, Heading, VStack, Box, Text, Input, Button } from "native-base";
import { COLORS } from "../constants/theme";

import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import { Image } from "react-native";

export default function OtpVerification({ navigation }) {
  const pressHandler = () => {
    navigation.navigate("Dashboard");
  };

  return (
    <Box flex="1" safeArea p="5" alignItems="center">
      <Image
        style={{
          width: "50%",
          alignSelf: "center",
          height: "10%",
          resizeMode: "contain",
        }}
        source={require("../assets/images/hopLogo.png")}
      />
      <VStack space="5">
        <Center>
          <Heading size="xl" color={COLORS.primaryBlue}>
            OTP Verification
          </Heading>
          <Text fontSize="lg" textAlign="center">
            An OTP is sent your registered mobile number
          </Text>
          <Box marginY="10">
            <Icon name="message-processing-outline" size={100} color={COLORS.primaryBlue} />
          </Box>
        </Center>
        <Center>
          <Text>Enter OTP code sent to your number</Text>
          <Text textAlign="center" fontWeight="semibold" fontSize="lg" marginBottom="5">
            +91 12345 54321
          </Text>
          <Input placeholder="1234" w="100%" color="blue.500" _focus={{ color: "blue.500" }} size="md" keyboardType="number-pad" />
        </Center>
        <Center>
          <Button marginY="10" size="lg" onPress={pressHandler}>
            Login
          </Button>
        </Center>
      </VStack>
    </Box>
  );
}
