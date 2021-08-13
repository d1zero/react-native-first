import React from "react";
import { StyleSheet, View, Button, TextInput } from "react-native";
import { globalStyles } from "../styles/style";
import { Formik } from "formik";

export default function Form({ addArticle }) {
    return (
        <View>
            <Formik
                initialValues={{ title: "", preview: "", text: "", img: "" }}
                onSubmit={(values, action) => {
                    addArticle(values);
                    action.resetForm();
                }}
            >
                {(props) => (
                    <View>
                        <TextInput
                            style={styles.input}
                            value={props.values.title}
                            placeholder="Введите название статьи"
                            onChangeText={props.handleChange("title")}
                        />
                        <TextInput
                            style={styles.input}
                            value={props.values.preview}
                            multiline
                            placeholder="Введите анонс статьи"
                            onChangeText={props.handleChange("preview")}
                        />
                        <TextInput
                            style={styles.input}
                            value={props.values.text}
                            multiline
                            placeholder="Введите текст статьи"
                            onChangeText={props.handleChange("text")}
                        />
                        <TextInput
                            style={styles.input}
                            value={props.values.img}
                            placeholder="Введите ссылку на изображение для статьи"
                            onChangeText={props.handleChange("img")}
                        />
                        <View style={styles.btn}>
                            <Button
                                title="Добавить"
                                onPress={props.handleSubmit}
                            ></Button>
                        </View>
                    </View>
                )}
            </Formik>
        </View>
    );
}

const styles = StyleSheet.create({
    input: {
        borderWidth: 1,
        marginTop: 15,
        padding: 15,
        borderRadius: 8,
    },
    btn: {
        marginTop: 30,
    },
});
