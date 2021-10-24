import React from "react";
import {
  StyleSheet,
  Text,
  SafeAreaView,
  ScrollView,
  StatusBar,
  View,
  TouchableOpacity,
  Image,
  FlatList,
  Button,
  Dimensions,
} from "react-native";

const deviceWidth = Dimensions.get("window").width;

const mandarDinero = ({ navigation }) => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.containerProfile}>
        <View style={styles.tabProfileStyle}>
          <View style={styles.columns}>
            <Text style={{ color: "#999999" }}>Bienvenido a la superApp</Text>
            <Text style={{ color: "#072146", fontSize: 18 }}>
              Realizar una {" "}
              <Text style={{ fontWeight: "bold", fontSize: 20 }}>Transferencia</Text>
            </Text>
          </View>

          <View>
            <TouchableOpacity onPress={() => navigation.navigate("Perfil")}>
              <Image
                source={require("../Front_Design/Images/Asset7.png")}
                style={{ width: 100, height: 100, marginRight: -18 }}
              />
            </TouchableOpacity>
          </View>
        </View>
      </View>

      
    <SafeAreaView style={styles.container}>


      <ScrollView style={styles.scrollView}>
        <View style={styles.mrContainer}>
        <Image
                source={require("../Front_Design/Salud/Asset_21.png")}
                style={{ width: 200, height: 55,marginTop:55,marginBottom:-5}}
              />
          <Text
            style={{
              fontWeight: "300",
              padding:20,
              fontSize: 19,
              marginBottom: 10,
              color: "#072146",
              alignSelf: "center",
              textAlign:"center",
              
            }}
          >
            Estás a punto de realizar una transferencia a <Text style={{ fontWeight: "bold", fontSize: 22 }}>Dumas</Text>
          </Text>

          <Text style={{
           backgroundColor:'rgba(20,100,165,.15)',
           width:320,
           paddingTop:20,
           paddingBottom:20,
           borderRadius:15,
           paddingLeft:15,
           fontSize:15,
           color: 'rgba(20,100,165,.8)',
           borderRadius: 10
           

          }}>$1,100.03 mxn</Text>

<TouchableOpacity
            onPress={() => navigation.navigate("Confirmation")}
          >
            <Image
              source={require("../Front_Design/Btns/Asset_46.png")}
              style={{ width: 320, height: 45, marginTop:30 }}
            />
          </TouchableOpacity>

          

          
        </View>
      </ScrollView>
    </SafeAreaView>




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
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: StatusBar.currentHeight,
    backgroundColor: "rgba(213,236,252,0.25)",
  },
  columns: {
    flex: 1,
    flexDirection: "column",
    justifyContent: "space-around",
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
  containerProfile: {
    justifyContent: "center",
    alignItems: "center",
    padding: 10,
    zIndex: 10000,
    position: "relative",
    height: 100,
  },
  tabProfileStyle: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    backgroundColor: "rgba(213,236,252,1)",

    position: "absolute",
    top: 20,
    left: 10,
    right: 10,

    borderRadius: 15,
    height: 80,
    padding: 15,
    shadowColor: "#072146",
    shadowOffset: {
      width: 0,
      height: 6,
    },
    shadowOpacity: 0.05,
    shadowRadius: 1.5,
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
  mrContainer: {
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    paddingTop: 0,
  },
  scrollView: {
    backgroundColor: "rgba(213,236,252,0)",
    marginHorizontal: 0,
    paddingHorizontal: 10,
  },
  text: {
    fontSize: 42,
  },
  redbox: {
    height: 250,
  },
  nombres: {
    fontSize: 10,
    fontWeight: "bold",
    color: "#072146",
  },
  corolbox: {
    width: deviceWidth - 40,
    height: (deviceWidth - 40) * 2.3,

    flex: 1,

    alignItems: "center",
  },
  greenbox: {
    paddingTop: 10,
    paddingBottom: 10,
    width: 365,
    height: 220,
    backgroundColor: "white",
    borderRadius: 10,
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    shadowColor: "#072146",
    shadowOffset: {
      width: 0,
      height: 6,
    },
    shadowOpacity: 0.05,
    shadowRadius: 1.5,
  },
  purplebox: {
    width: 100,
    height: 100,
    backgroundColor: "purple",
  },
});

export default mandarDinero;
