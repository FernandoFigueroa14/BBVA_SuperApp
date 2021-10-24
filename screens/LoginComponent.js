import 'react-native-gesture-handler';
import React from 'react';
import { useState } from 'react';
import { StyleSheet, Text, SafeAreaView, ScrollView, StatusBar, View, SectionList, FlatList, Button, SafeAreaViewComponent } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { ImageBackground, TouchableOpacity, Image, TextInput } from 'react-native'

const getMoviesFromApiAsync = async () => {
  try {
    const response = await fetch(
      'https://reactnative.dev/movies.json'
    );
    const json = await response.json();
    return json.movies;
  } catch (error) {
    console.error(error);
  }
};


const LoginComponent = ({navigation}) => {

  const [session, setSession] = useState(0);
  const [text, onChangeText] = React.useState("XXXX-XXXX-XXXX-3297");
    const [text1, onChangeTextT] = React.useState("");
    const nombre = "Saul"

  return(
    <SafeAreaView style={styles.container}>
        <ScrollView style={styles.scrollView}>
            <View style={styles.containerLogin}>
            <ImageBackground source={require("../Front_Design/Images/login.jpg")} style={styles.imagenBack}>
                <View style={styles.header}>
                    <Image source={require("../Front_Design/Logos_BBVA/superApp_1.png") } style={styles.imagen} ></Image>
                    <Text style={styles.text}>Hola, <Text style={styles.nombre}>{nombre}</Text></Text>
                    <Text style={styles.textAbove}>Ingresa tu contraseña para continuar</Text>
                </View>
            </ImageBackground>
            </View>
          
          <View style={styles.scrollViewContainer}>
            <View style={styles.nav}>
                <TouchableOpacity style={styles.navInicia}>
                    <Image source={require('../Front_Design/Images/iniciar.png')} style={{width:120,
                        height:25}}/>
                </TouchableOpacity>
                <TouchableOpacity style={styles.navCambia}>
                    <Image source={require('../Front_Design/Images/cambiar.png')} style={{width:150,
                        height:25}}/>
                </TouchableOpacity>
            </View>
            <View style={styles.datosContainer}>
                    <TextInput
                        style={styles.input}
                        onChangeText={onChangeText}
                        placeholder={text}
                    />
                    <TextInput
                        style={styles.input}
                        onChangeText={onChangeTextT}
                        placeholder="Contraseña" 
                        textContentType = 'newPassword'
                    />
            </View>
            <View style={styles.next}>
            <TouchableOpacity onPress={()=> navigation.navigate("Home",{screen:'Home'})}>
                <Image source={require('../Front_Design/Images/next.png')} style={{width:55,
                        height:55}}/>
                </TouchableOpacity>
            </View>
            </View>

          <View style={styles.scrollView2}>
            <View style={styles.botones1}>
              <TouchableOpacity onPress={()=> navigation.navigate("FastPay")}>
                  <Image
                  style={{
                      width: 160,
                      height:75,
                      borderRadius:10,
                      marginRight: 25
                      }}
                  source ={require('../Front_Design/Images/TokenMovil.png')}
                  />
              </TouchableOpacity>

              <TouchableOpacity onPress={()=> navigation.navigate("FastPay")}>
                  <Image
                  style={{
                      width: 160,
                      height:75,
                      borderRadius:10,
                      right: 8
                      }}
                  source ={require('../Front_Design/Images/QRCoDi.png')}
                  />
              </TouchableOpacity>
            </View>
            <TouchableOpacity onPress={()=> navigation.navigate("FastPay")} style={{alignItems: "center", justifyContent: "center"}}>
                  <Image
                  style={{
                      width: 355,
                      height: 75,
                      
                      borderRadius:10,
                      
                      }}
                  source ={require('../Front_Design/Images/FastPay.png')}
                  />
              </TouchableOpacity>
        
            </View>
          </ScrollView>
        
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
    container:{
        flex:1
    },
    ScrollView:{
        flex:0.9,
    },
    containerLogin: {
        flex: 0.5,
    },
    imagenBack:{
      flex:1,
      justifyContent:"center",
      height: 240,
      
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
    containerContainer: {
        flex: 0.9,
        paddingTop: StatusBar.currentHeight,
      },
      scrollViewContainer: {  
        backgroundColor: 'white',
        marginHorizontal: 30,
        marginVertical: 20,
      },
      textContainer: {
        fontSize: 42,
      },
      loginContainer:{
          flex:1,
          justifyContent: 'center',
          alignItems: 'center',
          padding: 10,

      }, 
      nav: {
        marginTop: 10,
        flex:1,
        flexDirection: 'row',
        justifyContent: 'space-between'
      },
      navInicia: {
          padding:5,
          paddingBottom: 0,
          borderColor: "#072146",
          borderBottomWidth: 2
      },
      navCambia: {
          padding: 5
      },
      input: {
        height: 40,
        margin: 12,
        textAlign: 'center',
        backgroundColor: 'rgba(213,236,252,0.2)',
        borderRadius: 10,
        width: 200,
        padding: 10,
      },
      datosContainer:{
          flex:1,
          justifyContent:'center',
          alignItems:'center',
          width:300,
          marginTop: 20
      }, 
      next:{
          flex: 1,
          justifyContent:'center',
          alignItems:'center',
          zIndex:100,
          marginBottom: 10
      },
      containerButton:{
        flex: 0.5,
        //paddingTop: StatusBar.currentHeight,
    },
    scrollView2: {
        flex: 1,
        backgroundColor: 'white',
        paddingHorizontal: 20,
        paddingLeft:25,
        marginBottom: 20,
      },
      botones1: {
        flexDirection: "row",
        marginBottom: 10,
        justifyContent: "center",
      },

});

export default LoginComponent;



/*
<NavigationContainer>
        <Navigation/>
      </NavigationContainer>

<View style={styles.container}>
      <Login/>
      <NavigationContainer>
        <LoginNavigation/>
      </NavigationContainer>
    </View>


<View style={styles.scrollView}>
        <Login/>
      </View>
      <LoginContainer/>
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, ImageBackground,Image } from 'react-native';
import Loader from './screens/Loader';

import { createNativeStackNavigator } from '@react-navigation/native-stack';
import view_login from './screens/view_login';


const Stack = createNativeStackNavigator();
export default function App() {


  return(<NavigationContainer>
    <Stack.Navigator>
    <Stack.Screen name="login" component={view_login}></Stack.Screen>
    <Stack.Screen name="Loader" component={Loader}></Stack.Screen>
    

    </Stack.Navigator>
   
  </NavigationContainer> 
  )
  
}
*/
