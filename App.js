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
import ChatScreen from './frontend/chat.js';
import ProfilePage from './frontend/profile.js';
import HomeScreen from './frontend/home.js';


//aws authentication imports
// import Amplify, { amazonSignInButton } from "aws-amplify";
import Amplify from 'aws-amplify'
import awsconfig from './src/aws-exports';
// import {AmplifySignOut, withAuthenticator} from 'aws-amplify-react-native';
import { AmplifySignOut, withAuthenticator } from 'aws-amplify-react-native';
// import Amplify, { Auth } from 'aws-amplify';
// import awsconfig from './aws-exports';
// Amplify.configure(awsconfig);

Amplify.configure(awsconfig)

const Tab = createBottomTabNavigator();
function App() {
  return (
    // <button onClick={signUp()}>sign up here</button>,
    
    
    <AmplifySignOut/>,
      <Tab.Navigator
        initialRouteName="Home"
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
   

  );
}
export default withAuthenticator(App);
