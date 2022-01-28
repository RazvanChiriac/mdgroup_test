import { StyleSheet } from "react-native";
import normalize from "react-native-normalize";

export const styles = StyleSheet.create({
    container: {
        backgroundColor: "#5c6bc0",
        height: normalize(55),
        width: "100%",
        flexDirection: "row",
        alignItems: "flex-end"
    },
    title: {
        justifyContent: "center",
        alignItems: "center",
        minWidth: "65%",
        paddingBottom: "1%"
    },

    titleText: {
        fontSize: 24,
        color: "#FFFFFF",
        fontWeight: "700"
    },
    backButton: {
        flexDirection: "row",
        height: normalize(30),
        width: "20%",
        alignItems: "center",
        paddingBottom: normalize(5)
    },

    backIcon: {
        resizeMode: "contain",
        height: "100%",
        width: "30%"
    },
    backButtonText: {
        color: "#FFFFFF",
        fontWeight: "500",
        textAlign: "center",
        fontSize: 16
    }
});
