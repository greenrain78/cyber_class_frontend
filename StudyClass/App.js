import React from "react";
import {createAppContainer} from 'react-navigation';
import {createBottomTabNavigator} from 'react-navigation-tabs';
import {FontAwesome5} from '@expo/vector-icons';

import HomeScreen from './src/pages/HomeScreen';
import CommunityScreen from './src/pages/CommunityScreen';
import SearchScreen from './src/pages/SearchScreen';
import UserScreen from './src/pages/UserScreen';

const TabNavigator = createBottomTabNavigator(
  {
    Home:{
      screen : HomeScreen,
      navigationOptions : {
        tabBarIcon : () => <FontAwesome5 name = 'home' size = {24} color = '#000000' />
      }
    },

    Community :{
      screen : CommunityScreen,
      navigationOptions : {
        tabBarIcon : () => <FontAwesome5 name ='file-alt' size = {24} color = '#000000' />
      }
    } , 

    Search:{
      screen : SearchScreen,
      navigationOptions : {
        tabBarIcon : () => <FontAwesome5 name ='search' size = {24} color = '#000000' />
      }
    },

    User:{
      screen : UserScreen,
      navigationOptions : {
        tabBarIcon : () => <FontAwesome5 name ='user' size = {24} color = '#000000' />
      }
    }
  },

  {
    tabBarOptions : {
      showLabel : true
    }
  }
);

export default createAppContainer(TabNavigator);