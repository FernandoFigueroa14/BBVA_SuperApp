import React from 'react';
import { StyleSheet, Text, SafeAreaView, ScrollView, StatusBar ,View,TouchableOpacity,Image} from 'react-native';

const PagoServicios = ({navigation}) => {
  return (
    <SafeAreaView style={styles.container}>

       
      <ScrollView style={styles.scrollView}>
        <View style={styles.mrContainer}>
         <View style = {styles.redbox} />
         <View style = {styles.greenbox} />
         <View style = {styles.corolbox} />
         <View style = {styles.purplebox} />
         
         </View>
      </ScrollView>
      <View style={styles.tabProfileStyle}>

        <View style={styles.columns}>
        <Text style={{color:"#999999"}}>Bienvenido a la superApp</Text>
        <Text style ={{color:"#072146", fontSize: 18}}>Supper App lista para <Text style={{fontWeight:"bold", fontSize:20}}>Carlos</Text></Text>
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
    position: "absolute",
    bottom: 20,
    left: 20,
    right: 20,
    elevation: 20,
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

tabProfileStyle:{
    flex: 1,
    flexDirection:"row",
    justifyContent:"space-between",
    alignItems: "center",
    position: 'absolute',
    top: 50,
    left: 20,
    right: 20,
    elevation: 20,
    
    borderRadius: 15,
    height:60,
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
    paddingTop: 130
 },
  scrollView: {
    backgroundColor: 'rgba(213,236,252,0.25)',
    marginHorizontal: 10,
  },
  text: {
    fontSize: 42,
  },
  redbox: {
    width: 800,
    height: 300,
    backgroundColor: 'red'
 },
 corolbox: {
    width: 100,
    height: 100,
    backgroundColor: '#ff7f50'
 },
 greenbox: {
    width: 100,
    height: 100,
    backgroundColor: 'green'
 },
 purplebox: {
    width: 100,
    height: 100,
    backgroundColor: 'purple'
 }
});

export default PagoServicios;