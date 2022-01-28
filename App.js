import React, { useEffect } from "react";
import { NavigationContainer } from "@react-navigation/native";
import Home from "./project/features/home";
import { SubBreedDetails } from "./project/features/subBreedDetails";

import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Provider } from "react-redux";
import { Store } from "./project/reducers";
import { fetchDogBreeds } from "./project/actions";

const UserStack = createNativeStackNavigator();

export const App = props => {
    useEffect(() => {
        async function fetchData() {
            await fetchDogBreeds();
        }
        fetchData();
    }, []);

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
                            <UserStack.Screen name={"Home"} component={Home} />
                            <UserStack.Screen
                                name={"SubBreedDetailsScreen"}
                                component={SubBreedDetails}
                            />
                        </UserStack.Navigator>
                    </NavigationContainer>
                </Provider>
            </SafeAreaView>
        </SafeAreaProvider>
    );
};
