import { Button, Box, HStack, Text } from "native-base";
import { useNavigation } from "@react-navigation/native";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";

export default function ShortcutButton(props) {
  const navigation = useNavigation();
  return (
    <Box flex={1} background="#E0DCDC" p={3} borderRadius="0">
      <HStack>
        <Box pt="1">
          <Icon name="check" size={20} style={{ color: "#808080" }} />
        </Box>
        <Text fontSize="md" pl={3}>
          {" "}
          {props.title}{" "}
        </Text>
      </HStack>
    </Box>
  );
}
