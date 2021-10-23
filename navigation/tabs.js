import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { StyleSheet, Text, View, Image, ImageBackground, TouchableOpacity} from 'react-native';


//Carga de screens
import Cuenta from '../screens/Cuenta';
import Fastpay from '../screens/FastPay';
import Home from '../screens/Home';
import Inversiones from '../screens/Inversiones';
import Loader from '../screens/Loader';
import Login from '../screens/Login';
import Movimientos from '../screens/Movimientos';
import PagoServicios from '../screens/PagoServicios';
import Perfil from '../screens/Perfil';
import SaludFinanciera from '../screens/SaludFinanciera';
import ScanQR from '../screens/ScanQR';


const Tab = createBottomTabNavigator();

const Tabs = () => {
    return(
        <Tab.Navigator
        screenOptions={{
            tabBarShowLabel:false,
            tabBarStyle: {
                position: 'absolute',
                
                bottom: 25,
                left: 20,
                right: 20,
                elevation: 20,
                backgroundColor: "#ffffff",
                borderRadius: 15,
                height:60,
                

                ... styles.shadow
                
            }
        }

        }
       
        >
            <Tab.Screen name="Home" component={Home} options={{
                headerShown: false,
                tabBarIcon: ({focused}) =>(
                    <View style={styles.containertab}>
                        <Image source={require('../Front_Design/Icons/home(1).png')} 
                        style={{width:25,
                            height:25,
                             tintColor: focused ? "#1464a5" : "#072146"}}
                        />
                        
                    </View>
                ),
            }} />
            <Tab.Screen name="SaludFinanciera" component={SaludFinanciera} options={{
                headerShown: false,
                tabBarIcon: ({focused})=>(

                    <View style={styles.containertab}>
                        <Image source={require('../Front_Design/Icons/heart-attack.png')} 
                        style={{width:25,
                                height:25,
                                 tintColor: focused ? "#1464a5" : "#072146"}}/>

                    </View>
                ),
            }} />
            <Tab.Screen name="Fastpay" component={Fastpay}  options={{
                headerShown: false,
                tabBarIcon: ({focused})=>(
                    <View style={styles.containertab,styles.containerfast}>
                        <Image source={require('../Front_Design/Icons/fastpay.png')} 
                        style={{
                                width: 70,
                                height: 70,
                                
                                backgroundColor:"white",
                                borderRadius:50,
                                
                        }}/>

                    </View>
                ),
            }}
            
            />
            <Tab.Screen name="Inversiones" component={Inversiones} 
            options={{
                headerShown: false,
                tabBarIcon: ({focused})=>(
                    <View style={styles.containertab}>
                        <Image source={require('../Front_Design/Icons/wallet-filled-money-tool.png')} 
                        style={{width:25,
                                height:25,
                                 tintColor: focused ? "#1464a5" : "#072146"}}/>

                    </View>
                ),
            }}
            />
            <Tab.Screen name="PagoServicios" component={PagoServicios} 
             options={{
                 headerShown: false,
                tabBarIcon: ({focused})=>(
                    <View style={styles.containertab}>
                        <Image source={require('../Front_Design/Icons/plus(1).png')} 
                        style={{width:25,
                                height:25,
                                 tintColor: focused ? "#1464a5" : "#072146"}}/>

                    </View>
                ),
            }}/>
        </Tab.Navigator>
    );
}

const styles = StyleSheet.create({
    shadow: {
        
        shadowColor: '#072146',
        shadowOffset:{
            width: 0,
            height: 10,
        },
        shadowOpacity: 0.05,
        shadowRadius: 2.5,
        elevation: 2.5
    },
   
    containertab: {
        flex: 1,
        alignItems:"center",
        justifyContent: "center"
    },
    containerfast:{
        height: 70,
        backgroundColor: "white",
        padding: 4,
        borderRadius:50,
        marginBottom:40
        
    }

});

export default Tabs;