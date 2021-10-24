import React from 'react'
import { ActivityIndicator, Image, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'


const FastPay = ({navigation}) => {

    return (
        <View style={styles.container}>
            <View style={styles.camara}>

            </View>
            <View style={styles.info}>
                <Text style={{ fontWeight: "bold", fontSize: 18 }}>Se utilizará la información de: </Text>
                <TouchableOpacity onPress={() => navigation.navigate("Perfil")}>
                <Image
                    source={require("../Front_Design/Images/Asset7.png")}
                    style={{ width: 100, height: 100 }}
                />
                <Text style={{ fontWeight: "bold", fontSize: 14 }}>Carlos Pano H.</Text>
                </TouchableOpacity>
            </View>
            <ScrollView
            contentContainerStyle={styles.redbox}
            horizontal={true}
            decelerationRate={0}
            snapToInterval={350}
            snapToAlignment={"center"}
            style={styles.tarjetas}
            >
                <TouchableOpacity onPress={() => navigation.navigate("Cuenta")}>
                <Image
                    style={{
                    width: 300,
                    height: 200,
                    marginRight: 10,
                    marginLeft: 15,
                    borderRadius: 10,
                    }}
                    source={require("../Front_Design/Tarjetas/Back_marino_completo.png")}
                />
                </TouchableOpacity>

                <TouchableOpacity>
                <Image
                    style={{
                    width: 300,
                    height: 200,
                    borderRadius: 10,
                    }}
                    source={require("../Front_Design/Tarjetas/Asset25.png")}
                />
                </TouchableOpacity>
          </ScrollView>
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
                <TouchableOpacity onPress={() => navigation.navigate("FastPay")}>
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
        </View>
    );
}

export default FastPay;

const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: "center"
    },
    camara: {
      flex: 1,
      backgroundColor: "black",
      marginHorizontal: 40,
      marginTop: 40
    },
    info: {
      flex: 0.5,
      alignItems: "center",
      marginTop: 30,
    },
    tarjetas: {
        flex: 0.5,
        top: 35
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
    buttonText: {
        fontSize: 21,
        color: 'rgb(0,122,255)'
    },
    buttonTouchable: {
        padding: 16
    }
  });