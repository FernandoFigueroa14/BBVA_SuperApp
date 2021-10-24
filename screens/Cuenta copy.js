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
  Dimensions
} from "react-native";

const deviceWidth = Dimensions.get('window').width

const Cuenta = ({ navigation }) => {
  return (
    <SafeAreaView style={styles.container}>

      <View style={styles.containerProfile}>

        <View style={styles.tabProfileStyle}>


          <View style={styles.columns}>
            <Text style={{ color: "#999999" }}>Bienvenido a la superApp</Text>
            <Text style={{ color: "#072146", fontSize: 18 }}>
              Super App lista para{" "}
              <Text style={{ fontWeight: "bold", fontSize: 20 }}>Carlos</Text>
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

      <ScrollView style={styles.scrollView}>

      <View
            contentContainerStyle={styles.redbox}
           
          >
            
              <Image
                style={{
                  width: 340,
                  height: 200,
                    alignSelf:"center",
                  borderRadius: 10,
                  marginTop:25
                }}
                source={require("../Front_Design/Tarjetas/Back_marino_completo.png")}
              />
            
        </View>

      <View style={styles.greenbox}>
            <View style={{ alignSelf: "flex-start", marginLeft: 15 }}>
              <Text
                style={{
                  fontWeight: "bold",
                  fontSize: 20,
                  marginBottom: 10,
                  color: "#072146",
                  alignSelf:"center",
                  marginTop: 15,
                  marginBottom: 25,
                }}
              >
               Acciones rápidas
              </Text>
            </View>

            <View
              style={{
                flex: 1,
                flexDirection: "row",
                justifyContent: "space-around",
              }}
            >
              <TouchableOpacity onPress={() => navigation.navigate("MandarDinero")} style={{ flex: 1, alignItems: "center" }}>
                <Image
                  style={{
                    width: 50,
                    height: 50,
                    margin: 5,
                    borderWidth: 2,
                    borderColor: "#072156",

                    borderRadius: 100,
                  }}
                  source={require("../Front_Design/Icons/Asset_30.png")}
                />
                <Text style={styles.nombres}>Transferir</Text>
              </TouchableOpacity>
              <TouchableOpacity style={{ flex: 1, alignItems: "center" }}>
                <Image
                  style={{
                    width: 50,
                    height: 50,
                    margin: 5,
                    borderWidth: 2,
                    borderColor: "#072156",

                    borderRadius: 100,
                  }}
                  source={require("../Front_Design/Icons/Asset_31.png")}
                />
                <Text style={styles.nombres}>Movimientos</Text>
              </TouchableOpacity>

              <TouchableOpacity style={{ flex: 1, alignItems: "center" }}>
                <Image
                  style={{
                    width: 50,
                    height: 50,
                    margin: 5,
                    borderWidth: 2,
                    borderColor: "#072156",

                    borderRadius: 100,
                  }}
                  source={require("../Front_Design/Icons/Asset_32.png")}
                />
                <Text style={styles.nombres}>Retiro sin tarjeta</Text>
              </TouchableOpacity>
              <TouchableOpacity style={{ flex: 1, alignItems: "center" }}>
                <Image
                  style={{
                    width: 50,
                    height: 50,
                    margin: 5,
                    borderWidth: 2,
                    borderColor: "#072156",

                    borderRadius: 100,
                  }}
                  source={require("../Front_Design/Icons/Asset_33.png")}
                />
                <Text style={styles.nombres}>Más Opciones</Text>
              </TouchableOpacity>

        
            </View>
            </View>

      
      
       <ScrollView
            contentContainerStyle={styles.redbox}
            horizontal={true}
            decelerationRate={0}
            snapToInterval={350}
            snapToAlignment={"center"}
          >
            <TouchableOpacity onPress={() => navigation.navigate("PagoServicios")}>
              <Image
                style={{
                  width: 200,
                  height: 200,
                  marginRight: -5,
                  marginLeft: 15,
                  borderRadius: 10,
                }}
                source={require("../Front_Design/Salud/Asset9.png")}
              />
            </TouchableOpacity>

            <View style={{ flex: 1, alignItems: "flex-start" }}>
              <TouchableOpacity onPress={() => navigation.navigate("PagoServicios")}>
                <Image
                  style={{
                    width: 95,
                    height: 95,
                    marginRight: 10,
                    marginLeft: 15,
                    borderRadius: 10,
                    marginBottom: 10,
                  }}
                  source={require("../Front_Design/Salud/Asset11.png")}
                />
              </TouchableOpacity>
              <TouchableOpacity onPress={() => navigation.navigate("PagoServicios")}>
                <Image
                  style={{
                    width: 95,
                    height: 95,
                    marginRight: 10,
                    marginLeft: 15,
                    borderRadius: 10,
                  }}
                  source={require("../Front_Design/Salud/Asset16.png")}
                />
              </TouchableOpacity>
            </View>

            <TouchableOpacity onPress={() => navigation.navigate("PagoServicios")}>
              <Image
                style={{
                  width: 150,
                  height: 200,
                  borderRadius: 10,
                }}
                source={require("../Front_Design/Salud/Asset12.png")}
              />
            </TouchableOpacity>

            <View style={{ flex: 1, alignItems: "flex-start" }}>
              <TouchableOpacity onPress={() => navigation.navigate("PagoServicios")}>
                <Image
                  style={{
                    width: 95,
                    height: 95,
                    marginRight: 10,
                    marginLeft: 15,
                    borderRadius: 10,
                    marginBottom: 10,
                  }}
                  source={require("../Front_Design/Salud/Asset13.png")}
                />
              </TouchableOpacity>
              <TouchableOpacity onPress={() => navigation.navigate("PagoServicios")}>
                <Image
                  style={{
                    width: 95,
                    height: 95,
                    marginRight: 10,
                    marginLeft: 15,
                    borderRadius: 10,
                  }}
                  source={require("../Front_Design/Salud/Asset14.png")}
                />
              </TouchableOpacity>
            </View>

            <TouchableOpacity onPress={() => navigation.navigate("FastPay")}>
              <Image
                style={{
                  width: 150,
                  height: 200,
                  borderRadius: 10,
                }}
                source={require("../Front_Design/Salud/Asset15.png")}
              />
            </TouchableOpacity>


          </ScrollView>

          <View style={styles.corolbox}>
            <Text
              style={{
                fontWeight: "bold",
                fontSize: 20,
                color: "#072146",
                alignSelf: "center",
                marginTop: 30,
                marginBottom:30
              }}
            >
              Ultimos Movimientos
            </Text>

            

                <View style={styles.tiraBlanca}>

                <View style={styles.marca}>

                <Image 
                source={require("../Front_Design/Logos/Apple_logo_black.svg.png")}

                style={{width:42, height:50, marginLeft:20,marginRight:20}}
                >

                </Image>
                

                <View style={{flex:1}}>

                <Text style={{
                     fontWeight: "bold",
                     fontSize: 15,
                     color: "#072146",
                    
                    
                    
                }}>Apple Store</Text>
                <Text
                style={{
                    fontWeight: "bold",
                    fontSize: 12,
                    color: "red",
                   
                   
                   
               }}>Gasto</Text>
                </View>
                </View>

                <View style={{flex:1, flexDirection:"column",alignItems:"flex-end", marginRight:10}}>

                <Text style={{
                    fontWeight: "bold",
                    fontSize: 15,
                    color: "red",
                    
                    
                    
                }}>-$13,278.00</Text>
                <Text
                style={{
                    fontWeight: "bold",
                    fontSize: 12,
                    color: "#BCBCBC",
                
                
                
                }}>21 de Octubre 2021</Text>
                </View>



                </View>


                <View style={styles.tiraBlanca}>

                <View style={styles.marca}>

                <Image 
                source={require("../Front_Design/Profile_pics/Dumi.jpeg")}

                style={{width:42, height:50, marginLeft:20,marginRight:20, borderRadius:100}}
                >

                </Image>
                

                <View style={{flex:1}}>

                <Text style={{
                     fontWeight: "bold",
                     fontSize: 12,
                     color: "#072146",
                    
                    
                    
                }}>Transferencia de Dumas</Text>
                <Text
                style={{
                    
                    fontSize: 12,
                    color: "green",
                   
                   
                   
               }}>Ingreso</Text>
                </View>
                </View>

                <View style={{flex:1, flexDirection:"column",alignItems:"flex-end", marginRight:10}}>

                <Text style={{
                    fontWeight: "bold",
                    fontSize: 15,
                    color: "green",
                    
                    
                    
                }}>$13,278.00</Text>
                <Text
                style={{
                    
                    fontSize: 12,
                    color: "#BCBCBC",
                
                
                
                }}>21 de Octubre 2021</Text>
                </View>



                </View>

                <View style={styles.tiraBlanca}>

                    <View style={styles.marca}>

                    <Image 
                    source={require("../Front_Design/Logos/1280px-Sky_Televison_logo.svg.png")}

                    style={{width:40, height:16, marginLeft:20,marginRight:20,tintColor:"black"}}
                    >

                    </Image>


                    <View style={{flex:1}}>

                    <Text style={{
                        fontWeight: "bold",
                        fontSize: 15,
                        color: "#072146",
                        
                        
                        
                    }}>Sky</Text>
                    <Text
                    style={{
                        fontWeight: "bold",
                        fontSize: 12,
                        color: "red",
                    
                    
                    
                    }}>Gasto</Text>
                    </View>
                    </View>

                    <View style={{flex:1, flexDirection:"column",alignItems:"flex-end", marginRight:10}}>

                    <Text style={{
                        fontWeight: "bold",
                        fontSize: 15,
                        color: "red",
                        
                        
                        
                    }}>-$3,278.00</Text>
                    <Text
                    style={{
                        
                        fontSize: 12,
                        color: "#BCBCBC",



                    }}>12 de Octubre 2021</Text>
                    </View>



                    </View>


                <View style={styles.tiraBlanca}>

                    <View style={styles.marca}>

                    <Image 
                    source={require("../Front_Design/Logos/2560px-McDonald's_logo.svg.png")}

                    style={{width:60, height:40, marginLeft:20,marginRight:20}}
                    >

                    </Image>


                    <View style={{flex:1}}>

                    <Text style={{
                        fontWeight: "bold",
                        fontSize: 11,
                        color: "#072146",
                        
                        
                        
                    }}>McDonald's</Text>
                    <Text
                    style={{
                        fontWeight: "bold",
                        fontSize: 12,
                        color: "red",



                    }}>Gasto</Text>
                    </View>
                    </View>

                    <View style={{flex:1, flexDirection:"column",alignItems:"flex-end", marginRight:10}}>

                    <Text style={{
                        fontWeight: "bold",
                        fontSize: 15,
                        color: "red",
                        
                        
                        
                    }}>-$1,278.00</Text>
                    <Text
                    style={{
                        
                        fontSize: 12,
                        color: "#BCBCBC",



                    }}>12 de Octubre 2021</Text>
                    </View>



                    </View>

                    <View style={styles.tiraBlanca}>

                    <View style={styles.marca}>

                    <Image 
                    source={require("../Front_Design/Logos/Intel_logo_(2006-2020).svg.png")}

                    style={{width:60, height:40, marginLeft:20,marginRight:20}}
                    >

                    </Image>


                    <View style={{flex:1}}>

                    <Text style={{
                        fontWeight: "bold",
                        fontSize: 11,
                        color: "#072146",
                        
                        
                        
                    }}>Intel</Text>
                    <Text
                    style={{
                        fontWeight: "bold",
                        fontSize: 12,
                        color: "green",



                    }}>Ingreso</Text>
                    </View>
                    </View>

                    <View style={{flex:1, flexDirection:"column",alignItems:"flex-end", marginRight:10}}>

                    <Text style={{
                        fontWeight: "bold",
                        fontSize: 15,
                        color: "green",
                        
                        
                        
                    }}>$50,278.00</Text>
                    <Text
                    style={{
                       
                        fontSize: 12,
                        color: "#BCBCBC",



                    }}>12 de Octubre 2021</Text>
                    </View>



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
    alignItems:"center",
    

    

},

tiraBlanca:{
    backgroundColor: "white",
    flexDirection:"row",
    alignItems:"center",
    justifyContent:"space-around",
    width: 350,
    height: 100,
    borderRadius:10,
    marginBottom:20,
   

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
    paddingHorizontal: 10,
    flex:1
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
    
    height: (deviceWidth-40)*2,
    backgroundColor:"#F2F2F2",

    flex: 1,

    alignItems: "center",
    
    
  },
  greenbox: {
    paddingTop: 10,
    paddingBottom: 10,
    width: 365,
    height: 200,
   
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

export default Cuenta;
