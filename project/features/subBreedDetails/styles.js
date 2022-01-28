import { StyleSheet } from "react-native";
import normalize from "react-native-normalize";

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#CFD8DC"
    },
    iconView: {
        width: "75%",
        height: "30%",
        alignSelf: "center",
        alignItems: "flex-start",
        marginTop: normalize(5)
    },
    icon: {
        resizeMode: "contain",
        height: "100%",
        width: "100%"
    }
});
