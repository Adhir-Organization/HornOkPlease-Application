import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { StyleSheet, Text, View, Image, Button } from "react-native";


export default function OtpVerification({ navigation }) {
    //   const otpInput = useRef(null);

    //   const clearText = () => {
    //     otpInput.current.clear();
    //   };

    //   const setText = () => {
    //     otpInput.current.setValue("1234");
    //   };
    const pressHandler = () => {
        navigation.navigate("Dashboard");
    };

    return (
        <SafeAreaView>
            <Text style={styles.text1}>Verification</Text>
            <Image style={styles.image1} source={require("../assets/images/iconoir_password-pass.png")} />
            <Text style={styles.text2}>Enter OTP code sent to your number</Text>
            <Text style={styles.text3}>+91-9999999999</Text>
            <SafeAreaView style={styles.otp1}>

                <Text style={styles.text4}>Resend OTP</Text>
            </SafeAreaView>

            <SafeAreaView style={styles.button}>
                <Button title="Login" onPress={pressHandler} />
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
    image1: {
        marginTop: 40,
        alignSelf: "center",
    },
    text2: {
        marginTop: 40,
        textAlign: "center",
    },
    text3: {
        fontWeight: "bold",
        fontSize: 20,
        textAlign: "center",
    },
    otp1: {
        paddingLeft: 40,
        paddingRight: 40,
    },
    otpText: {
        borderWidth: 1,
        margin: 10,
        borderColor: "#0058DB",
        padding: 10,
    },
    text4: {
        margin: 9,
    },
    button: {
        paddingTop: 20,
        paddingRight: 100,
        paddingLeft: 90,
        padding: 50,
        margin: 30,
    },
});
