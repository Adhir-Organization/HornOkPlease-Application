import * as React from "react";
import Login from "./Login";
import { StyleSheet, Text, View, Image, Button } from "react-native";
import {
  NavigationContainer,
  StackActions,
  navigator,
} from "@react-navigation/native";
import { SafeAreaView } from "react-native-safe-area-context";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
export default function GetStarted({ navigation }) {
  const pressHandler = () => {
    // Here we pass the name of navigator from "homeStack.js" file:
    // navigation.navigate(" NAME OF NAVIGATOR ");

    navigation.navigate("Login");
  };

  return (
    <SafeAreaView style={styles.container}>
      <SafeAreaView style={styles.truck}>
        <Image source={require("../assets/images/Truck.png")} />
      </SafeAreaView>
      <SafeAreaView>
        <Text style={styles.heading}>Manage Fleet Easily</Text>
        <Text style={styles.text}>lorem ipsum dolar amit set</Text>
        <Text style={styles.text}>lorem ipsum dolar amit set</Text>
      </SafeAreaView>
      <SafeAreaView style={styles.helloStarted}>
        {/* TODO: make this button reusable */}
        <Button title="Get started" color={"#2871E6"} onPress={pressHandler} />
      </SafeAreaView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    height: hp("70%"),
    width: wp("80%"),
  },
  truck: {
    paddingTop: 0,
    paddingLeft: 20,
  },
  heading: {
    paddingVertical: 20,
    fontSize: 30,
    color: "blue",
    fontWeight: "bold",
    textAlign: "center",
  },
  text: {
    fontSize: 18,
    color: "#222",
    textAlign: "center",
  },
  helloStarted: {
    paddingTop: 40,
    paddingRight: 100,
    paddingLeft: 90,
    padding: 50,
  },
});
