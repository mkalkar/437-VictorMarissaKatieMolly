import { StatusBar } from 'expo-status-bar';
import React, { Component } from 'react';
import { StyleSheet, View, SafeAreaView, Button } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'
import {
    Avatar,
    Title,
    Caption,
    Text,
    TouchableRipple
} from 'react-native-paper';
const Profile = () => {
    return (
        <SafeAreaView style={styles.container}>
            <View style = {styles.userInformationSection}>
                <View style = {{ alignItems: 'center', marginTop: 10}}>
                    <Avatar.Image
                    source = {{
                        uri: 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.Nuy39yqcMREaqhbbevS-YgHaHa%26pid%3DApi&f=1'
                    }}
                    size = {150}
                    />
              
            <View style = {{alignItems: 'center'}}>
                <Title style={[styles.title, {
                    marginTop:10,
                    marginBottom: 10,}]
                }>Steve Jobs</Title>
                <Caption style = {[styles.caption, {alignItems: 'center'}]}>
                    <Icon name = "map-marker-radius" color="#888888" size = {20}/>
                    <Text style={{color: "#000000", marginLeft: 20}}>31305</Text>
                <Text>{'\n'}</Text>
                    <Icon name = "hand" color="#888888" size = {20}/>
                    <Text style={{color: "#000000", marginTop: 5}}>New Here</Text>
                
                </Caption>
            </View>
            </View>
            </View>
            
            <Text style = {{fontSize: 20, marginLeft: 10, marginTop: 20}}> Communities</Text>
            <View style = {[styles.userInformationSection, {marginLeft: 35}]}>
                <View style = {[styles.row, {marginTop: 10}]}>
                    <Icon name = "shoe-formal" color="#888888" size = {20}/>
                    <Text style={{color: "#000000", marginLeft: 20}}>Fashion</Text>
                </View>
            </View>
            <View style = {[styles.userInformationSection, {marginLeft: 35}]}>
                <View style = {styles.row}>
                    <Icon name = "basketball" color="#888888" size = {20}/>
                    <Text style={{color: "#000000", marginLeft: 20}}>Basketball</Text>
                </View>
            </View>
            <View style = {styles.statsBoxBorder}>
                <View style = {[styles.statsBox,{
                    borderRightColor: '#dddddd',
                    borderRightWidth: 1
                }]}>
                    <Title>10</Title>
                    <Caption>Events Attended</Caption>
                </View>
                <View style = {styles.statsBox}>
                    <Title>2</Title>
                    <Caption>Events Created</Caption>
                </View>
            </View>
        </SafeAreaView>
    )
}
export default Profile;
{/*export default function ProfilePage({ navigation }) {
    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center', backgroundColor: "purple" }}>
           
            *<Text>Your Profile</Text>
                <Button
                title="Go Back"
                onPress={() => navigation.goBack()}
            />
            
        </View>
    );

}*/}

//test test
const styles = StyleSheet.create({
    container: {
        flex: 1,
        
       backgroundColor: '#fff',
      
       // for evertying space from center horizontal justifyContent: 'center', 
    },
    userInformationSection: {
        paddingHorizontal: 30,
        marginBottom: 5,
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
    },
    row: {
        flexDirection: 'row',
        marginBottom: 10,
    },
    statsBoxBorder:{
        borderBottomColor: '#dddddd',
        borderBottomWidth: 1,
        borderTopColor: '#dddddd',
        borderTopWidth: 1,
        flexDirection: 'row',
        height: 100,
    },
    statsBox: {
        width: '50%',
        alignItems: 'center',
        justifyContent: 'center',
    },
    menuWrapper: {
        marginTop: 10,
    },
    menuItem: {
        flexDirection: 'row',
        paddingVertical: 15,
        paddingHorizontal: 30,
    },
    menuItemText: {
        color: '#777777',
        marginLeft: 20,
        fontWeight: '600',
        fontSize: 16,
        lineHeight: 26
    },
    
});
