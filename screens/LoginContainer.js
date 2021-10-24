import React from 'react'
import { StyleSheet, Text, View, SafeAreaView, ScrollView, StatusBar, ImageBackground } from 'react-native'

const LoginContainer = () => {
    return (
        <SafeAreaView style={styles.container}>
          <ScrollView style={styles.scrollView}>
            <View style={styles.loginContainer}>
                <View style={styles.nav}>
                    <TouchableOpacity onPress={()=> navigation.navigate("LoginContainer")}>
                        <Image source={require('../Front_Design/Icons/plus(1).png')} style={{width:25,
                            height:25}}/>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={()=> navigation.navigate("LoginChange")}>
                        <Image source={require('../Front_Design/Icons/plus(1).png')} style={{width:25,
                            height:25}}/>
                    </TouchableOpacity>
                </View>
            </View>
          </ScrollView>
        </SafeAreaView>
      );
    }
    
    const styles = StyleSheet.create({
      container: {
        flex: 0.5,
        paddingTop: StatusBar.currentHeight,
      },
      scrollView: {
        backgroundColor: 'white',
        marginHorizontal: 20,
      },
      text: {
        fontSize: 42,
      },
      loginContainer:{
          flex:1,
          justifyContent: 'center',
          alignItems: 'center',
      },
      imagenBack:{
        flex:1,
        justifyContent:"center",
        height: 300,
      }, 
      nav: {
        marginTop: 10,
        flex:1
      },
      navInicia: {
          
      },
      navCambia: {

      }
    });
    
    export default LoginContainer;