import * as React from "react";
import Login from "./Login";
import { StyleSheet, Text, View, Image, Button } from "react-native";
import { NavigationContainer, StackActions, navigator } from "@react-navigation/native";

export default function Getstarted({ navigation }) {


    const pressHandler = () => {
        // Here we pass the name of navigator from "homeStack.js" file:
        // navigation.navigate(" NAME OF NAVIGATOR ");

        navigation.navigate('Login')
    }

    return (
        <View>
            <Image source={require("../assets/images/hero.png")} style={styles.image} />
            <View>
                <Text style={styles.heading}>Manage Fleet Easily</Text>
                <Text style={styles.text}>lorem ipsum dolar amit set</Text>
                <Text style={styles.text}>lorem ipsum dolar amit set</Text>
            </View>
            <View style={styles.hellostarted}>
                {/* TODO: make this button reusable */}
                <Button title="Get started" color={"#2871E6"} onPress={pressHandler} />
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    heading: {
        paddingVertical: 20,
        fontSize: 20,
        color: "blue",
        fontWeight: "bold",
        textAlign: "center",
    },
    text: {
        fontSize: 18,
        color: "#222",
        textAlign: "center",
    },
    hellostarted: {
        paddingTop: 40,
        paddingRight: 100,
        paddingLeft: 90,
        padding: 50,
    },
});
