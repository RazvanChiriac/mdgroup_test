import React from "react";
import { Text, View, TouchableOpacity } from "react-native";
import { styles } from "./styles";
import { capitalizeFirstLetter } from "../../actions";

export const DogBreedItem = props => (
    <View style={styles.container}>
        <View style={styles.title}>
            <Text style={styles.titleText}>{capitalizeFirstLetter(props.item.breedName)}</Text>
        </View>

        {props.item.subBreeds?.length > 0
            ? props.item.subBreeds.map((subBreed, key) => (
                  <TouchableOpacity
                      key={key}
                      activeOpacity={0.7}
                      style={styles.subtitle}
                      onPress={() => {
                          props.navigation.navigate("SubBreedDetailsScreen", {
                              breed: props.item.breedName,
                              subBreed: subBreed
                          });
                      }}
                  >
                      <Text style={styles.titleText}>
                          {capitalizeFirstLetter(subBreed) +
                              " " +
                              capitalizeFirstLetter(props.item.breedName)}
                      </Text>
                  </TouchableOpacity>
              ))
            : null}
    </View>
);
