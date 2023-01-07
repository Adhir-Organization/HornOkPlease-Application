import {
  Box,
  Center,
  Text,
  HStack,
  iconButton,
  VStack,
  Button,
  ScrollView,
} from "native-base";
import React from "react";
import OnRoadBox from "../../Component/Dashboard/OnRoadBox";
import { useNavigation } from "@react-navigation/native";

const OnroadTrucks = () => {
  const navigation = useNavigation();
  const available = [
    {
      // screenNavigation :navigation.navigate("OnRoadTrucksDetails"),
      screenNavigation: "OnRoadTrucksDetails",
      truckName: "Tata",
      truckId: "5515s54154",
      icon: "truck",
      from: "Junagadh",
      to: "dubai",
      color: "#D2D2D2",
      btnColor: "#FFBE17",
      update: "updated 3 hrs ago",
    },

    {
      // screenNavigation: navigation.navigate("OnRoadTrucksDetails"),
      screenNavigation: "OnRoadTrucksDetails",
      truckName: "Volvo",
      truckId: "5515s54154",
      icon: "truck",
      from: "Junagadh",
      to: "dubai",
      color: "#D2D2D2",
      btnColor: "#FFBE17",
      update: "updated 3 hrs ago",
    },
    {
      screenNavigation: "OnRoadTrucksDetails",
      // screenNavigation: navigation.navigate("OnRoadTrucksDetails"),

      truckName: "Volvo",
      truckId: "5515s54154",
      icon: "truck",
      from: "Junagadh",
      to: "dubai",
      color: "#D2D2D2",
      btnColor: "#FFBE17",
      update: "updated 3 hrs ago",
    },
    {
      screenNavigation: "OnRoadTrucksDetails",
      //   screenNavigation: navigation.navigate("OnRoadTrucksDetails"),

      truckName: "tata",
      truckId: "5515s54154",
      icon: "truck",
      from: "Junagadh",
      to: "dubai",
      color: "#D2D2D2",
      btnColor: "#FFBE17",
      update: "updated 3 hrs ago",
    },
  ];

  return (
    <Box safeArea>
      <Box background="#0058DB" padding="3">
        <HStack>
          <Center>
            <Text fontSize="xl" color="white" mx={["115px"]}>
              On Road Trucks
            </Text>
          </Center>
        </HStack>
      </Box>
      <ScrollView mb="20" mt="5">
        {available.map((available, index) => (
          <OnRoadBox
            truckId={available.truckId}
            truckName={available.truckName}
            icon={available.icon}
            from={available.from}
            to={available.to}
            color={available.color}
            btnColor={available.btnColor}
            update={available.update}
            screenNavigation={available.screenNavigation}
            key={index}
          />
        ))}
      </ScrollView>
    </Box>
  );
};

export default OnroadTrucks;
