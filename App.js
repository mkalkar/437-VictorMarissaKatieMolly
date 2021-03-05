import 'react-native-gesture-handler';
import { StatusBar } from 'expo-status-bar';
import React, { Component } from 'react';
import { StyleSheet, Text, Button, View } from 'react-native';
import { NavigationContainer, createAppContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createMaterialBottomTabNavigator } from 'react-navigation-material-bottom-tabs';
import { Icon } from 'react-native-elements';
import { createDrawerNavigator, DrawerContentScrollView, DrawerItemList, DrawerItem } from '@react-navigation/drawer';
import Ionicons from 'react-native-vector-icons/Ionicons';
import LoginScreen from './frontend/login.js';
import SignupScreen from './frontend/signup.js';
import ProfilePage from './frontend/profile.js';
import HomeScreen from './frontend/home.js';
import Splash from './frontend/splash.js';
import GroupScreen from './frontend/group.js';
import MemberScreen from './frontend/member.js';

const AuthStack = createStackNavigator();
const Tabs = createBottomTabNavigator();
const HomeStack = createStackNavigator();
const ProfileStack = createStackNavigator();
const LoginStack = createStackNavigator();
const SignupStack = createStackNavigator();
const Drawer = createDrawerNavigator();

const TabsScreen = () => (
  <Tabs.Navigator
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

    <Tabs.Screen name="Home" component={HomeStackScreen} options={{ headerShown: false, gestureEnabled: false }} />
    <Tabs.Screen name="Profile" component={ProfileStackScreen} options={{ headerShown: false, gestureEnabled: false }} />
  </Tabs.Navigator>
)
const MemberDrawer = () => (
  <Drawer.Navigator>
    <Drawer.Screen name="Group" component={GroupScreen} options={{ headerShown: false, gestureEnabled: true }} />
    <Drawer.Screen name="Member" component={MemberScreen} options={{ headerShown: false, gestureEnabled: true }} />
  </Drawer.Navigator>
)

const HomeStackScreen = () => (
  <HomeStack.Navigator>
    <HomeStack.Screen name="Home" component={HomeScreen} options={{ headerShown: false, gestureEnabled: false }} />
    <HomeStack.Screen name="Group" component={MemberDrawer} options={{ headerShown: false, gestureEnabled: false }} />
  </HomeStack.Navigator>
)
const ProfileStackScreen = () => (
  <ProfileStack.Navigator>
    <ProfileStack.Screen name="Profile" component={ProfilePage} options={{ headerShown: false, gestureEnabled: false }} />
  </ProfileStack.Navigator>
)

const LoginStackScreen = () => (
  <LoginStack.Navigator>
    <LoginStack.Screen name="Login" component={LoginScreen} options={{ headerShown: false, gestureEnabled: false }} />
    <LoginStack.Screen name="Home" component={TabsScreen} options={{ headerShown: false, gestureEnabled: false }} />
    <LoginStack.Screen name="Signup" component={SignupStackScreen} options={{ headerShown: false, gestureEnabled: false }} />
  </LoginStack.Navigator>
)
const SignupStackScreen = () => (
  <SignupStack.Navigator>
    <SignupStack.Screen name="Sign Up" component={SignupScreen} options={{ headerShown: false, gestureEnabled: false }} />
    <SignupStack.Screen name="Home" component={TabsScreen} options={{ headerShown: false, gestureEnabled: false }} />
  </SignupStack.Navigator>
)
function StartScreen({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text> Welcome ;)</Text>
      <Button
        title="Login"
        onPress={() => navigation.push('Login')}
      />
      <Button
        title="Sign Up"
        onPress={() => navigation.push('Sign Up')}
      />
    </View>
  );
}



export default function App() {
  const [isLoading, setIsLoading] = React.useState(true);
  const [userToken, setUserToken] = React.useState(''); //used for authentication
  React.useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 1000);
  }, []);
  if (isLoading) {
    return <Splash />;
  }

  return (
    <NavigationContainer>
      {userToken ? ( //will be used for authentication soon
        <TabsScreen />
      ) :
        (<AuthStack.Navigator initalRouteName='Start'>
          <AuthStack.Screen name='Start' component={StartScreen} options={{ headerShown: false, gestureEnabled: false }} />
          <AuthStack.Screen name='Login' component={LoginStackScreen} options={{ headerShown: false, gestureEnabled: false }} />
          <AuthStack.Screen name='Sign Up' component={SignupStackScreen} options={{ headerShown: false, gestureEnabled: false }} />
        </AuthStack.Navigator>)
      }
    </NavigationContainer >

  );
}
