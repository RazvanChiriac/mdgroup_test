import React from "react";
import { Text, View, TouchableOpacity } from "react-native";
import { styles } from "./styles";
import { capitalizeFirstLetter } from "../../actions";

function onSubBreedPress(breed, subBreed) {
    console.log(breed, subBreed);
}

export const DogBreedItem = props => (
    <View style={styles.container}>
        <View style={styles.title}>
            <Text style={styles.titleText}>{props.item.breedName}</Text>
        </View>

        {props.item.subBreeds?.length > 0
            ? props.item.subBreeds.map((subBreed, key) => (
                  <TouchableOpacity
                      key={key}
                      style={styles.subtitle}
                      onPress={() => {
                          onSubBreedPress(props.item.breedName, subBreed);
                          props.navigation.navigate("SubBreedDetailsScreen", {
                              breed: props.item.breedName,
                              subBreed: subBreed
                          });
                      }}
                  >
                      <Text style={styles.titleText}>
                          {capitalizeFirstLetter(subBreed) + " " + props.item.breedName}
                      </Text>
                  </TouchableOpacity>
              ))
            : null}
    </View>
);
