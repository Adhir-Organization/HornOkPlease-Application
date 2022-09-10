import { StyleSheet, Image } from "react-native";
import { COLORS, SIZES } from "../constants/theme";
import { Box, Center, VStack, Heading, Text, Button } from "native-base";

export default function GetStarted({ navigation }) {
  return (
    <Box flex="1" safeArea>
      <VStack space="3" alignItems="center" p="5">
        <Image
          style={{
            width: "90%",
            alignSelf: "center",
            height: "70%",
            resizeMode: "contain",
          }}
          source={require("../assets/images/hero.png")}
        />
        <Center>
          <Heading size="xl" mb="4">
            HornOKPlease
          </Heading>
        </Center>
        <Center>
          <Text fontSize="md" textAlign="center">
            Manage your fleet from anywhere in the world with HornOKPlease.
          </Text>
        </Center>
        <Center>
          <Button onPress={() => navigation.navigate("Login")}>
            Get Started
          </Button>
        </Center>
      </VStack>
    </Box>
  );
}
