import React from "react";
import { Text, View, FlatList } from "react-native";
import { connect } from "react-redux";

const Home = props => {
    return (
        <View
            style={{
                backgroundColor: "#5c6bc0",
                height: 75,
                width: "100%",
                alignItems: "center",
                justifyContent: "flex-end"
            }}
        >
            <Text style={{ fontSize: 24, color: "#FFFFFF", fontWeight: "700", marginBottom: 5 }}>
                Doggy McDogFace
            </Text>
        </View>
    );
};

const mapStateToProps = state => {
    return {
        dogsBreeds: state.User.dogs.breeds
    };
};
const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(Home);
