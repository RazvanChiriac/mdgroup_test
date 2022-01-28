import { StyleSheet } from "react-native";
import normalize from "react-native-normalize";

export const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    title: {
        backgroundColor: "#5c6bc0",
        height: normalize(55),
        width: "100%",
        alignItems: "center",
        justifyContent: "flex-end"
    },
    titleText: {
        fontSize: 24,
        color: "#FFFFFF",
        fontWeight: "700",
        marginBottom: normalize(10)
    },
    containerList: {
        width: "100%",
        backgroundColor: "#CFD8DC"
    }
});
