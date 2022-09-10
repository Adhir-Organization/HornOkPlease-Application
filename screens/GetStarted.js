import { StyleSheet, Image } from "react-native";
import { COLORS, SIZES } from "../constants/theme";
import { Box, Center, HStack, Heading, Text, Button } from "native-base";

export default function GetStarted({ navigation }) {
  return (
    <Box flex="1" safeArea>
      <HStack space="3" alignItems="center">
        <Center bg="primary.400" size="16">
          <Image
            style={{
              width: "90%",
              alignSelf: "center",
              height: "50%",
              resizeMode: "contain",
            }}
            source={require("../assets/images/hero.png")}
          />
        </Center>
        <Center>
          <Heading size="xl" mb="4">
            HornOKPlease
          </Heading>
        </Center>
        <Center>
          <Text fontSize="md">
            Manage your fleet from anywhere in the world with HornOKPlease.
          </Text>
        </Center>
        <Center>
          <Button onPress={() => navigate.navigation("Login")}>
            Get Started
          </Button>
        </Center>
      </HStack>
    </Box>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  heading: {
    fontSize: SIZES.xxl,
    fontWeight: "bold",
    marginTop: 50,
    marginBottom: 20,
    color: COLORS.primaryBlue,
  },
  text: {
    fontSize: SIZES.md,
  },
  btn: {
    width: "70%",
    marginTop: 20,
    backgroundColor: COLORS.primaryBlue,
    borderRadius: 70,
  },
  btnTxt: {
    fontSize: SIZES.md,
    color: "#fff",
    textAlign: "center",
    paddingVertical: 10,
  },
  heroImg: {},
});
