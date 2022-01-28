import React, { useEffect, useState } from "react";
import { View, Image } from "react-native";
import { Header } from "../../components/header";
import { useRoute } from "@react-navigation/native";
import { getImagesBySubBreed } from "../../actions";
import { styles } from "./styles";
import { capitalizeFirstLetter } from "../../actions";
import { storeImagesURLInLocalStorage, getImagesFromLocalStorage } from "../../actions";

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
        /** Logic:
         * 1. if the URLs exist in the local storage the get them and set the state
         * 2. if the URLs don't exist then make the api call and store them in the local storage
         */
        async function getSubBreedImages() {
            let localStorageImages = await getImagesFromLocalStorage([
                route.params.subBreed,
                route.params.subBreed + 1
            ]);

            if (!localStorageImages[0][1] && !localStorageImages[1][1]) {
                let result = await getImagesBySubBreed(route.params.breed, route.params.subBreed);
                const firstPair = [route.params.subBreed, result[0]];
                const secondPair = [route.params.subBreed + 1, result[1]];
                await storeImagesURLInLocalStorage([firstPair, secondPair]);

                setImagesUriArray(result);
            } else {
                setImagesUriArray([localStorageImages[0][1], localStorageImages[1][1]]);
            }
        }

        getSubBreedImages();
    }, []);

    return (
        <View style={styles.container}>
            <Header backButtonAction={() => props.navigation.goBack()} title={title} />
            {imagesUriArray.length > 0
                ? imagesUriArray.map((imageURI, key) => (
                      <View style={styles.iconView} key={key}>
                          <Image source={{ uri: imageURI }} style={styles.icon}></Image>
                      </View>
                  ))
                : null}
        </View>
    );
};
