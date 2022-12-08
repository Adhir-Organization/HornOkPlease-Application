import React from "react";

import { Box, Center, Text, HStack, ScrollView, Button } from "native-base";
import Icon from "react-native-vector-icons/EvilIcons";
import TruckBox from "../../Component/Dashboard/TruckBox";
import Graph from "../../Component/Dashboard/Graph";
import { useNavigation } from "@react-navigation/native";




const DashboardFleet = () => {
  const navigation = useNavigation({});
  return (
    <Box safeArea>

      <Box background="#0058DB" padding="3">
        <HStack>
          <Icon name="navicon" size={30} color={"black"} />
          <Center>
            <Text fontSize="xl" color="white" mx="24">
              Dashboard
            </Text>
          </Center>
        </HStack>
      </Box>
      <ScrollView>
        <Box mx="5" my="4">
          <TruckBox
            iconName={"road"}
            number={"10"}
            name={"On-Road"}
            color={"green.200"}
            btnColor={"#279600"}
          />
          <TruckBox
            iconName={"truck"}
            number={"10"}
            name={"Available"}
            color={"orange.200"}
            btnColor={"orange.500"}
          />
          <TruckBox
            iconName={"road"}
            number={"10"}
            name={"In-Workshop"}
            color={"#FFBCBC"}
            btnColor={"#FF3E3E"}
          />
        </Box>
        <Box>
          <Text bold fontSize="24" mx="8">
            Accounts
          </Text>
          <Box borderColor="amber.500" borderWidth="1" mx="4">
            <Graph />
          </Box>

          <Button
            my="1/6"
            size="lg"
            onPress={() => navigation.navigate("ExpenseSummary")}>
            Hello 
         </Button>

        </Box>
      </ScrollView>
      {/* </Stack.Navigator> */}
    </Box>
  );
};

export default DashboardFleet;
