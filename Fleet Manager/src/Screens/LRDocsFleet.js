import {
  Box,
  Center,
  Text,
  HStack,
  IconButton,
  VStack,
  Button,
  ScrollView,
} from "native-base";
import React from "react";
import ConsignmentBox from "../../Component/Dashboard/ConsignmentBox";
import Icon from "react-native-vector-icons/EvilIcons";

const LRDocsFleet = () => {
  return (
    <Box safeArea>
      <Box background="#0058DB" padding="3">
        <HStack>
          <Center>
            <Text fontSize="xl" color="white" mx={["110px"]}>
              LR Docs
            </Text>
          </Center>
        </HStack>
      </Box>
      {/* 
      <Box padding="3">
        <HStack>
          <Text fontSize="xl" fontWeight={"bold"} color="black" mx="6">
            Available Trucks
          </Text>
        </HStack>
      </Box> */}

      <ScrollView>
        <Box mx="3" my="4">
          <ConsignmentBox truckName={"Trip ID 1234"} />
          <ConsignmentBox truckName={"Trip ID 1234"} />
          <ConsignmentBox truckName={"Trip ID 1234"} />
          <ConsignmentBox truckName={"Trip ID 1234"} />
          <ConsignmentBox truckName={"Trip ID 1234"} />
          <ConsignmentBox truckName={"Trip ID 1234"} />
          <ConsignmentBox truckName={"Trip ID 1389"} />
        </Box>
        <Box></Box>
      </ScrollView>
    </Box>
  );
};

export default LRDocsFleet;
