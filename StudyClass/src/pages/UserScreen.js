/*메인화면 Scene
  앱 접속시 가장 기본으로되는 화면
  */ 

import React, {Component} from 'react';
import{
    StyleSheet,
    Text,
    View,
    StatusBar
}from 'react-native';

export default function UserScreen(navigation){
    return(
        <View style = {{
            flex : 1,
            alignItems : 'center',
            justifyContent : 'center'
        }}>
            <Text
                onPress = {() => navigation.navigate('Home')}
                style = {{
                    fontSize : 26, 
                    fontWeight : 'bold'
                    }}>
                User Screen
            </Text>
        </View>
    );
}