import { StatusBar } from 'expo-status-bar';
import React, { Component } from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

export default function ProfilePage({ navigation }) {
    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center', backgroundColor: "purple" }}>
            <Text>Your Profile</Text>
            <Button
                title="Go Back"
                onPress={() => navigation.goBack()}
            />
        </View>
    );

}

//test test
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
});
