import { StatusBar } from 'expo-status-bar';
import React, { Component } from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import { NavigationContainer, createAppContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createMaterialBottomTabNavigator } from 'react-navigation-material-bottom-tabs';
import { Icon } from 'react-native-elements';

export default function StartScreen({ navigation }) {

    return (

        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <Text> Home!</Text>
            <Button
                title="Login"
                onPress={() => navigation.navigate('Login')}
            />
            <Button
                title="Sign Up"
                onPress={() => navigation.navigate('Sign up')}
            />
        </View>

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
