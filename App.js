import 'react-native-gesture-handler';
import React from 'react';
import { StyleSheet, Text, SafeAreaView, ScrollView, StatusBar, View, SectionList, FlatList, Button } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import Tabs from './navigation/tabs';
import Navigation from './navigation/navigation';
import Login from './screens/Login'
import LoginContainer from './screens/LoginContainer';
import LoginNavigation from './navigation/LoginNavigation';



const App = () => {
  return(
    <View style={styles.container}>
      <Login/>
      <NavigationContainer>
        <LoginNavigation/>
      </NavigationContainer>
    </View>
    
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    //paddingTop: StatusBar.currentHeight,
  },
  scrollView: {
    marginHorizontal: 0,
    marginVertical: 0,
    height: "0%"
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
  }
});

export default App;



/*
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
