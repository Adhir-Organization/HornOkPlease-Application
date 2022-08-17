import { StyleSheet, Text, View, Image, TouchableOpacity } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import {} from "react-native-web";
import { COLORS, SIZES } from "../constants/theme";

export default function GetStarted({ navigation }) {
    return (
        <SafeAreaView style={{ flex: 1 }}>
            <View style={styles.container}>
                <Image style={styles.heroImg} source={require("../assets/images/hero.png")} />
                <Text style={styles.heading}>Manage Fleet Easily</Text>
                <Text style={styles.text}>lorem ipsum dolar amit set</Text>
                <Text style={styles.text}>lorem ipsum dolar amit set</Text>
                <TouchableOpacity activeOpacity={0.7} style={styles.btn} onPress={() => navigation.navigate("Login")}>
                    <Text style={styles.btnTxt}>Get Started</Text>
                </TouchableOpacity>
            </View>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#fff",
        alignItems: "center",
        justifyContent: "center",
    },
    heading: {
        fontSize: SIZES.xxl,
        fontWeight: "bold",
        marginTop: 50,
        marginBottom: 20,
        color: COLORS.primaryBlue,
    },
    text: {
        fontSize: SIZES.md,
    },
    btn: {
        width: "70%",
        marginTop: 20,
        backgroundColor: COLORS.primaryBlue,
        borderRadius: 70,
    },
    btnTxt: {
        fontSize: SIZES.md,
        color: "#fff",
        textAlign: "center",
        paddingVertical: 10,
    },
    heroImg: { width: "90%", alignSelf: "center", height: "50%", resizeMode: "contain" },
});
