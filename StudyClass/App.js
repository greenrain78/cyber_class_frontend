import React from "react";
import {StyleSheet, Text, View} from "react-native";

import Bottom_Menu_Bar from './src/Menu_Bar/Bottom_Menu_Bar';
import SignInScreen from './src/Sign/SignInScreen';

export default function HomeScreen(){
    return(
      <SignInScreen/>
      //<Bottom_Menu_Bar/>
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