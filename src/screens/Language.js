import Onboarding from "../components/Oboarding";
import { Box, VStack, Heading, Text, Button } from "native-base";
import { Image } from "react-native";

export default function Language({ navigation }) {
    return (
        <Box flex="1" safeArea>
            <VStack space="2" p="5">
                <Box>
                    <Heading size="xl" mb="4">
                        Select Language
                    </Heading>
                    <Box marginTop="5">
                        {/* <Button size={"lg"} onPress={() => navigation.navigate("Login")}>
                            Select Language
                        </Button> */}
                    </Box>
                </Box>
            </VStack>
        </Box>
    );
}
