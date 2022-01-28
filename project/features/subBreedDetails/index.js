import React, { useEffect, useState } from "react";
import { View, Image } from "react-native";
import { Header } from "../../components/header";
import { useRoute } from "@react-navigation/native";
import { getImagesBySubBreed } from "../../actions";
import { styles } from "./styles";
import { capitalizeFirstLetter } from "../../actions";

export const SubBreedDetails = props => {
    const route = useRoute();
    const [imagesUriArray, setImagesUriArray] = useState([]);
    let title = "";

    if (route.params?.breed && route.params?.subBreed) {
        title =
            capitalizeFirstLetter(route.params.breed) +
            " " +
            capitalizeFirstLetter(route.params.subBreed);
    }

    useEffect(() => {
        async function getSubBreedImages() {
            let result = await getImagesBySubBreed(route.params.breed, route.params.subBreed);

            setImagesUriArray(result);
        }

        getSubBreedImages();
    }, [route.params.subBreed, route.params.breed]);

    return (
        <View style={styles.container}>
            <Header backButtonAction={() => props.navigation.goBack()} title={title} />
            {imagesUriArray.length > 0
                ? imagesUriArray.map((imageURI, key) => (
                      <View style={styles.iconView}>
                          <Image source={{ uri: imageURI }} style={styles.icon}></Image>
                      </View>
                  ))
                : null}
        </View>
    );
};
