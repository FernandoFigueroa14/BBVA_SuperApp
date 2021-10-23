import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import LoginChange from '../screens/LoginChange';
import LoginUser from '../screens/LoginUser';


const Stack = createNativeStackNavigator();

function LoginN() {
  return (
            <Stack.Navigator>
                <Stack.Screen name="LoginUser" component={LoginUser} />
                <Stack.Screen name="LoginChange" component={LoginChange} />
            </Stack.Navigator>
  );
}

export default LoginN;