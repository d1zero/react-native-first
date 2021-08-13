import React, { useState } from "react";
import {
    StyleSheet,
    View,
    Text,
    Image,
    TouchableOpacity,
    FlatList,
    Modal,
} from "react-native";
import { AntDesign, Entypo } from "@expo/vector-icons";
import { globalStyles } from "../styles/style";
import Form from "./Form";

export default function Main({ navigation }) {
    const [news, setNews] = useState([
        {
            id: 1,
            title: "Google",
            preview: "Goooogle",
            text: "Gooooooooooooogle",
            img: "https://gdenahoditsya.ru/wp-content/uploads/2019/06/Google_9.jpg",
        },
        {
            id: 2,
            title: "Apple",
            preview: "Appple",
            text: "Apppppppple",
            img: "https://gazetadaily.ru/wp-content/uploads/2019/10/apple-store-logo.jpg",
        },
        {
            id: 3,
            title: "Samsung",
            preview: "Samsuuung",
            text: "Samsuuuuuuuuung",
            img: "https://h-it.ru/uploads/2021/03/4102dd0879a080414afc6a6d9ac68d84.jpg",
        },
    ]);

    const [visible, setVisible] = useState(false);

    const addArticle = (article) => {
        article.id = (news[news.length - 1].id + 1).toString();
        console.log(article);
        setNews((list) => {
            return [...list, article];
        });
        setVisible(false);
    };

    return (
        <View style={globalStyles.main}>
            <Modal visible={visible}>
                <View style={globalStyles.main}>
                    <Entypo
                        name="circle-with-cross"
                        size={24}
                        color="black"
                        style={styles.closeIcon}
                        onPress={() => setVisible(false)}
                    />
                    <Text style={styles.title}>Добавление статей</Text>
                    <Form addArticle={addArticle} />
                </View>
            </Modal>
            <AntDesign
                name="pluscircleo"
                size={24}
                color="black"
                style={styles.addIcon}
                onPress={() => setVisible(true)}
            />
            <Text style={[globalStyles.title, styles.pageTitle]}>
                Main page
            </Text>
            <FlatList
                data={news}
                renderItem={({ item }) => (
                    <TouchableOpacity
                        onPress={() => {
                            navigation.navigate("FullText", item);
                        }}
                        keyExtractor={item.id.toString()}
                        style={styles.item}
                    >
                        <Image
                            style={styles.image}
                            source={{ uri: item.img }}
                        />
                        <Text style={styles.title}>{item.title}</Text>
                        <Text style={styles.preview}>{item.preview}</Text>
                    </TouchableOpacity>
                )}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    item: {
        width: "100%",
        marginBottom: 30,
    },
    image: {
        width: "100%",
        height: 200,
    },
    addIcon: {
        textAlign: "center",
        marginBottom: 15,
    },
    closeIcon: {
        textAlign: "center",
    },
    title: {
        fontFamily: "mt-bold",
        fontSize: 22,
        textAlign: "center",
        marginTop: 20,
        color: "#474747",
    },
    preview: {
        fontFamily: "mt-light",
        fontSize: 16,
        textAlign: "center",
        marginTop: 5,
        color: "#474747",
    },
    pageTitle: {
        marginBottom: 30,
    },
});
