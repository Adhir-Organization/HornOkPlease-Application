import React from "react";
import { ReloadInstructions } from "react-native/Libraries/NewAppScreen";
import {
  Box,
  Text,
  Center,
  ScrollView,
  VStack,
  HStack,
  IconButton,
} from "native-base";
import Icon from "react-native-vector-icons/Ionicons";
export default function Contacts() {
  const Header = () => {
    return <Box background="#0058DB">Contacts</Box>;
  };
  const HeroBox = () => {
    return (
      <Box background="#E0DCDC" p="0" m="6" borderRadius="7">
        <Box>
          <HStack>
            <IconButton h={16}>
              <Icon
                name="person-circle-sharp"
                size={43}
                style={{ color: "#FFBE17" }}
              />
            </IconButton>
            <VStack>
              <Text fontSize="md" fontWeight="medium" pt={2} paddingLeft={4}>
                Tyre Shop
              </Text>
              <Text fontSize="xs" pl={4}>
                +9100299209039
              </Text>
            </VStack>
          </HStack>
        </Box>
        {/*  *<Box>
          <Icon name="rupee-sign" size={20} />
          <Text fontSize="md" fontWeight="medium">
            On-road Expense
          </Text>
          <Text fontSize="sm" mt={-1}>
            Current Trip
          </Text>
        </Box>
        <Box>
          {/* Amount */}
        {/* <Text fontSize="2xl" color={"#FF3838"} fontWeight="bold" mt={"2"}>
            40,000
          </Text>
        </Box>/} */}
      </Box>
      //<Box background="#F9F9F9" p="3" borderRadius="20"></Box>
    );
  };
  return (
    <Box safeArea>
      <VStack space={5}>
        <Box background="#0058DB" padding="3">
          <Center>
            <Text fontSize="xl" color="white">
              Contacts
            </Text>
          </Center>
        </Box>
        <ScrollView>
          <VStack space={2}>
            <HeroBox />
          </VStack>
        </ScrollView>
      </VStack>
    </Box>
  );
}
