import { StatusBar } from 'expo-status-bar';
import React, { Component, useEffect, useState, useReducer, useRef } from 'react';
import { StyleSheet, TextInput, Text, View, Button } from 'react-native';
import { NavigationContainer, createAppContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createMaterialBottomTabNavigator } from 'react-navigation-material-bottom-tabs';
import { Icon } from 'react-native-elements';


const SUFields = (props) => {
    const [value, onChangeText] = React.useState('');

    return (
        <>
            <Text>
                {props.display}
            </Text>
            <TextInput
                style={{ height: 40, borderColor: 'gray', borderWidth: 1, width: 200 }}
                onChangeText={text => onChangeText(text)}
                value={value}
            />
        </>
    );
}

export default function SignupScreen({ navigation }) {
    return (
        <>
            <View>
                <Text style={styles.heading}>
                    Login!!!
                </Text>
            </View>
            <View style={styles.body}>
                <SUFields display="First Name" />
                <SUFields display="Last Name" />
                <SUFields display="Username" />
                <SUFields display="Password" />
                <SUFields display="Verify Password" />
                <SUFields display="Email" />
                <SUFields display="Zip Code" />




                <Button
                    title="Submit"
                    onPress={() => navigation.navigate('Home')}
                />
            </View>
        </>
    );
}
/*<FirstName />
                <LastName />
                <Username />
                <Password />
                <VerifyPassword />
                <Email />
                <ZipCode />
                <ProfilePic />
                <InterestButtons />*/

const styles = StyleSheet.create({
    heading: {
        backgroundColor: '#fff',
        fontSize: 80,
        justifyContent: 'center',
        alignItems: 'center'
    },
    body: {
        flex: 1,
        backgroundColor: '#aaa',
        alignItems: 'center',
        justifyContent: 'center',
    }
});