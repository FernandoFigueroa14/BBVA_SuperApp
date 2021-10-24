import React from 'react';
import { StyleSheet, Text, SafeAreaView, ScrollView, StatusBar ,View,TouchableOpacity,Image,FlatList, Button} from 'react-native';

const Home = ({navigation}) => {
  return (
    <SafeAreaView style={styles.container}>
        <View style={styles.containerProfile}>
            <View style={styles.tabProfileStyle}>

                <View style={styles.columns}>
                <Text style={{color:"white"}}>¡Bienvenido Carlos!</Text>
        <Text style ={{color:"white", fontSize: 18}}>Tu cartera de  <Text style={{fontWeight:"bold", fontSize:20}}>Inversiones</Text></Text>
       
        <Text style={{color:"white", fontWeight:"bold", marginTop:15,fontSize:45}}>$1,564.01 </Text>
        <Text style={{color:"white"}}>Powered by GBM+</Text>

                </View>

                <View >
                    <TouchableOpacity onPress={()=> navigation.navigate("Perfil")}>
                        <Image source={require('../Front_Design/Images/Asset7.png')} style={{width:100,
                                    height:100,
                                    marginRight:-18
                                    }}/>
                    </TouchableOpacity>
                </View>

            </View>
        </View>
       
      <ScrollView style={styles.scrollView}>
        <View style={styles.mrContainer}>

            <Text style={{fontWeight: "bold", fontSize: 20, marginBottom: 20, color:"#072146", alignSelf:"flex-start",marginLeft:15,marginTop:15}}>Mis cuentas en pesos: </Text>
            
         
         <View style = {styles.greenbox}>

             <View style={{alignSelf:"flex-start", marginLeft:15}}>
             </View>
             
             <View style={{flex:1, flexDirection: "row", justifyContent:"space-around"}}>

             <TouchableOpacity style={{flex:1,alignItems:"center"}} >
                 <Image
                 source={require("../Front_Design/Icons/Asset3.png")}
                
                 style={{
                    width: 50,
                    height:50,
                    margin: 5,
                    borderWidth:2,
                    borderColor:"#072156",
                    
                     borderRadius:100
                    }}
                 
                 />
                 <Text style={styles.nombres}>GENIUS 21</Text>
                 <Text style={styles.nombres2}>$59.30</Text>

             </TouchableOpacity>
           
             <TouchableOpacity style={{flex:1,alignItems:"center"}}>
                 <Image
                 style={{
                    width: 50,
                    height:50,
                    margin: 5,
                    borderWidth:2,
                    borderColor:"#072156",
                    
                     borderRadius:100
                    }}
                    source={require("../Front_Design/Icons/Asset3.png")}
                 />
                 <Text style={styles.nombres}>Fernando</Text>

             </TouchableOpacity>
             <TouchableOpacity style={{flex:1,alignItems:"center"}}>
                 <Image
                 style={{
                    width: 50,
                    height:50,
                    margin: 5,
                    borderWidth:2,
                    borderColor:"#072156",
                    
                     borderRadius:100
                    }}
                    source={require("../Front_Design/Icons/Asset3.png")}
                 />
                 <Text style={styles.nombres}>Ernesto</Text>

             </TouchableOpacity>
             
             <TouchableOpacity style={{flex:1,alignItems:"center"}}>
                 <Image
                 style={{
                    width: 50,
                    height:50,
                    margin: 5,
                    borderWidth:2,
                    borderColor:"#072156",
                    
                     borderRadius:100
                    }}
                    source={require("../Front_Design/Icons/Asset3.png")}
                 />
                 <Text style={styles.nombres}>Alex</Text>

             </TouchableOpacity>

             </View>

             <View style={{flex:1, flexDirection: "row", justifyContent:"space-around"}}>

             <TouchableOpacity style={{flex:1,alignItems:"center"}} >
                 <Image
                 style={{
                    width: 50,
                    height:50,
                    margin: 5,
                    borderWidth:2,
                    borderColor:"#072156",
                    
                     borderRadius:100
                    }}
                    source={require("../Front_Design/Icons/Asset4.png")}
                 />
                 <Text style={styles.nombres}>Saúl</Text>

             </TouchableOpacity>
           
             <TouchableOpacity style={{flex:1,alignItems:"center"}}>
                 <Image
                 style={{
                    width: 50,
                    height:50,
                    margin: 5,
                    borderWidth:2,
                    borderColor:"#072156",
                    
                     borderRadius:100
                    }}
                    source={require("../Front_Design/Icons/Asset4.png")}
                 />
                 <Text style={styles.nombres}>Fernando</Text>

             </TouchableOpacity>
             <TouchableOpacity style={{flex:1,alignItems:"center"}}>
                 <Image
                 style={{
                    width: 50,
                    height:50,
                    margin: 5,
                    borderWidth:2,
                    borderColor:"#072156",
                    
                     borderRadius:100
                    }}
                    source={require("../Front_Design/Icons/Asset4.png")}
                 />
                 <Text style={styles.nombres}>Ernesto</Text>

             </TouchableOpacity>
             
             <TouchableOpacity style={{flex:1,alignItems:"center"}}>
                 <Image
                 style={{
                    width: 50,
                    height:50,
                    margin: 5,
                    borderWidth:2,
                    borderColor:"#072156",
                    
                     borderRadius:100
                    }}
                    source={require("../Front_Design/Icons/Asset4.png")}
                 />
                 <Text style={styles.nombres}>Alex</Text>

             </TouchableOpacity>

             </View>

         </View>
         <View style = {styles.corolbox} >
         <Text style={{fontWeight: "bold", fontSize: 20, color:"#072146", alignSelf:"flex-start",marginTop:30}}>Mis tarjetas:</Text>
         
        
                 <Image
                 style={{
                    width: 400,
                    height:800,
                    margin: 10,
                    borderRadius:10
                    
                    }}
                 source ={require('../Front_Design/Tarjetas/Asset_27.png')}
                 />
        

            
             
            
                




        
         </View>
         
         
         </View>
      </ScrollView>

      <View style={styles.tabBarStyle}>
      <View style={styles.rows}>
      <TouchableOpacity onPress={()=> navigation.navigate("Home")}>
              <Image source={require('../Front_Design/Icons/home(1).png')} style={{width:25,
                            height:25}}/>
            </TouchableOpacity>

            <TouchableOpacity onPress={()=> navigation.navigate("SaludFinanciera")}>
              <Image source={require('../Front_Design/Icons/heart-attack.png')} style={{width:25,
                            height:25}}/>
            </TouchableOpacity>

            <View style={styles.containerfast}>
            <TouchableOpacity onPress={()=> navigation.navigate("FastPay")}>
              <Image source={require('../Front_Design/Icons/fastpay.png')} style={{width:65,
                            height:65}}/>
            </TouchableOpacity>
            </View>

            <TouchableOpacity onPress={()=> navigation.navigate("Inversiones")}>
              <Image source={require('../Front_Design/Icons/wallet-filled-money-tool.png')} style={{width:25,
                            height:25}}/>
            </TouchableOpacity>
            <TouchableOpacity onPress={()=> navigation.navigate("PagoServicios")}>
              <Image source={require('../Front_Design/Icons/plus(1).png')} style={{width:25,
                            height:25}}/>
            </TouchableOpacity>
            </View>
            </View>
            
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: StatusBar.currentHeight,
    backgroundColor: "rgba(213,236,252,0.25)"
  },
  columns:{
    flex: 1,
    flexDirection:"column",
    justifyContent:"space-around"
},
  tabBarStyle: {
      /*
    position: "absolute",
    bottom: 20,
    left: 20,
    right: 20,
    elevation: 20,*/
    margin:10,
    backgroundColor: "white",
    borderRadius: 15,
    height:60,
    shadowColor: '#072146',
        shadowOffset:{
            width: 0,
            height: 10,
        },
        shadowOpacity: 0.10,
        shadowRadius: 2.5,
    

},
containerProfile:{
    justifyContent: 'center',
    alignItems: 'center',
    padding: 10,
    zIndex: 10000,
    position: 'relative',
    height:100
},
tabProfileStyle:{
    flex: 1,
    flexDirection:"row",
    justifyContent:"space-between",
    alignItems: "center",
    backgroundColor:"#65c9a7",
    
    position: 'absolute',
    top: 10,
    left: 10,
    right: 10,
    
    
    borderRadius: 15,
    height:200,
    padding: 15,
    shadowColor: '#072146',
    shadowOffset:{
        width: 0,
        height: 6,
    },
    shadowOpacity: 0.05,
    shadowRadius: 1.5,
},
rows:{
    flex: 1,
    flexDirection:"row",
    alignItems: "center",
    justifyContent: "space-around"
}, containerfast:{
    height: 70,
    backgroundColor: "white",
    padding: 4,
    borderRadius:50,
    marginBottom:40
    
},
  mrContainer: {
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    paddingTop: 0
 },
  scrollView: {
    backgroundColor: "rgba(213,236,252,0)",
    marginHorizontal: 0,
    paddingHorizontal: 10,
    marginTop: 130
  },
  text: {
    fontSize: 42,
  },
  redbox: {
    
    height: 250,

 },
 nombres:{
     fontSize: 11,
     fontWeight: 'bold',
     color: '#072146',
 }, 
 nombres2:{
  fontSize: 11,
  fontWeight: '300',
  color: '#86dc5f',
},
nombres2:{
  fontSize: 11,
  fontWeight: '300',
  color: '#86dc5f',
},
 corolbox: {
    width: 365,
    height: 880,
   
    flex:1,
   
    alignItems:"center"
 },
 greenbox: {
   paddingTop:10,
   paddingBottom:10,
     width: 365,
    height: 200,
    backgroundColor: 'white',
    borderRadius:10,
    flex: 1, 
    justifyContent:"center",
    alignItems:"center",
    shadowColor: '#072146',
    shadowOffset:{
        width: 0,
        height: 6,
    },
    shadowOpacity: 0.05,
    shadowRadius: 1.5,
 },
 purplebox: {
    width: 100,
    height: 100,
    backgroundColor: 'purple'
 }
});

export default Home;