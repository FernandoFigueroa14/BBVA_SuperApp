import 'react-native-gesture-handler';
import React from 'react';
import { StyleSheet, Text, SafeAreaView, ScrollView, StatusBar } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import Tabs from './navigation/tabs';
import Navigation from './navigation/navigation';
import Login from './screens/Login'


const App = () => {
  return(
    <SafeAreaView style={styles.container}>
      <ScrollView style={styles.scrollView}>
        <Login/>
      </ScrollView>
      <NavigationContainer>
        <Navigation/>
      </NavigationContainer>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: StatusBar.currentHeight,
  },
  scrollView: {
    marginHorizontal: 0,
  },
  text: {
    fontSize: 42,
  },
});

export default App;


/*
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, ImageBackground,Image } from 'react-native';
import Loader from './screens/Loader';

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
*/
