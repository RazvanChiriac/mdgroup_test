const SET_DOG_BREEDS = "setDogBreeds";

const initialState = {
    breeds: {}
};

export function DogsReducer(state = initialState, action) {
    switch (action.type) {
        case SET_DOG_BREEDS: {
            return {
                ...state,
                breeds: action.breeds
            };
        }
        default:
            return state;
    }
}

export function setDogBreeds(breeds) {
    return {
        type: SET_DOG_BREEDS,
        breeds: breeds
    };
}
