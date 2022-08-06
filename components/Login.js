import { StyleSheet, Text, View, Image, TextInput, Button } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import {
  NavigationContainer,
  StackActions,
  navigator,
} from "@react-navigation/native";
export default function Login({ navigation }) {
  const pressHandler = () => {
    // Here we pass the name of navigator from "homeStack.js" file:
    // navigation.navigate(" NAME OF NAVIGATOR ");

    navigation.navigate("Otpver");
  };
  return (
    <SafeAreaView>
      <Text style={styles.text1}>Welcome Back!</Text>
      <Text style={styles.text2}>Login to your account to continue</Text>
      <SafeAreaView style={styles.phoneImage}>
        <Image
          source={require("../assets/images/ic_baseline-mobile-friendly.png")}
        />
      </SafeAreaView>
      <SafeAreaView>
        <Text style={styles.text3}>Enter your mobile number</Text>
        <Text style={{ paddingLeft: 60 }}>
          We will send you a verification code
        </Text>
        <Text style={{ paddingTop: 30, paddingLeft: 70, fontWeight: "200" }}>
          Mobile Number
        </Text>
        <TextInput
          style={styles.textIn}
          placeholder="+91 99999999999"
        ></TextInput>
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
