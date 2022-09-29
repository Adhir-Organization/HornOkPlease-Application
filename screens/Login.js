import { Box, VStack, Heading, Text, Center, Input, Container, Button } from "native-base";
import { Image } from "react-native";

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
        <Image
          style={{
            width: "50%",
            alignSelf: "center",
            height: "10%",
            resizeMode: "contain",
          }}
          source={require("../assets/images/hopLogo.png")}
        />
        <Center>
          <Heading size="xl" color={COLORS.primaryBlue}>
            Welcome Back!
          </Heading>
          <Text fontSize="lg">Login to your account to continue</Text>
        </Center>
        <Center>
          <Box marginY="10">
            <Icon name="mobile-friendly" size={100} color={COLORS.primaryBlue} />
          </Box>
          <Text fontSize="3xl" fontWeight="semibold">
            Enter your mobile number
          </Text>
          <Text fontSize="md">We will send you a verification OTP code.</Text>
        </Center>
        <Center>
          <Input placeholder="+91 19000 12345" w="100%" color="blue.500" _focus={{ color: "blue.500" }} size="md" />
          <Button marginY="10" size="lg" onPress={pressHandler}>
            Get OTP
          </Button>
        </Center>
      </VStack>
    </Box>
  );
}
