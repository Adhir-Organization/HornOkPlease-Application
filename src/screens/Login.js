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
import { BASE_URL } from "../../config";
import { login } from "../services/operations/authApi";
import { useDispatch } from "react-redux";
import { useNavigation } from "@react-navigation/native";
import { setLoginData } from "../slices/authSLice";

export default function Login( ) {

 const navigation = useNavigation();

  const dispatch = useDispatch();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  // console.log("login screen",email);
  // const handleRequest = async () => {
  //   try {
  //     console.log("requesting for data");
  //     const { data } = await axios.get(
  //       `${BASE_URL}/driver/get/searchBy?phone=1234567890`
  //     );
  //     console.log(data.result);
  //     if (data.result.length === 0) {
  //       setAlertMsg("No user found");
  //     } else {
  //       navigation.navigate("Login", {
  //         user: data.result[0]._id,
  //         phone: contactNo,
  //       });
  //     }
  //   } catch (e) {
  //     console.log(e);
  //   }
  // };

  const pressHandler = async () => {
    // handleRequest();
    // navigation.navigate("Login", { phone: 1234567890 });
    dispatch(login(email, password, navigation));
    dispatch(setLoginData({ email }));
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
            Enter your email and password
          </Text>
          <Text fontSize="md">We will send you a verification OTP code.</Text>
        </Box>
        <Box>
          <Input
            placeholder="Email"
            w="100%"
            color="blue.500"
            _focus={{ color: "blue.500" }}
            value={email}
            onChangeText={(text) => setEmail(text)}
            size="md"
          />
          <Input my="5"
            placeholder="Password"
            w="100%"
            color="blue.500"
            _focus={{ color: "blue.500" }}
            value={password}
            onChangeText={(text) => setPassword(text)}
            size="md"
          />
          {/* {alertMsg ? (
            <Text fontSize="sm" mt="3" color="red.500">
              {alertMsg}
            </Text>
          ) : null} */}
          <Button my="7" size="lg" onPress={pressHandler}>
            Login
          </Button>
          {/* <Text
            underline
            mx={32}
            fontSize={16}
            color={"blue.500"}
            onPress={() => navigation.navigate("MainStackNav")}
          >
            Login as Fleet
          </Text> */}
        </Box>
      </VStack>
    </Box>
  );
}
