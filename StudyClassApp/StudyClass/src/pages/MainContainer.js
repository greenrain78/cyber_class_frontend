import * as React from 'react';

import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/Ionicons';

//Screen
import HomeScreen from './HomeScreen';
import SearchScreen from './SearchScreen';
import UserScreen from './UserScreen';

//Screen names
const HomeScreenName = 'Home';
const UserScreenName = 'User';
const SearchScreenName = 'Search';

const Tab = createBottomTabNavigator();

export default function MainContainer() {
    return(
        <NavigationContainer>
            <Tab.Navigator>
                initialRouteName = {HomeScreenName}
                screenOptions = {({route}) => ({
                    tabBarIcon : ({focused, color, size}) => {
                        let iconName;
                        let rn = route.name;

                        if(rn === HomeScreenName){
                            iconName = focused ? 'Home' : 'home-outline';
                        }
                        else if(rn === UserScreenName){
                            iconName = focused ? 'User' : 'person-outline';
                        }
                        else if(rn === SearchScreenName){
                            iconName = focused ? 'Search' : 'search-outline';
                        }

                        return <Icon name = {iconName} size = {size} color = {color}/>
                    },
                })}>

                <Tab.Screen name = {HomeScreenName} component = {HomeScreen}/>
                <Tab.Screen name = {UserScreenName} component = {UserScreen}/>
                <Tab.Screen name = {SearchScreenName} component = {SearchScreen}/>

            </Tab.Navigator>
        </NavigationContainer>
    );
}