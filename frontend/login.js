import { StatusBar } from 'expo-status-bar';
import React, { Component, useEffect, useState, useReducer, useRef } from 'react';
import { StyleSheet, TextInput, Text, View, Button } from 'react-native';
import { NavigationContainer, createAppContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createMaterialBottomTabNavigator } from 'react-navigation-material-bottom-tabs';
import { Icon } from 'react-native-elements';
import HomeScreen from './home';


//const Stack = createStackNavigator();
const Username = () => {
    const [value, onChangeText] = React.useState('');

    return (
        <>
            <Text>
                Username:
          </Text>
            <TextInput
                style={{ height: 40, borderColor: 'gray', borderWidth: 1, width: 200 }}
                onChangeText={text => onChangeText(text)}
                value={value}
            />
        </>
    );
}
const Password = () => {
    const [value, onChangeText] = React.useState('');

    return (
        <>
            <Text>
                Password:
          </Text>
            <TextInput
                style={{ height: 40, borderColor: 'gray', borderWidth: 1, width: 200 }}
                onChangeText={text => onChangeText(text)}
                value={value}
            />
        </>
    );
}
export default function LoginScreen({ navigation }) {
    return (
        <>
            <View>
                <Text style={styles.heading}>
                    Login!!!
                </Text>
            </View>
            <View style={styles.body}>
                <Username />
                <Password />
                <Button
                    title="Log In"
                //onPress={() => navigation.navigate('Home')}
                />
            </View>

        </>
    );
}
const styles = StyleSheet.create({
    heading: {
        backgroundColor: '#fff',
        fontSize: 80,
        justifyContent: 'center',
        alignItems: 'center'
    },
    body: {
        flex: 1,
        backgroundColor: '#aaa',
        alignItems: 'center',
        justifyContent: 'center',
    }
});
