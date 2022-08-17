import * as React from "react";
import { StyleSheet, Text, View, Image, Button } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function Dshboard() {

    return (
        <SafeAreaView style={styles.global}>
            <SafeAreaView style={styles.tripData}>
                <Text style={styles.username}>Hello John</Text>
                <Text style={styles.userid}>13sf4556</Text>
            </SafeAreaView>
            <SafeAreaView style={styles.boxes}>
                <SafeAreaView style={styles.box1}>
                    <Text style={styles.liveData}>On-Road expense</Text>
                    <Text style={styles.CTrip}>Current Trip</Text>
                    <Text style={styles.RoadNumber}>455</Text>
                </SafeAreaView>
                <SafeAreaView style={styles.box2}>
                    <Text style={styles.Workshop}>Workshop</Text>
                    <Text style={styles.WData}>Repaired</Text>
                    <Text style={styles.WorkshopNumber}>0</Text>
                </SafeAreaView>
            </SafeAreaView>
            <SafeAreaView style={styles.Shortcuts}>
                <Text style={styles.Short}>Shortcuts</Text>
            </SafeAreaView>
            <SafeAreaView style={styles.helloStarted}>
                {/* TODO: make this button reusable */}
                <Button title="Start Trip" color={"#2871E6"} />
            </SafeAreaView>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    global: {
        backgroundColor: "#0058DB",
        borderBottomRightRadius: 45,
        borderBottomLeftRadius: 45,
        width: 390,
        // marginLeft: 45,
        height: 320,

    },
    tripData: {
        fontSize: 100,
        color: "blue",
        fontWeight: "bold",
        // textAlign: "center",
        // justifyContent: "center",
    },
    username: {
        marginLeft: 20,
        fontSize: 25,
        color: "white",
    },
    userid: {
        marginLeft: 20,
        fontSize: 10,
        color: "white",
    },
    boxes: {
        display: "flex",
        flexDirection: "row",
        // width: 150,
        // backgroundColor: "#FAFAFA",
    },
    box1: {
        backgroundColor: "#FFEEEE",
        width: 160,
        height: 140,
        borderRadius: 20,
        marginLeft: 25,
    },
    box2: {
        backgroundColor: "#D4FFE5",
        width: 160,
        height: 140,
        borderRadius: 20,
        marginLeft: 20,
    },
    liveData: {
        fontSize: 17,
        marginLeft: 9,
    },
    Workshop: {
        fontSize: 17,
        marginLeft: 9
    },
    CTrip: {
        fontSize: 14,
        marginLeft: 10,
    },
    WData: {
        fontSize: 14,
        marginLeft: 10,
    },
    RoadNumber: {
        fontSize: 30,
        padding: 10,
        color: "#FF3838",

    },
    WorkshopNumber: {
        fontSize: 30,
        padding: 10,
        color: "#41AD0E",
    },
    Short: {
        fontSize: 25,
        padding: 20,
    },
    helloStarted: {
        paddingTop: 40,
        paddingRight: 100,
        paddingLeft: 90,
        padding: 50,
    },
});