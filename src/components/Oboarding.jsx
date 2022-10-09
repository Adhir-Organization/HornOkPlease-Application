import { Image } from "react-native";
import { Box, VStack, Heading, Text, Button } from "native-base";

const Oboarding = () => {
  return (
    <Box flex="1" safeArea>
      <VStack space="2" p="5">
        {/* <Image
          style={{
            width: "80%",
            alignSelf: "center",
            height: "70%",
            resizeMode: "contain",
          }}
          // ../assets/images/hero.png
          source={require("../../assets/images/hero.png")}
        /> */}
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
};

export default Oboarding;
