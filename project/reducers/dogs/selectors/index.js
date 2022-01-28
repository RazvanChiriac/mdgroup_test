import { createSelector } from "reselect";

export const getDogBreeds = state => state.User.dogs.breeds;

/**
 * Converts the object into an array of breed/subbreed pairs
 * Put it in a selector to make sure this logic is not triggered again when the state changes
 * (not really the case here as the only time when the state changes is when data gets stored into the breeds object,
 *  but I found it is a good practice)
 * */
export const convertDogBreedsObjectToArray = createSelector(getDogBreeds, dogBreeds => {
    let dogBreedsArray = [];
    let itemKey = 0;

    if (dogBreeds) {
        Object.keys(dogBreeds).forEach(key => {
            dogBreedsArray.push({
                breedName: key,
                subBreeds: dogBreeds[key],
                key: itemKey + 1
            });
            itemKey = itemKey + 1;
        });
    }

    return dogBreedsArray;
});
