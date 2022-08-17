import { StyleSheet, Text, View, Image, Button } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function GetStarted({ navigation }) {
    const pressHandler = () => {
        // Here we pass the name of navigator from "homeStack.js" file:
        // navigation.navigate(" NAME OF NAVIGATOR ");
        navigation.navigate("Login");
    };

    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.truck}>
                <Image source={require("../assets/images/Truck.png")} />
            </View>
            <View>
                <Text style={styles.heading}>Manage Fleet Easily</Text>
                <Text style={styles.text}>lorem ipsum dolar amit set</Text>
                <Text style={styles.text}>lorem ipsum dolar amit set</Text>
            </View>
            <View style={styles.helloStarted}>
                {/* TODO: make this button reusable */}
                <Button title="Get started" color={"#2871E6"} onPress={pressHandler} />
            </View>
        </SafeAreaView>
    );
}

// TODO: create variable and pass color string.

const styles = StyleSheet.create({
    container: {
        // height: hp("100%"),
        // width: wp("100%"),
    },
    truck: {
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
