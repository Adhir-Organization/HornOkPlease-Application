import { IconButton } from "native-base";
import Icon from "react-native-vector-icons/Feather";
export default function StatusButton() {
  return (
    <IconButton
      icon={<Icon name="alert-circle" color={"white"} size={27} />}
      variant="unstyled"
      background="red.200"
      rounded="full"
      h={16}
      w={16}
      alignItems="center"
      justifyContent={"center"}
    />
  );
}
