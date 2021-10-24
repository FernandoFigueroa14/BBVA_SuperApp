import React from "react";
import {StyleSheet, Text, View, SafeAreaView ,Image,ImageBackground,StatusBar, ScrollView, TouchableHighlight, Button, SafeAreaViewComponent, TouchableOpacity} from "react-native";


const FastPayIns = ({navigation}) => {

    return (
        <SafeAreaView style={{flex: 1}}>
<View style={styles.container}>
            <ImageBackground source={require("../Front_Design/Images/login.jpg")} style={styles.imagenBack}>
                <View style={styles.header}>
                    <Image source={require("../Front_Design/Logos_BBVA/superApp_1.png") } style={styles.imagen} ></Image>
                    <Text style={styles.text}>Hola, </Text>
                    <Text style={styles.textAbove}>Ingresa tu contraseña para continuar</Text>
                </View>
            </ImageBackground>
        </View>
        <View style={styles.tabBarStyle}>
        <View style={styles.rows}>
          <TouchableOpacity onPress={() => navigation.navigate("Home")}>
            <Image
              source={require("../Front_Design/Icons/home(1).png")}
              style={{ width: 25, height: 25 }}
            />
          </TouchableOpacity>

          <TouchableOpacity
            onPress={() => navigation.navigate("SaludFinanciera")}
          >
            <Image
              source={require("../Front_Design/Icons/heart-attack.png")}
              style={{ width: 25, height: 25 }}
            />
          </TouchableOpacity>

          <View style={styles.containerfast}>
            <TouchableOpacity onPress={() => navigation.navigate("FastPayIns")}>
              <Image
                source={require("../Front_Design/Icons/fastpay.png")}
                style={{ width: 65, height: 65 }}
              />
            </TouchableOpacity>
          </View>

          <TouchableOpacity onPress={() => navigation.navigate("Inversiones")}>
            <Image
              source={require("../Front_Design/Icons/wallet-filled-money-tool.png")}
              style={{ width: 25, height: 25 }}
            />
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => navigation.navigate("PagoServicios")}
          >
            <Image
              source={require("../Front_Design/Icons/plus(1).png")}
              style={{ width: 25, height: 25 }}
            />
          </TouchableOpacity>
        </View>
        </View>
        </SafeAreaView>
        
    )
}

export default FastPayIns;

const styles = StyleSheet.create({
    containerLogin: {
        flex: 0.5
    },
    imagenBack:{
      flex:1,
      justifyContent:"center",
      height: 300,
      
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
    },
    tabBarStyle: {
        /*
        position: "absolute",
        bottom: 20,
        left: 20,
        right: 20,
        elevation: 20,*/
        margin: 10,
        backgroundColor: "white",
        borderRadius: 15,
        height: 60,
        shadowColor: "#072146",
        shadowOffset: {
          width: 0,
          height: 10,
        },
        shadowOpacity: 0.1,
        shadowRadius: 2.5,
      },
      rows: {
        flex: 1,
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-around",
      },
      containerfast: {
        height: 70,
        backgroundColor: "white",
        padding: 4,
        borderRadius: 50,
        marginBottom: 40,
      },
    
  });
