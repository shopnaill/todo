import react from "react";
import { StyleSheet, Text, TextInput, Button, View } from "react-native";

export default function AddToDo({ submitHandler }) {
    const [text, setText] = react.useState("");
    const changeText = (text) => {
        setText(text);
    };

    return (
        <View>
            <TextInput
                style={styles.input}
                placeholder="Add To Do"
                onChangeText={changeText}
            />
            <Button title="Add" onPress={() => submitHandler(text)} color="#f4511e" />
        </View>
    );
}

const styles = StyleSheet.create({
    input: {
        marginBottom: 10,
        paddingHorizontal: 8,
        paddingVertical: 6,
        borderBottomWidth: 1,
        borderBottomColor: '#ddd',

    },
});