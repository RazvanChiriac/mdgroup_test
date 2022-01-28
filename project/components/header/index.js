import React from "react";
import { Text, View, Image, Pressable } from "react-native";
import { styles } from "./styles";

export const Header = props => (
    <View style={styles.container}>
        <View style={styles.headerLeft}>
            {props.enableBackButton ? (
                <Pressable style={styles.backButton} onPress={() => props.backButtonAction()}>
                    <Image style={styles.backIcon} source={require("./icons/back_arrow.png")} />
                    <Text style={styles.backButtonText}>Back</Text>
                </Pressable>
            ) : null}
        </View>
        <View style={{ width: "70%", justifyContent: "center", alignItems: "center" }}>
            <Text style={styles.title}>{props.title}</Text>
        </View>
    </View>
);
