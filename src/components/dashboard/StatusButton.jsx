import { IconButton } from "native-base";
import Icon from "react-native-vector-icons/Feather";
export default function StatusButton(props) {
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
    />
  );
}
