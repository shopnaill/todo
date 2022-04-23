import react from "react";
import { StyleSheet, Text, View } from "react-native";

export default function Header()
{
    return (
        <View style={styles.header}>
            <Text style={styles.title}>
                My Todo List
            </Text>
        </View>
    );
}

const styles = StyleSheet.create({
    header: {
        backgroundColor: '#f4511e',
        padding: 20,
    },
    title: {
        color: '#fff',
        fontSize: 20,
        textAlign: 'center',
    },
});