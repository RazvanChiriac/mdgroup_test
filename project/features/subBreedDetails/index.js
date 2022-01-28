import React from "react";
import { Header } from "../../components/header";
import { useRoute } from "@react-navigation/native";

export const SubBreedDetails = props => {
    const route = useRoute();
    let title = "";

    if (route.params?.breed && route.params?.subBreed) {
        title = route.params.breed + " " + route.params.subBreed;
    }

    return (
        <Header
            backButtonAction={() => props.navigation.goBack()}
            title={title}
            enableBackButton={true}
        ></Header>
    );
};
