import React from 'react'
import { StyleSheet, Text, View ,Button,TouchableOpacity,Image,ScrollView} from 'react-native'


const Home = ({navigation}) => {
    return (
        <View>
            <View style={styles.tabProfileStyle}>

                <View style={styles.columns}>
                <Text>Bienvenido a la superApp</Text>
                <Text>Supper App lista para Carlos</Text>
                </View>

            <View >
            <TouchableOpacity onPress={()=> navigation.navigate("Perfil")}>
              <Image source={require('../Front_Design/Icons/home(1).png')} style={{width:25,
                            height:25}}/>
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
              <Image source={require('../Front_Design/Icons/fastpay.png')} style={{width:55,
                            height:55}}/>
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

        </View>
    )
}

export default Home;

const styles = StyleSheet.create({
    tabBarStyle: {
        position: 'absolute',
        top: 570,
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
        shadowOpacity: 0.05,
        shadowRadius: 2.5,
        elevation: 2.5
    
    },
    tabProfileStyle:{
        flex: 1,
        flexDirection:"row",
        justifyContent:"space-around",
        alignItems: "center",
        position: 'absolute',
        top: 50,
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
        shadowOpacity: 0.05,
        shadowRadius: 2.5,
        elevation: 2.5
    },
    
    columns:{
        flex: 1,
        flexDirection:"column",
        justifyContent:"space-around"
    },

    rows:{
        flex: 1,
        flexDirection:"row",
        alignItems: "center",
        justifyContent: "space-around"
    },
    containerfast:{
        height: 70,
        backgroundColor: "white",
        padding: 4,
        borderRadius:50,
        marginBottom:40
        
    }
})