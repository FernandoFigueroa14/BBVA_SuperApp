import React, {useEffect} from "react";
import {StyleSheet, Text, View, SafeAreaView, ActivityIndicator ,Image,ImageBackground,StatusBar, Alert} from "react-native";

const Loader = ({navigation}) => {

  useEffect(() => {
    setTimeout(() => {
      navigation.navigate("LoginComponent");
    }, 3000);
  }, []);

    return (
        <ImageBackground source={require("../Front_Design/Images/fondoDegradado.jpg")} style={styles.imagenBack}>
    
        <View style={styles.container}>
          <Image source={require("../Front_Design/Logos_BBVA/superApp_1.png") } style={styles.imagen} ></Image>
          
          <StatusBar style="auto" />
        </View>
        <View style={[styles.container, styles.horizontal]}>
          <View style={styles.spinnersCont}>
            <ActivityIndicator style={styles.spinnerSmall} size="small" color="#ffffff"/>
            <ActivityIndicator style={styles.spinnerBig} size="large" color="#ffffff" />
            <Text style={styles.spinnerTextStyle}>Cargando...</Text>
          </View>
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
  
    },
    horizontal: {
      flexDirection: "row",
      justifyContent: "space-around",
      padding: 0
    },
    spinnerTextStyle: {
      color: '#FFFFFF',
      marginTop: 40
    },
    spinnersCont:{
      position: 'relative'
    },
    spinnerBig:{
      position: 'absolute',
      left: 15
    },
    spinnerSmall:{
      position: 'absolute',
      top:7,
      left:23
    }
  });
  

export default Loader;