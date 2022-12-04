import { Button, Box, HStack, Text } from "native-base";
import { useNavigation } from "@react-navigation/native";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";

export default function ShortcutButton(props) {
  // console.log(props.data);
  const navigation = useNavigation();
  return (
    <Button
      onPress={() =>
        navigation.navigate("IndividualCheckups", { data: props.data })
      }
      justifyContent={"flex-start"}
      flex={1}
      background="#E0DCDC"
      p={3}
      borderRadius="0"
    >
      <HStack>
        <Box pt="1">
          <Icon name="check" size={20} style={{ color: "#808080" }} />
        </Box>
        <Text fontSize="md" pl={3}>
          {" "}
          {props.data.name}
        </Text>
      </HStack>
    </Button>
  );
}
