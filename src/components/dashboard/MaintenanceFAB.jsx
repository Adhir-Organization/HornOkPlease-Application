import { useNavigation } from "@react-navigation/native";
import { Fab, Pressable } from "native-base";
import Icon from "react-native-vector-icons/Feather";

export default function MaintenanceFAB() {
  const navigation = useNavigation();
  return (
    <>
      <Fab
        icon={<Icon name="alert-triangle" size={24} color="white" />}
        size="lg"
        bottom={20}
        backgroundColor="yellow.500"
        onPress={() => {
          navigation.navigate("DriverMaintenance");
        }}
      />
    </>
  );
}
