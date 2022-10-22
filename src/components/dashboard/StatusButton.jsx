import AsyncStorage from "@react-native-async-storage/async-storage";
import { useNavigation } from "@react-navigation/native";
import { IconButton } from "native-base";
import { useContext } from "react";
import Icon from "react-native-vector-icons/Feather";
import authContext from "../../context/authContext";

export default function StatusButton(props) {
  const { setIsLoggedIn } = useContext(authContext);
  const handleLogout = async () => {
    await AsyncStorage.removeItem("authToken");
    setIsLoggedIn(false);
    console.log(await AsyncStorage.getItem("token"));
  };
  return (
    <IconButton
      icon={<Icon name={props.name} color={"white"} size={27} />}
      variant="unstyled"
      background={props.colors}
      rounded="full"
      h={16}
      w={16}
      alignItems="center"
      justifyContent={"center"}
      onPress={handleLogout}
    />
  );
}
