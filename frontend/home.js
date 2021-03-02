import { StatusBar } from 'expo-status-bar';
import React, { Component } from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import { NavigationContainer, createAppContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createMaterialBottomTabNavigator } from 'react-navigation-material-bottom-tabs';
import { Icon } from 'react-native-elements';
import Ionicons from 'react-native-vector-icons/Ionicons';
import ProfilePage from './profile.js';
import GroupScreen from './group.js';

export default function HomeScreen({ navigation }) {
    let groupName = "Basketball";
    let group2 = "Gardening";
    return (
        <>
            <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
                <Text> Home!</Text>
                <Button title={groupName} onPress={() => navigation.push('Group', { screen: 'Group', params: { display: groupName }, })} />
                <Button title={group2} onPress={() => navigation.push('Group', { screen: 'Group', params: { display: group2 }, })} />

            </View>



        </>
    );

}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
});