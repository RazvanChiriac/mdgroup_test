import { createStore, combineReducers } from "redux";
import { DogsReducer } from "./dogs";

const UserCombined = combineReducers({
    dogs: DogsReducer
});

const allReducers = combineReducers({
    User: UserCombined
});

const rootReducer = (state, action) => {
    return allReducers(state, action);
};

export const Store = createStore(rootReducer);
