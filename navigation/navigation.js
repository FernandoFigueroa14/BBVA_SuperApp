import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { StyleSheet, Text, View, Image, ImageBackground, TouchableOpacity} from 'react-native';


//Carga de screens

import Perfil from '../screens/Perfil';
import Home from '../screens/Home';
import Loader from '../screens/Loader';
import SaludFinanciera from '../screens/SaludFinanciera';
import FastPay from '../screens/FastPay';
import Inversiones from '../screens/Inversiones';
import PagoServicios from '../screens/PagoServicios';
import { NavigationContainer } from '@react-navigation/native';



const Stack = createStackNavigator();

const Navigation = () => {
    return(
            <Stack.Navigator initialRouteName="Home" screenOptions={{
                headerShown: false
            }}>
                <Stack.Screen name="Perfil" component={Perfil}></Stack.Screen>
                <Stack.Screen name="Home" component={Home}></Stack.Screen>
                <Stack.Screen name="Loader" component={Loader}></Stack.Screen>
                <Stack.Screen name="SaludFinanciera" component={SaludFinanciera}></Stack.Screen>
                <Stack.Screen name="FastPay" component={FastPay}></Stack.Screen>
                <Stack.Screen name="Inversiones" component={Inversiones}></Stack.Screen>
                <Stack.Screen name="PagoServicios" component={PagoServicios}></Stack.Screen>

            </Stack.Navigator>
        
        );
    }

export default Navigation;