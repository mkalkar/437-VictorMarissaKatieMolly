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
import StartScreen from './frontend/start.js';
import SignupScreen from './frontend/signup.js';
//const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

function App() {
  return (
    /* <NavigationContainer>
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
         <Tab.Screen name="Start" component={StartScreen} />
         <Tab.Screen name="Sign up" component={SignupScreen} />
         <Tab.Screen name="Login" component={LoginScreen} />
         <Tab.Screen name="Home" component={HomeScreen} options={{ title: 'Home Page' }} />
         <Tab.Screen name="Chat" component={ChatScreen} />
         <Tab.Screen name="Profile" component={ProfilePage} />
       </Tab.Navigator>
     </NavigationContainer>*/

    //return (
    <Stack.Navigator initialRouteName="Start">
      <Stack.Screen name="Login" component={LoginScreen} />
      <Stack.Screen name="Sign Up" component={SignupScreen} />
      <Stack.Screen name="Start" component={StartScreen} />
    </Stack.Navigator>
  );



}
export default App;
