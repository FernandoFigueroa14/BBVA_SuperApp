import React from "react";
import {StyleSheet, Text, View, SafeAreaView ,Image,ImageBackground,StatusBar, ScrollView, TouchableHighlight, Button} from "react-native";


const LoginContainer = () => {

    return (
        <View>
            
        </View>
    )
}

export default LoginContainer;

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
