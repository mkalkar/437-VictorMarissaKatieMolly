import { StatusBar } from 'expo-status-bar';
import React, { Component } from 'react';
import { StyleSheet, Text, View, Button, TouchableOpacity } from 'react-native';
import { NavigationContainer, createAppContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createMaterialBottomTabNavigator } from 'react-navigation-material-bottom-tabs';
import Icon from 'react-native-vector-icons/FontAwesome';
import { Ionicons } from '@expo/vector-icons';
//import Ionicons from 'react-native-vector-icons/Ionicons';
//import { IonButton } from '@ionic/react';
import { createDrawerNavigator, DrawerContentScrollView, DrawerItemList, DrawerItem } from '@react-navigation/drawer';

export default function GroupScreen({ route, navigation }) {
    const { display } = route.params;
    return (
        <>
            <View>
                <Text>
                    placeholder text
                </Text>
            </View>
            <View style={{ justifyContent: "center", alignSelf: "left", alignContent: "center", }}>
                <TouchableOpacity onPress={() => navigation.toggleDrawer()}>
                    <Ionicons name="reorder-three-outline" size={30} color="black" />
                </TouchableOpacity>
            </View>
            <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
                <Text> {display}</Text>
            </View>

        </>
    );
}
//<Button title="progress" Ionicons="reorder-three-outline" onPress={() => navigation.toggleDrawer()} block>
//</Button>

//<Ionicons name="reorder-three-outline" size={30} color="gray" />

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
});