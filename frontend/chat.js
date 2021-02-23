import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import App from '../App.js';



export default function Chat() {
 
    function changePage() {
        return res.redirect('/../App.js');
      }

  return (
    <div style={{backgroundColor: "red"}}>
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
