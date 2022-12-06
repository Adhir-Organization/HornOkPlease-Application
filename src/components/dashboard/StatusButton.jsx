import AsyncStorage from "@react-native-async-storage/async-storage";
import { useNavigation } from "@react-navigation/native";
import { IconButton } from "native-base";
import { useState } from "react";
import { useContext } from "react";
import Icon from "react-native-vector-icons/Feather";
import authContext from "../../context/authContext";

export default function StatusButton(props) {
  return (
    <IconButton
      icon={<Icon name={props.name} color={"white"} size={27} />}
      variant="unstyled"
      background={props.activeStatus === props.index ? props.colors : "#808080"}
      rounded="full"
      h={16}
      w={16}
      alignItems="center"
      justifyContent={"center"}
      onPress={() => {
        props.setActiveStatus(props.index);
        // handleLogout();
      }}
    />
  );
}
