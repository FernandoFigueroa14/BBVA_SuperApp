import React from "react";
import {StyleSheet, Text, View, SafeAreaView ,Image,ImageBackground,StatusBar, ScrollView, TouchableHighlight, Button} from "react-native";


const Login = ({navigation}) => {

    const nombre = "Saul"

    return (
        <View>
            <ImageBackground source={require("../Front_Design/Images/login.jpg")} style={styles.imagenBack}>
                <View style={styles.header}>
                    <Image source={require("../Front_Design/Logos_BBVA/superApp_1.png") } style={styles.imagen} ></Image>
                    <Text style={styles.text}>Hola, <Text style={styles.nombre}>{nombre}</Text></Text>
                    <Text style={styles.textAbove}>Ingresa tu contraseña para continuar</Text>
                </View>
            </ImageBackground>
        </View>
    )
}

export default Login;

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
