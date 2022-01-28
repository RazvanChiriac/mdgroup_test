import { StyleSheet } from "react-native";
import normalize from "react-native-normalize";

export const styles = StyleSheet.create({
    container: {
        width: "100%",
        borderTopWidth: 1,
        borderTopColor: "#FFFFFF"
    },
    title: {
        height: normalize(40),
        backgroundColor: "#566c76",
        justifyContent: "center",
        paddingLeft: "3%"
    },
    titleText: {
        color: "#FFFFFF",
        fontSize: 18
    },
    subtitle: {
        height: normalize(40),
        backgroundColor: "#78909C",
        justifyContent: "center",
        paddingLeft: "6%",
        borderTopWidth: 1,
        borderTopColor: "#FFFFFF"
    }
});
