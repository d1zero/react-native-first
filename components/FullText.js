import React from "react";
import { StyleSheet, View, Text, Image } from "react-native";
import { globalStyles } from "../styles/style";

export default function FullText({ route }) {
    return (
        <View style={globalStyles.main}>
            <Image source={{ uri: route.params.img }} style={styles.image} />
            <Text style={[globalStyles.title, styles.title]}>
                {route.params.title}
            </Text>
            <Text style={styles.fullText}>{route.params.text}</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    title: {
        marginTop: 25,
        fontSize: 30,
    },
    image: {
        width: "100%",
        height: 200,
    },
    fullText: {
        fontFamily: "mt-light",
        fontSize: 16,
        textAlign: "center",
        marginTop: 20,
        color: "#f55151",
    },
});
