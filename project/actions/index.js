import axios from "axios";
import { setDogBreeds } from "../reducers/dogs";
import { Store } from "../reducers";

const apiURL = "https://dog.ceo/api";
const dogBreedsURL = "/breeds/list/all";

export function capitalizeFirstLetter(string) {
    return string[0].toUpperCase() + string.slice(1);
}

export async function fetchDogBreeds() {
    const URL = apiURL + dogBreedsURL;
    let result = await axios.get(URL);
    if (result.status == "200" && result.data.status == "success") {
        Store.dispatch(setDogBreeds(result.data.message));
    }
}

export async function getImagesBySubBreed(breed, subBreed, imagesNumber = 2) {
    const URL = apiURL + "/breed/" + breed + "/" + subBreed + "/images/random/" + imagesNumber;
    console.log(URL);
    let result = await axios.get(URL);

    if (result.status == "200" && result.data.status == "success") {
        return result.data.message;
    } else return [];
}
