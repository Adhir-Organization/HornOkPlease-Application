import { useSelector } from "react-redux";
import { useNavigation } from "@react-navigation/native";

function OpenRoute({ children }) {

    const navigation = useNavigation();
    const { token } = useSelector(state => state.auth);

    if(token === null) {
        return children;
    }
    else {
        return navigation.navigate("Login");
    }
}

export default OpenRoute;