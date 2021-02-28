import { StatusBar } from 'expo-status-bar';
import React, { Component } from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import { NavigationContainer, createAppContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createMaterialBottomTabNavigator } from 'react-navigation-material-bottom-tabs';
import { Icon } from 'react-native-elements';
import Ionicons from 'react-native-vector-icons/Ionicons';
import ChatScreen from './chat.js';
import ProfilePage from './profile.js';
const Tab = createBottomTabNavigator();

export default function HomeScreen() {

    return (
        <>
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

            <Tab.Navigator
                initialRouteName="Start"
                screenOptions={({ route }) => ({
                    tabBarIcon: ({ focused, color, size }) => {
                        let iconName;
                        let newVar;
                        if (route.name === 'Home') {
                            iconName = 'home-outline';
                        } else if (route.name === 'Chat') {
                            iconName = 'chatbox-outline';
                        }
                        else {
                            iconName = 'person-circle-outline';
                        }

                        // You can return any component that you like here!
                        return <Ionicons name={iconName} size={size} color={color} />;
                    },
                })}
                tabBarOptions={{
                    activeTintColor: 'tomato',
                    inactiveTintColor: 'gray',
                }}


            >

                <Tab.Screen name="Home" component={HomeScreen} options={{ title: 'Home Page' }} />
                <Tab.Screen name="Chat" component={ChatScreen} />
                <Tab.Screen name="Profile" component={ProfilePage} />
            </Tab.Navigator>

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
