import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import App from '../App.js';



export default function Chat({ navigation }) {

  function changePage() {
    return res.redirect('/../App.js');
  }

  return (
    <div style={{ backgroundColor: "red" }}>
      <div>CHAT PAGE</div>
      <button onClick={() => changePage()} type="button"> click here to go back</button>
    </div>

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
