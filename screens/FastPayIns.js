import React from "react";
import {StyleSheet, Text, View, SafeAreaView ,Image,ImageBackground,StatusBar, ScrollView, TouchableHighlight, Button, SafeAreaViewComponent, TouchableOpacity} from "react-native";


const FastPayIns = ({navigation}) => {

    return (
        <SafeAreaView style={{flex: 1}}>
<View style={styles.containerLogin}>
            <ImageBackground source={require("../Front_Design/Salud/fastpay.png")} style={styles.imagenBack}>
                <View style={styles.header}>
                    <Image source={require("../Front_Design/Logos_BBVA/BBVA_FAST.png") } style={styles.imagen} ></Image>
                    <Text style={styles.text}>FastPay </Text>
                    <Text style={styles.textAbove}>PAGA TODO EN</Text>
                    <Text style={styles.textAboveBold}>DONDE QUIERAS</Text>
                    <Text style={styles.textAboveLight}>No más terminales y todo en el mismo lugar</Text>
                    <TouchableOpacity onPress={() => navigation.navigate("FastPay")}>
                        <Image source={require("../Front_Design/Btns/abrirCamara.png") } style={styles.imagenCamara} ></Image>
                    </TouchableOpacity>
                    <Text style={styles.textTitle}>1. Identifica</Text>
                    <TouchableOpacity onPress={() => navigation.navigate("FastPay")}>
                        <Image source={require("../Front_Design/Btns/paga.png") } style={styles.imagenPaga} ></Image>
                    </TouchableOpacity>
                    <ScrollView>
                    <Text style={styles.textTitle}>1. Escanea</Text>
                    <Image source={require("../Front_Design/Icons/qr.png") } style={styles.imagenIcon} ></Image>
                    <Text style={styles.textParrafo}>Ahora con solo escanear el código QR</Text>
                    <Text style={styles.textParrafo}>generado por la aplicación, podrás escoger</Text>
                    <Text style={styles.textParrafo}>a BBVA como método de pago.</Text>
                
                    <Text style={styles.textTitle}>1. ¡Disfruta!</Text>
                    <Image source={require("../Front_Design/Icons/Asset_33.png") } style={styles.imagenIcon} ></Image>
                    <Text style={styles.textParrafo}>Con tu perfil y tarjeta de preferencia, FastPay</Text>
                    <Text style={styles.textParrafo}>completará TODOS los datos para finalizar tu</Text>
                    <Text style={styles.textParrafo}>compra en segundos.</Text>
                    </ScrollView>
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
        flex: 1
    },
    imagenBack:{
      height: 200,
      
    },
   
    header:{
        flex:1,
        alignItems:"center",
        justifyContent: "flex-start",
        marginTop: 10
    },

    imagen: {
      width: 20,
      height:35,
    },

    imagenCamara: {
        width: 200,
        height:55,
        borderRadius: 10,
        marginTop: 20
      },
      imagenPaga: {
        width: 160,
        height:40,
        borderRadius: 10,
        marginTop: 10
      },
      imagenIcon: {
        width: 50,
        height:50,
        borderRadius: 10,
        marginTop: 10,
        marginBottom: 10
      },
    nombre:{
        fontWeight: "bold",
        color: "white"
    },

    text:{
        fontSize: 25,
        color: 'white',
        fontWeight: "bold",
        
    },
    textAbove:{
        fontSize: 15,
        color: 'white',
        fontWeight: "400",
        marginTop: 5
    },
    textAboveBold:{
        fontSize: 27,
        color: 'white',
        fontWeight: "bold",
    },
    textAboveLight:{
        fontSize: 10,
        color: 'white',
        fontWeight: "400",
    },
    textTitle:{
        fontSize: 20,
        color: "#072146",
        fontWeight: "bold",
        marginTop: 15
    },
    textParrafo:{
        fontSize: 10,
        color: "#072146",
        fontWeight: "bold",
        marginTop: 0
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
      containerMain:{
          
      }
    
  });
