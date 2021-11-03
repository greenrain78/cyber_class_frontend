import React from "react";
import {StyleSheet, Text, View} from "react-native";

export default function UserScreen(){
    return(
        <View style = {styles.container}>
            <Text>This is User Screen!</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container : {
        flex : 1,
        backgroundColor : "#fff",
        alignItems : "center",
        justifyContent : "center"
    }
});