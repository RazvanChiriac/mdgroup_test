import React, { useEffect } from "react";
import { NavigationContainer } from "@react-navigation/native";
import Home from "./project/features/home";
import { SubBreedDetails } from "./project/features/subBreedDetails";

import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Provider } from "react-redux";
import { Store } from "./project/reducers";
import { fetchDogBreeds } from "./project/actions";
import localStorage from "./project/localStorage";
import { SubBreedDetailsScreen, HomeScreen } from "./project/screenNames";

const UserStack = createNativeStackNavigator();

const SafeArea = props => (
    <SafeAreaProvider>
        <SafeAreaView style={{ flex: 1, backgroundColor: "#5c6bc0" }} edges={["top"]}>
            {props.children}
        </SafeAreaView>
    </SafeAreaProvider>
);

export const App = props => {
    useEffect(() => {
        async function fetchData() {
            await fetchDogBreeds();
        }
        fetchData();

        return async () => {
            await localStorage.clearLocalStorage();
        };
    }, []);

    return (
        <SafeArea>
            <Provider store={Store}>
                <NavigationContainer>
                    <UserStack.Navigator
                        screenOptions={{
                            headerShown: false
                        }}
                    >
                        <UserStack.Screen name={HomeScreen} component={Home} />
                        <UserStack.Screen
                            name={SubBreedDetailsScreen}
                            component={SubBreedDetails}
                        />
                    </UserStack.Navigator>
                </NavigationContainer>
            </Provider>
        </SafeArea>
    );
};
