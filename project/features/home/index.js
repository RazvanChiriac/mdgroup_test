import React from "react";
import { Text, View, FlatList } from "react-native";
import { connect } from "react-redux";
import { convertDogBreedsObjectToArray } from "../../reducers/dogs/selectors";
import { DogBreedItem } from "../../components/dogBreedItem";
import { styles } from "./styles";

const Home = props => {
    return (
        <View style={styles.container}>
            <View style={styles.title}>
                <Text style={styles.titleText}>Doggy McDogFace</Text>
            </View>
            <FlatList
                style={styles.containerList}
                data={props.dogsBreeds}
                renderItem={({ item }) => <DogBreedItem item={item}></DogBreedItem>}
            ></FlatList>
        </View>
    );
};

const mapStateToProps = state => {
    return {
        dogsBreeds: convertDogBreedsObjectToArray(state)
    };
};
const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(Home);
