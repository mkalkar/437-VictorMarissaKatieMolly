import { StatusBar } from 'expo-status-bar';
import React, { Component } from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import { NavigationContainer, createAppContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createMaterialBottomTabNavigator } from 'react-navigation-material-bottom-tabs';
import { Icon } from 'react-native-elements';

import Amplify from 'aws-amplify';
import config from '../src/aws-exports';
Amplify.configure(config);

export default function HomeScreen({ navigation }) {

    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <Text> Home!</Text>
            <Button
                title="Go to Chat"
                onPress={() => navigation.navigate('Chat')}
            />
            <Button
                title="Go to profile"
                onPress={() => navigation.navigate('Profile')}
            />
        </View>
    );

}
/*
const TabNavigator = createMaterialBottomTabNavigator(
    {
        Home: {
            screen: HomeScreen,
            navigationOptions: {
                tabBarLabel: 'Home',
                activeColor: '#ff0000',
                inactiveColor: '#000000',
                barStyle: { backgroundColor: '#67baf6' },
                tabBarIconProperty: () => (
                    <View>
                        <Icon name={'home'} size={25} style={{ color: '#ff0000' }} />
                    </View>
                )
            }

        },
        Profile: {
            screen: ProfilePage,
            navigationOptions: {
                tabBarLabel: 'Profile',
                activeColor: '#ff0000',
                inactiveColor: '#000000',
                barStyle: { backgroundColor: '#67baf6' },
                tabBarIconProperty: () => (
                    <View>
                        <Icon name={'person'} size={25} style={{ color: '#ff0000' }} />
                    </View>
                )
            }

        }
    }
);
*/

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
});
