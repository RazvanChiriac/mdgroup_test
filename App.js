import { NavigationContainer } from "@react-navigation/native";
import { Home } from "./project/features/home";
import React from "react";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

const UserStack = createNativeStackNavigator();

export const App = props => {
    return (
        <SafeAreaProvider>
            <SafeAreaView style={{ flex: 1 }} edges={["top"]}>
                <NavigationContainer>
                    <UserStack.Navigator>
                        <UserStack.Screen name={"Home"} component={Home}></UserStack.Screen>
                    </UserStack.Navigator>
                </NavigationContainer>
            </SafeAreaView>
        </SafeAreaProvider>
    );
};
