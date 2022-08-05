import { StyleSheet, Text, View } from "react-native";

export default function Login() {
    return (
        <View>
            <Text style={styles.text}>LOGIN</Text>
        </View>
    );
}

const styles = StyleSheet.create({

    text: {
        marginVertical: 40,
        fontSize: 18,
        color: "#222",
        textAlign: "center",
    },
});