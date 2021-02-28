import 'react-native-gesture-handler';
import { StatusBar } from 'expo-status-bar';
import React, { Component } from 'react';
import { StyleSheet, Text, Button, View } from 'react-native';
import { NavigationContainer, createAppContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createMaterialBottomTabNavigator } from 'react-navigation-material-bottom-tabs';
import { Icon } from 'react-native-elements';
import Ionicons from 'react-native-vector-icons/Ionicons';
//import ChatScreen from './frontend/chat.js';
//import ProfilePage from './frontend/profile.js';
//import HomeScreen from './frontend/home.js';
import LoginScreen from './frontend/login.js';
import SignupScreen from './frontend/signup.js';
//const Tab = createBottomTabNavigator();
const RootStack = createStackNavigator();
const ToHomeNavStack = createStackNavigator();
function StartScreen({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text> Home ;)</Text>
      <Button
        title="Login"
        onPress={() => navigation.navigate('Login')}
      />
      <Button
        title="Sign Up"
        onPress={() => navigation.navigate('Sign Up')}
      />
    </View>
  );
}
export default function App() {
  return (
    <NavigationContainer>
      <RootStack.Navigator initalRouteName='Start'>
        <RootStack.Screen name='Start' component={StartScreen} />
        <RootStack.Screen name='Login' component={LoginScreen} />
        <RootStack.Screen name='Sign Up' component={SignupScreen} />
      </RootStack.Navigator>
    </NavigationContainer>
  );
}

function ToHomeNav() {
  return (
    <ToHomeNavStack>
      <ToHomeNavStack.Screen name='Home' component={HomeScreen} />
    </ToHomeNavStack>
  );
}