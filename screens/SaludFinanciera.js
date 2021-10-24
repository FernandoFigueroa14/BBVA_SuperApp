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

import PieChartWithDynamicSlices from "../graphics/pieChart";
//import ProgressBars from '../graphics/progressBars'

const deviceWidth = Dimensions.get("window").width;

const SaludFinanciera = ({ navigation }) => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.containerProfile}>
        <View style={styles.tabProfileStyle}>
          <View style={styles.columns}>
            <Text style={{ color: "#999999" }}>Mi salud</Text>
            <Text style={{ color: "#072146", fontSize: 18 }}>
              Financiera
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

      
      <View style={{ flex: 3, height: 50, top: 60, marginBottom: 100 }}>
        <PieChartWithDynamicSlices />
      </View>
      <View style={{ flex: 1 }}>
        <Image
          source={require("../Front_Design/Salud/Asset_53.png")}
          style={{
            width: deviceWidth - 80,
            height: (deviceWidth - 80) / 3,
            marginHorizontal: 40,
            justifyContent: "center",
            marginBottom:100
          }}
        />
      </View>

      <View style={{flex: 4 ,flexDirection:"row",alignItems:"flex-end",justifyContent:"space-around", marginTop: 120, marginBottom:30}}>
        <Image source={require("../Front_Design/Salud/Asset_56.png")} style={{width:100,height:130}}></Image>
        <Image source={require("../Front_Design/Salud/Asset_55.png")} style={{width:100,height:130}}></Image>
        <Image source={require("../Front_Design/Salud/Asset_54.png")} style={{width:100,height:130}}></Image>
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
    width: 365,
    height: 880,

    flex: 1,

    alignItems: "center",
  },
  greenbox: {
    paddingTop: 10,
    paddingBottom: 10,
    width: 365,
    height: 200,
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

export default SaludFinanciera;
