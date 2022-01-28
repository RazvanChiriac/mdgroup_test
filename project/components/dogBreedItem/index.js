import React from "react";

import { Text, View, TouchableOpacity } from "react-native";
import { styles } from "./styles";
import { capitalizeFirstLetter } from "../../actions";
import PropTypes from "prop-types";
import { SubBreedDetailsScreen } from "./project/screenNames";

export const DogBreedItem = props => (
    <View style={styles.container}>
        <View style={styles.title}>
            <Text style={styles.titleText}>{capitalizeFirstLetter(props.breedName)}</Text>
        </View>

        {props.subBreeds?.length > 0
            ? props.subBreeds.map((subBreed, key) => (
                  <TouchableOpacity
                      key={key}
                      activeOpacity={0.7}
                      style={styles.subtitle}
                      onPress={() => {
                          props.navigation.navigate(SubBreedDetailsScreen, {
                              breed: props.breedName,
                              subBreed: subBreed
                          });
                      }}
                  >
                      <Text style={styles.titleText}>
                          {capitalizeFirstLetter(subBreed) +
                              " " +
                              capitalizeFirstLetter(props.breedName)}
                      </Text>
                  </TouchableOpacity>
              ))
            : null}
    </View>
);

DogBreedItem.defaultProps = {
    subBreeds: []
};

DogBreedItem.propTypes = {
    breedName: PropTypes.string,
    subBreeds: PropTypes.arrayOf(PropTypes.string)
};
