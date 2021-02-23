import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';



export default function App() {
  //fetch from backend
  function Fetch(){
  console.log("in fetch");
  fetch('http://localhost:3000/', {
    method: 'POST',
    headers: {
      Accept: 'application/json'
      // 'Content-Type': 'application/json',
      
    },
    body: JSON.stringify({
      firstParam: 'yourValue',
      secondParam: 'yourOtherValue',
    }),
  });
  }

  return (
    // <View style={styles.container}>
    //   <Text>Hello Marissa wuz here</Text>
    //   <StatusBar style="auto" />
    // </View>
    <button onClick={() => Fetch()} type="button"> click here</button>

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
