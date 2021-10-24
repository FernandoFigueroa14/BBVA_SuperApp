import React from 'react'
import { StyleSheet, Text, View, SafeAreaView, ScrollView, StatusBar, ImageBackground, TouchableOpacity, Image, TextInput } from 'react-native'

const LoginContainer = ({navigation}) => {
    const [text, onChangeText] = React.useState("XXXX-XXXX-XXXX-1404");
    const [text1, onChangeTextT] = React.useState("");
    return (
        <SafeAreaView style={styles.container}>
          <ScrollView style={styles.scrollView}>
                <View style={styles.nav}>
                    <TouchableOpacity style={styles.navInicia} onPress={()=> navigation.navigate("LoginContainer")}>
                        <Image source={require('../Front_Design/Images/iniciar.png')} style={{width:120,
                            height:25,
                            tintColor: "#cccccc"}}/>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.navCambia} onPress={()=> navigation.navigate("LoginChange")}>
                        <Image source={require('../Front_Design/Images/cambiar.png')} style={{width:150,
                            height:25,
                            tintColor: "#072146"}}/>
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
                <TouchableOpacity onPress={()=> navigation.navigate("Home")}>
                    <Image source={require('../Front_Design/Images/next.png')} style={{width:55,
                            height:55}}/>
                 </TouchableOpacity>
                </View>
          </ScrollView>
        </SafeAreaView>
      );
    }
    
    const styles = StyleSheet.create({
        container: {
          flex: 0.9,
          paddingTop: StatusBar.currentHeight,
        },
        scrollView: {  
          backgroundColor: 'white',
          marginHorizontal: 30,
          marginVertical: 0,
        },
        text: {
          fontSize: 42,
        },
        loginContainer:{
            flex:1,
            justifyContent: 'center',
            alignItems: 'center',
            padding: 10,
  
        },
        imagenBack:{
          flex:1,
          justifyContent:"center",
        }, 
        nav: {
          marginTop: 10,
          flex:1,
          flexDirection: 'row',
          justifyContent: 'space-between'
        },
        navInicia: {
            padding:5,
            
        },
        navCambia: {
            padding: 5,
            paddingBottom: 0,
            borderColor: "#072146",
            borderBottomWidth: 2
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
            marginTop: 25
        }, 
        next:{
            flex: 1,
            justifyContent:'center',
            alignItems:'center',
            zIndex:100,
            marginTop: 20
        }
      });
    
    export default LoginContainer;