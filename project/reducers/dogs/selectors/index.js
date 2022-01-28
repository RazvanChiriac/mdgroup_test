import { createSelector } from "reselect";

export const getDogBreeds = state => state.User.dogs.breeds;

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
