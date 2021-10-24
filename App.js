import 'react-native-gesture-handler';
import React from 'react';
import { useState, useEffect } from 'react';
import { StyleSheet, Text, SafeAreaView, ScrollView, StatusBar, View, SectionList, FlatList, Button, ImageBackground, Image } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import Tabs from './navigation/tabs';
import Navigation from './navigation/navigation';
import Login from './screens/Login'
import LoginContainer from './screens/LoginContainer';
import LoginNavigation from './navigation/LoginNavigation';
import LoginButtons from './screens/LoginButton';
import Loader from './screens/Loader';



const App = () => {

  const [session, setSession] = useState(0);
  
    return(
      <NavigationContainer>
        <Navigation/>
      </NavigationContainer>
    );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "rgba(213,236,252,0.25)"
    //paddingTop: StatusBar.currentHeight,
  },
  scrollView: {
    marginHorizontal: 0,
    marginVertical: 0,
  },
  item: {
    backgroundColor: "#f9c2ff",
    padding: 20,
    marginVertical: 8
  },
  header: {
    fontSize: 32,
    backgroundColor: "#fff"
  },
  title: {
    fontSize: 24
  },
  containerLogin:{
  },
  container: {
    flex: 1,
    //backgroundColor: '#004481',
    alignItems: 'center',
    justifyContent: 'center',
  },
  imagenBack:{
    flex:1,
    justifyContent:"center"
  },
 
  imagen: {
    width: 250,
    height:125

  }
});

export default App;



/*
<NavigationContainer>
        <Navigation/>
      </NavigationContainer>

<View style={styles.container}>
      <Login/>
      <NavigationContainer>
        <LoginNavigation/>
      </NavigationContainer>
    </View>


<View style={styles.scrollView}>
        <Login/>
      </View>
      <LoginContainer/>
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
