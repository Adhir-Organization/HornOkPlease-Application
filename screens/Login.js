import {
  StyleSheet,
  View,
  Image,
  Button,
  ScrollView,
  Text,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
// import { TextInput } from "react-native-paper";

// import Icon from "react-native-vector-icons/MaterialIcons";

// UI components
// import { Text } from "react-native-paper";
import { SIZES, ICONS, COLORS } from "../constants/theme";
// import { useNavigation } from "@react-navigation/native";

export default function Login({ navigation }) {
  const pressHandler = () => {
    // Here we pass the name of navigator from "homeStack.js" file:
    // navigation.navigate(" NAME OF NAVIGATOR ");
    navigation.navigate("OtpVerification");
  };
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View style={{ padding: 20 }}>
        <Text style={{ fontSize: SIZES.xl, textAlign: "center" }}>
          Welcome Back!
        </Text>
        <Text style={{ fontSize: SIZES.base, textAlign: "center" }}>
          Login to your account to continue
        </Text>
      </View>
      <View>
        {/* <Icon
          name={ICONS.loginIcon}
          size={110}
          color={COLORS.primaryBlue}
          style={{ textAlign: "center" }}
        /> */}
      </View>
      <SafeAreaView>
        <Text style={styles.text3}>Enter your mobile number</Text>
        <Text style={{ paddingLeft: 60 }}>
          We will send you a verification code
        </Text>
        <Text style={{ paddingTop: 30, paddingLeft: 70, fontWeight: "200" }}>
          Mobile Number
        </Text>
        {/* <TextInput style={styles.textIn} placeholder="+91 99999999999"></TextInput> */}
        {/* <TextInput label="Email" /> */}
        <SafeAreaView
          style={{
            paddingRight: 120,
            paddingTop: 10,
            paddingLeft: 120,
          }}
        >
          {/* TODO OTP functionality */}
          <Button title="Get OTP" color={"#2871E6"} onPress={pressHandler} />
          {/* TODO forgot psw and contact owner in one line */}
          <Text style={{ paddingTop: 120 }}> Forgot Password?</Text>
          <Text> Contact Owner</Text>
        </SafeAreaView>
      </SafeAreaView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  text1: {
    paddingTop: 30,
    fontSize: 36,
    color: "#0058DB",
    textAlign: "center",
    fontWeight: "bold",
  },
  text2: {
    paddingLeft: 75,
  },
  phoneImage: {
    paddingTop: 27,
    paddingLeft: 145,
  },
  text3: {
    fontSize: 24,
    fontStyle: "normal",
    fontWeight: "bold",
    paddingLeft: 33,
    paddingTop: 15,
  },
  textIn: {
    borderWidth: 1,
    borderColor: "#0058DB",
    borderRadius: 5,
    paddingTop: 10,
    marginTop: 10,
    marginLeft: 70,
    marginRight: 70,
  },
});
