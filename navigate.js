import React from "react";
import Main from "./components/Main";
import FullText from "./components/FullText";

import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";

const Stack = createStackNavigator();

export default function Navigate() {
    return (
        <NavigationContainer>
            <Stack.Navigator
                screenOptions={{
                    headerTitleStyle: {},
                }}
            >
                <Stack.Screen
                    name="Main"
                    component={Main}
                    options={{
                        title: "Главная",
                        headerStyle: {
                            backgroundColor: "#eb5d3d",
                            height: 120,
                        },
                        headerTitleStyle: {
                            fontWeight: "normal",
                        },
                    }}
                />
                <Stack.Screen
                    name="FullText"
                    component={FullText}
                    options={{ title: "Статья" }}
                />
            </Stack.Navigator>
        </NavigationContainer>
    );
}
