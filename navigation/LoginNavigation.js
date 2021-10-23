import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { StyleSheet, Text, View, Image, ImageBackground, TouchableOpacity, ScrollView} from 'react-native';


//Carga de screens
import LoginUser from "../screens/LoginUser";
import LoginChange from "../screens/LoginChange";


const Tab = createBottomTabNavigator();

const LoginNavigation = () => {

    return (
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

        }>
                <Tab.Screen name="LoginUser" component={LoginUser}  options={{
                 headerShown: false,
                tabBarIcon: ({focused})=>(
                    <View style={styles.containertab}>
                        <Text
                                style={{width:80,
                                    height:25,
                                    fontWeight: "bold",
                                    fontSize: 11,
                                    color: focused ? "#1464a5" : "#072146"
                                }}
                                >INICIA SESION</Text>
                        
                    </View>
                ),
            }}/>
                <Tab.Screen name="LoginChange" component={LoginChange} options={{
                 headerShown: false,
                tabBarIcon: ({focused})=>(
                    <View style={styles.containertab}>
                        <Text
                                style={{width:80,
                                    height:25,
                                    fontWeight: "bold",
                                    fontSize: 11,
                                    color: focused ? "#1464a5" : "#072146"
                                }}
                                >CAMBIAR USUARIO</Text>
                        
                    </View>
                ),
            }}/>
        </Tab.Navigator>
    );
}

const styles = StyleSheet.create({
    container: {
        flex:1,
        alignItems:"center",
        justifyContent: "center"
    },
    imagenBack:{
      flex:1,
      justifyContent:"center",
      height: 300
    },
   
    header:{
        flex:1,
        alignItems:"center",
        justifyContent: "center"
    },

    imagen: {
      width: 150,
      height:70,
      position: "absolute",
      top: 25
    },

    nombre:{
        fontWeight: "bold",
        color: "white"
    },

    text:{
        fontSize: 30,
        color: 'white',
        fontWeight: "400",
        alignSelf: "flex-start",
        marginLeft: 25,
        marginTop: 40
    },
    textAbove:{
        fontSize: 10,
        color: 'white',
        fontWeight: "200",
        alignSelf: "flex-start",
        marginLeft: 25
    },
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
    }
    
  });

export default LoginNavigation;