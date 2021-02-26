import { StatusBar } from 'expo-status-bar';
import React, { Component } from 'react';
import { StyleSheet, TextInput, Text, View, Button } from 'react-native';
import { NavigationContainer, createAppContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createMaterialBottomTabNavigator } from 'react-navigation-material-bottom-tabs';
import { Icon } from 'react-native-elements';

const Username = () => {
    const [value, onChangeText] = React.useState('');

    return (
        <>
            <Text>
                Username:
          </Text>
            <TextInput
                style={{ height: 40, borderColor: 'gray', borderWidth: 1, width: 100 }}
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
                style={{ height: 40, borderColor: 'gray', borderWidth: 1, width: 100 }}
                onChangeText={text => onChangeText(text)}
                value={value}
            />
        </>
    );
}
export default function LoginScreen() {
    return (
        <>
            <View style={styles.container}>
                <Text>
                    Login:
            </Text>
            </View>
            <View style={styles.container}>
                <Username />
                <Password />
            </View>
        </>
    );
}
const styles = StyleSheet.create({
    header: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'flex-start',
        justifyContent: 'center',
    },
    body: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    }
});
