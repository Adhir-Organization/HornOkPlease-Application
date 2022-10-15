import { Button, Box, Heading, HStack, Text } from "native-base";
import Icon from "react-native-vector-icons/Feather";

export default function ShortcutButton(props) {
  return (
    <Button
      p="3"
      w="full"
      background="blue.100"
      rounded="md"
      justifyContent={"flex-start"}
      shadow="0"
    >
      <HStack>
        <Box background={"blue.500"} p={2} rounded="full">
          <Icon name="credit-card" color={"white"} size={20} />
        </Box>
        <Text
          alignSelf={"center"}
          ml={2}
          fontSize={"xl"}
          fontWeight={"medium"}
          color="blue.500"
        >
          props.
        </Text>
      </HStack>
    </Button>
  );
}
