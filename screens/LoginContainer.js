import React from 'react'
import { StyleSheet, Text, View, SafeAreaView, ScrollView, StatusBar, ImageBackground, TouchableOpacity, Image, TextInput } from 'react-native'

const LoginContainer = ({navigation}) => {
    const [text, onChangeText] = React.useState("XXXX-XXXX-XXXX-3297");
    return (
        <SafeAreaView style={styles.container}>
          <ScrollView style={styles.scrollView}>
            <View style={styles.loginContainer}>
                <View style={styles.nav}>
                    <TouchableOpacity style={styles.navInicia} onPress={()=> navigation.navigate("LoginContainer")}>
                        <Image source={require('../Front_Design/Images/iniciar.png')} style={{width:120,
                            height:25}}/>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.navCambia} onPress={()=> navigation.navigate("LoginChange")}>
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
                            onChangeText={onChangeText}
                            placeholder="Contraseña"
                        />
                </View>
            </View>
          </ScrollView>
        </SafeAreaView>
      );
    }
    
    const styles = StyleSheet.create({
      container: {
        flex: 0.6,
        paddingTop: StatusBar.currentHeight,
      },
      scrollView: {
        backgroundColor: 'white',
        marginHorizontal: 30,
      },
      text: {
        fontSize: 42,
      },
      loginContainer:{
          flex:1,
          justifyContent: 'center',
          alignItems: 'center',
          padding: 10

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
          paddingBottom: 0,
          orderColor: "#072146",
          borderBottomWidth: 2
      },
      navCambia: {
          padding: 5
      },
      datosContainer:{

      },
      input: {
        height: 40,
        margin: 12,
        borderWidth: 1,
        padding: 10,
      }
    });
    
    export default LoginContainer;