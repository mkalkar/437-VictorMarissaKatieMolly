import { StatusBar } from 'expo-status-bar';
import React, { Component } from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import { NavigationContainer, createAppContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createMaterialBottomTabNavigator } from 'react-navigation-material-bottom-tabs';
import { Icon } from 'react-native-elements';
import Ionicons from 'react-native-vector-icons/Ionicons';
//import { IonButton } from '@ionic/react';
import { createDrawerNavigator, DrawerContentScrollView, DrawerItemList, DrawerItem } from '@react-navigation/drawer';
import MemberDrawer from '../App.js';
export default function GroupScreen({ route, navigation }) {
    const { display } = route.params;
    return (
        <>
            <Button title="progress" Ionicons="reorder-three-outline" onPress={() => alert("todo!!")} block>
            </Button>
            <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
                <Text> {display}</Text>
            </View>

        </>
    );
}
//<Ionicons name="reorder-three-outline" size={30} color="gray" />

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
});
