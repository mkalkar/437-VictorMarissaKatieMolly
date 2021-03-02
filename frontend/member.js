import { StatusBar } from 'expo-status-bar';
import React, { Component } from 'react';
import { StyleSheet, Text, View, Button, TouchableOpacity } from 'react-native';
import { NavigationContainer, createAppContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createMaterialBottomTabNavigator } from 'react-navigation-material-bottom-tabs';
import { Icon } from 'react-native-elements';
import Ionicons from 'react-native-vector-icons/Ionicons';


export default function MemberScreen({ route, navigation }) {
    // const { name } = route.params;
    return (
        <>
            <View>
                <Text>
                    placeholder text
                </Text>
            </View>
            <View style={{ justifyContent: "center", alignSelf: "left", alignContent: "center", }}>
                <TouchableOpacity onPress={() => navigation.goBack()}>
                    <Ionicons name="arrow-back-outline" size={30} color="black" />
                </TouchableOpacity>
            </View>
            <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
                <Text> Member</Text>
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
