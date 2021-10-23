
import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, ImageBackground,Image } from 'react-native';
import Loader from './screens/Loader';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import view_login from './screens/view_login';


const Stack = createNativeStackNavigator();
export default function App() {


  return(<NavigationContainer>
    <Stack.Navigator>
    <Stack.Screen name="login" component={view_login}></Stack.Screen>
    <Stack.Screen name="Loader" component={Loader}></Stack.Screen>
    

    </Stack.Navigator>
   
  </NavigationContainer> 
  )
  
}

