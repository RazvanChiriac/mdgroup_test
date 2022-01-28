import { StyleSheet } from "react-native";
import normalize from "react-native-normalize";

export const styles = StyleSheet.create({
    container: {
        backgroundColor: "#5c6bc0",
        height: normalize(55),
        width: "100%",
        flexDirection: "row",
        alignItems: "flex-end",
        paddingBottom: "2%"
    },
    title: {
        fontSize: 24,
        color: "#FFFFFF",
        fontWeight: "700"
        //marginLeft: "20%"
    },
    backButton: {
        flexDirection: "row",
        height: "100%",
        width: "100%",
        alignItems: "center"
    },
    headerLeft: {
        width: "15%",
        height: normalize(30)
    },

    backIcon: {
        resizeMode: "contain",
        height: "100%",
        width: "30%"
    },
    backButtonText: {
        color: "#FFFFFF",
        fontWeight: "700",
        textAlign: "center"
    }
});
