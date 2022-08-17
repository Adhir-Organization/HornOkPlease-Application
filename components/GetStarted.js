import * as React from "react";
import Login from "./Login";
import { StyleSheet, Text, View, Image, Button } from "react-native";
import { NavigationContainer, StackActions, navigator } from "@react-navigation/native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function GetStarted({ navigation }) {
    return (
        // <SafeAreaView>
        <View style={styles.container}>
            <Image style={styles.heroImg} source={require("../assets/images/hero.png")} />
            <Text style={styles.heading}>Manage Fleet Easily</Text>
            <Text style={styles.text}>lorem ipsum dolar amit set</Text>
            <Text style={styles.text}>lorem ipsum dolar amit set</Text>
            <Button title="Get started" color={"#2871E6"} onPress={() => navigation.navigate("Login")} />
        </View>
        // {/* </SafeAreaView> */}
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#fff",
        alignItems: "center",
        justifyContent: "center",
    },
    heroImg: { width: "90%", alignSelf: "center", height: "50%", resizeMode: "contain" },
});
