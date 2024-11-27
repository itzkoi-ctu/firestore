import { StyleSheet, TextInput, View } from "react-native";
import React from "react";
import Information from "./Infomation";


export default function Login() {
    return(
        <View style={styles.container}>
        <TextInput style={styles.input}/>

        
        </View>
        
    );
}
const styles= StyleSheet.create({
    container: {
        flex: 1,
        
    },
    input: {
        marginHorizontal: 20,
        height: 40,
        width: "80%",
        borderWidth: 1,
        padding: 10,



    }
})

