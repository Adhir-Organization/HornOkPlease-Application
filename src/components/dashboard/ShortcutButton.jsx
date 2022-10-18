import { Button, Box, HStack, Text } from "native-base";
import { useNavigation } from "@react-navigation/native";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";

export default function ShortcutButton(props) {
  const navigation = useNavigation();
  return (
    <Button
      p="3"
      w="full"
      background="blue.100"
      rounded="md"
      justifyContent={"flex-start"}
      shadow="0"
      onPress={() => {
        navigation.navigate(props.nav);
      }}
    >
      <HStack>
        <Box background={"blue.500"} p={2} rounded="full">
          <Icon name={props.iconName} color={"white"} size={20} />
        </Box>
        <Text
          alignSelf={"center"}
          ml={2}
          fontSize={"xl"}
          fontWeight={"medium"}
          color="blue.500"
          
        >
          {props.names}
        </Text>
      </HStack>
    </Button>
  );
}
