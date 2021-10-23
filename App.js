import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import Tabs from './navigation/tabs';
import LoginNavigation from './navigation/LoginNavigation';
import Login from './screens/Login';
import LoginN from './navigation/LoginN';
import { ScrollView, View, Button } from 'react-native';

const App = ({navigation, route}) => {
  return(
    <ScrollView>
      <NavigationContainer>
        <LoginN/>
      </NavigationContainer>
      <View>
        <Login/>
      </View>
      <View>
        <Button title="INICIA SESIÓN" onPress={() =>
            navigation.navigate('LoginUser')
          }></Button>
      </View>
      <View>
        <Button title="CAMBIAR USUARIO" onPress={() =>
            navigation.navigate('LoginChange')
          }></Button>
      </View>
    </ScrollView>
    
  );
}

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
