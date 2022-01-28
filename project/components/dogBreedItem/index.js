import React from "react";
import { Text, View } from "react-native";
import { styles } from "./styles";
import { capitalizeFirstLetter } from "../../actions";

export const DogBreedItem = props => (
    <View style={styles.container}>
        <View style={styles.title}>
            <Text style={styles.titleText}>{props.item.breedName}</Text>
        </View>

        {props.item.subBreeds?.length > 0
            ? props.item.subBreeds.map((subBreed, key) => (
                  <View key={key} style={styles.subtitle}>
                      <Text style={styles.titleText}>
                          {capitalizeFirstLetter(subBreed) + " " + props.item.breedName}
                      </Text>
                  </View>
              ))
            : null}
    </View>
);
