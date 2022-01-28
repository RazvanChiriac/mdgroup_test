import React from "react";
import { Text, View, Image, Pressable } from "react-native";
import { styles } from "./styles";

export const Header = props => (
    <View style={styles.container}>
        <Pressable style={styles.backButton} onPress={() => props.backButtonAction()}>
            <Image style={styles.backIcon} source={require("./icons/back_arrow.png")} />
            <Text style={styles.backButtonText}>Back</Text>
        </Pressable>

        <View style={styles.title}>
            <Text style={styles.titleText}>{props.title}</Text>
        </View>
    </View>
);
