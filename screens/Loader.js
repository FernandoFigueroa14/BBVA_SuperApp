import React from "react";
import {StyleSheet, Text, View, SafeAreaView ,Image,ImageBackground,StatusBar} from "react-native";

const Loader = () => {
    return (
        <ImageBackground source={require("../Front_Design/Images/fondoDegradado.jpg")} style={styles.imagenBack}>
    
        <View style={styles.container}>
          <Image source={require("../Front_Design/Logos_BBVA/superApp_1.png") } style={styles.imagen} ></Image>
          
          
          <StatusBar style="auto" />
        </View>
        </ImageBackground>
      );
      

};
const styles = StyleSheet.create({
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
  

export default Loader;