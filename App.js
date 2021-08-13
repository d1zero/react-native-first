import React, { useState } from "react";
import AppLoading from "expo-app-loading";
import * as Font from "expo-font";
import MainStack from "./navigate";

const fonts = () =>
    Font.loadAsync({
        "mt-bold": require("./assets/fonts/Montserrat-Bold.ttf"),
        "mt-light": require("./assets/fonts/Montserrat-Light.ttf"),
    });

export default function App() {
    const [loading, setLoading] = useState(true);

    if (loading) {
        return (
            <AppLoading
                startAsync={fonts}
                onFinish={() => setLoading(false)}
                onError={console.warn}
            />
        );
    } else {
        return <MainStack />;
    }
}
