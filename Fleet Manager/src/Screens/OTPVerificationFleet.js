import { Heading, VStack, Box, Text, Input, Button } from "native-base";
import { COLORS } from "../../../constants/theme";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import { Image } from "react-native";
import { useNavigation } from "@react-navigation/native";

export default function OTPVerificationFleet({}) {
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
            +91
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
          <Button        
            marginY="10"
            size="lg"
            onPress={() => navigation.navigate("TabNavigation")}
          >
            Login
          </Button>
        </Box>
      </VStack>
    </Box>
  );
}
