import React from "react";
import {KeyboardAvoidingView, StyleSheet, Text, TextInput, View, TouchableOpacity} from "react-native";

export default function SignInScreen(){
    return(
        <KeyboardAvoidingView
            style = {styles.container}
            behavior = "padding"
        >
            <View style = {styles.inputContainer}>
                <TextInput
                    placeholder = "Email"
                    // value = { }
                    // onChangeText = {text => }
                    style = {styles.input}
                />
                <TextInput
                    placeholder = "Password"
                    //value = { }
                    //onChangeText = {text => }
                    style = {styles.input}
                    secureTextEntry
                />
            </View>

            <View style = {styles.buttonContainer}>
                <TouchableOpacity
                    onPress = {() => { }}
                    style = {[styles.button,styles.buttonOutlineLogin]}
                >
                    <Text style = {styles.buttonText}>Login</Text>
                </TouchableOpacity>
                <TouchableOpacity
                    onPress = {() => { }}
                    style = {[styles.button, styles.buttonOutlineRegister]}
                >
                    <Text style = {styles.buttonOutlineText}>Register</Text>
                </TouchableOpacity>
            </View>
        </KeyboardAvoidingView>
    );
}

const styles = StyleSheet.create({
    container : {
        flex : 1,
        backgroundColor : "#E6E6E6",
        alignItems : "center",
        justifyContent : "center",
    },
    inputContainer : {
        width : '80%'  //Block 크기
    },
    input : {
        backgroundColor : 'white',
        paddingHorizontal : 15,  //수평
        paddingVertical : 10,  //수직
        borderRadius : 15,  //꼭짓점 둥글게
        marginTop : 5,  //위아래 간격
    },
    buttonContainer : {
        width : '60%',
        justifyContent : 'center',
        alignItems : 'center',
        marginTop : 40
    },
    button : {
        backgroundColor : '#0772F9',
        width : '100%',
        padding : 15,
        borderRadius : 15,
        alignItems : 'center',
    },
    buttonText : {
        color : 'white',
        marginTop : 5,
        borderColor : 'none',
        fontWeight : '700',
        fontSize : 16,
    },
    buttonOutlineRegister : {
        backgroundColor : 'white',
        marginTop : 5,
        borderColor : '#0782F9',
        borderWidth : 2,
    },
    buttonOutlineLogin : {
        backgroundColor : '#0782F9',
        marginTop : 5,
        borderColor : '#ffffff',
        borderWidth : 2,
    },
    buttonOutlineText : {
        color : '#0782F9',
        fontWeight : '700',
        fontSize : 16,
    },
});