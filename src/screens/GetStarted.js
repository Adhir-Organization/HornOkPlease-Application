import { Image } from "react-native";
import { Box, Center, VStack, Heading, Text, Button } from "native-base";

export default function GetStarted({ navigation }) {
  return (
    <Box flex="1" safeArea>
      <VStack space="2" p="5">
        <Image
          style={{
            width: "80%",
            alignSelf: "center",
            height: "70%",
            resizeMode: "contain",
          }}
          source={require("../assets/images/hero.png")}
        />
        <Box>
          <Heading size="xl" mb="4">
            HornOKPlease
          </Heading>
          <Text fontSize="md">
            Manage your fleet from anywhere in the world with HornOKPlease.
          </Text>
          <Box marginTop="5">
            <Button size={"lg"} onPress={() => navigation.navigate("Login")}>
              Get Started
            </Button>
          </Box>
        </Box>
      </VStack>
    </Box>
  );
}
