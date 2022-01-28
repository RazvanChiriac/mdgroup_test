import React, { useEffect } from "react";
import { NavigationContainer } from "@react-navigation/native";
import Home from "./project/features/home";

import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import axios from "axios";
import { Provider } from "react-redux";
import { Store } from "./project/reducers";
import { setDogBreeds } from "./project/reducers/dogs";

const UserStack = createNativeStackNavigator();

export const App = props => {
    useEffect(() => {
        axios.get("https://dog.ceo/api/breeds/list/all").then(function (response) {
            Store.dispatch(setDogBreeds(response.data.message));
            console.log(response);
        });
    });
    return (
        <SafeAreaProvider>
            <SafeAreaView style={{ flex: 1, backgroundColor: "#5c6bc0" }} edges={["top"]}>
                <Provider store={Store}>
                    <NavigationContainer>
                        <UserStack.Navigator
                            screenOptions={{
                                headerShown: false
                            }}
                        >
                            <UserStack.Screen name={"Home"} component={Home}></UserStack.Screen>
                        </UserStack.Navigator>
                    </NavigationContainer>
                </Provider>
            </SafeAreaView>
        </SafeAreaProvider>
    );
};
