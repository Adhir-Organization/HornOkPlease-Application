import { Box, HStack, Text } from "native-base";
import Icon from "react-native-vector-icons/Feather";

export default function HeroCard(props) {
  return (
    <>
      <Box
        p="2"
        borderRadius="xl"
        w="1/2"
        background={props.background}
        shadow={"3"}
      >
        <Box>
          <Icon name="dollar-sign" size={20} />
          <Text fontSize="md" fontWeight="medium">
            On-road Expense
          </Text>
          <Text fontSize="sm" mt={-1}>
            Current Trip
          </Text>
        </Box>
        <Box>
          {/* Amount */}
          <Text fontSize="2xl" color={"#FF3838"} fontWeight="bold" mt={"2"}>
            40,000
          </Text>
        </Box>
      </Box>
    </>
  );
}
