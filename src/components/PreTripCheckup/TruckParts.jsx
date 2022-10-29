import { Button, Box, HStack, Text } from "native-base";
import { useNavigation } from "@react-navigation/native";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";

export default function ShortcutButton(props) {
    const navigation = useNavigation();
    return (
        <Box
            flex={1}
            background="#E0DCDC"
            p="2"
            mt="6"
            ml="0"
            mr="0"
            borderRadius="0"

        >
            <Text> {props.title} </Text>
        </Box>
    );
}