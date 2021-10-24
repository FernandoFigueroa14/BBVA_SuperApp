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
  ImageBackground,
} from "react-native";

const deviceWidth = Dimensions.get("window").width;

const Perfil = ({ navigation }) => {
  return (
    <SafeAreaView style={styles.container}>
     

      <ScrollView style={styles.scrollView}>
      <ImageBackground source={require("../Front_Design/Salud/Artboard_19.jpg")}>
      <View style={styles.corolbox}>
          
      </View>
      </ImageBackground>

      <View style={{marginLeft:15, marginTop:15}}>
          <Text style={{fontSize:26}}><Text style={{fontWeight:"bold"}}>Carlos</Text> Pano Hernández</Text>
          <View style={{flex:1, flexDirection:"row",alignItems:"center"}}>
          <Text style={{}}>carlospano8@gmail.com</Text>
          <Text style={{fontSize:12, marginLeft: 5 ,color:"green"}}>Verificado</Text>
          </View>

          <View style={{flex:1, flexDirection:"row"}}>
          <Text style={{}}>(55) 5807 4260</Text>
          <Text style={{fontSize:12, marginLeft: 5,color:"green"}}>Verificado</Text>
          </View>
      </View>
        <View style={styles.mrContainer}>
          <Text
            style={{
              fontWeight: "bold",
              fontSize: 20,
              marginBottom: 10,
              color: "#072146",
              alignSelf: "flex-start",
              marginLeft: 15,
              marginTop: 15,
            }}
          >
            Tarjeta predeterminada FastPay:{" "}
          </Text>

          <ScrollView
            contentContainerStyle={styles.redbox}
            horizontal={true}
            decelerationRate={0}
            snapToInterval={350}
            snapToAlignment={"center"}
          >
            <TouchableOpacity onPress={() => navigation.navigate("Cuenta")}>
              <Image
                style={{
                  width: 300,
                  height: 200,
                  
                  marginLeft: 15,
                  borderRadius: 10,
                }}
                source={require("../Front_Design/Tarjetas/Back_marino_completo.png")}
              />
            </TouchableOpacity>

            <TouchableOpacity onPress={() => navigation.navigate("Cuenta")}>
              <Image
                style={{
                  width: 300,
                  height: 200,
                  
                  marginLeft: 15,
                  borderRadius: 10,
                }}
                source={require("../Front_Design/Tarjetas/Back_azul_completo.png")}
              />
            </TouchableOpacity>

          

            <TouchableOpacity>
              <Image
                style={{
                  width: 300,
                  height: 200,
                  marginLeft:15,
                  marginRight:15,
                  borderRadius: 10,
                }}
                source={require("../Front_Design/Tarjetas/Back_gris_completo.png")}
              />
            </TouchableOpacity>
            
            
          </ScrollView>
  
        </View>

       <View style={styles.tiraBlanca}>
           <View>
           <Text style={{fontSize:20,fontWeight:"bold"}}>Dirección:</Text>
           <Text>Juan Antonio Viruseñor y Ximenez #10.</Text>
           <Text>Satélite, Naucalpan de Juarez.</Text>
           <Text style={{fontSize:12,color:"green"}}>Verificado</Text>



           </View>
          
        </View>
              

            <View style={styles.tiraBlanca}>
            <View>
           <Text style={{fontSize:20,fontWeight:"bold"}}>Fecha de nacimiento:</Text>
           <Text>08 de mayo de 1998</Text>
           
           <Text style={{fontSize:12,color:"green"}}>Verificado</Text>



           </View>

                </View>

            
        
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
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
    marca:{
        flex:1,
        flexDirection:"row",
        alignItems:"center"
    
        
    
    },
    
    tiraBlanca:{flex:1,
        backgroundColor: "white",
        flexDirection:"row",
        alignItems:"center",
        justifyContent:"flex-start",
        width: 350,
        height: 100,
        borderRadius:10,
        marginBottom:20,
        marginLeft: 15,
        marginRight: 15,
        padding: 25
    
    },
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
    //paddingHorizontal: 10,
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
    width: 200,
    height: 250,

  

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

export default Perfil;
