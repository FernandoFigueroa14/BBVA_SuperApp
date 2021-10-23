import React from "react";
import {StyleSheet, Text, View, SafeAreaView ,Image,ImageBackground,StatusBar, ScrollView} from "react-native";


const Login = () => {

    const nombre = "Saul Toral"

    return (
        <ScrollView>
            <ImageBackground source={require("../Front_Design/Images/group-of-young-people-outdoors-at-sunset-2021-08-28-15-07-10-utc.jpg")} style={styles.imagenBack}>
                <View>
                    <Image source={require("../Front_Design/Logos_BBVA/superApp_1.png") } style={styles.imagen} ></Image>
                    <Text style={styles.text}>Hola, {nombre}</Text>
                </View>
            </ImageBackground>
            
        </ScrollView>
    )
}

export default Login;

const styles = StyleSheet.create({
    container: {
      flex: 1,
      //backgroundColor: '#004481',
      alignItems: 'center',
      justifyContent: 'center',
    },
    imagenBack:{
      flex:1,
      justifyContent:"center",
      height: 200
    },
   
    imagen: {
      width: 250,
      height:125
  
    },

    text:{
        fontSize: 50,
        color: '#FF0000'
    }
    
  });
