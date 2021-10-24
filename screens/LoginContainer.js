import React from 'react'
import { StyleSheet, Text, View, SafeAreaView, ScrollView, StatusBar, ImageBackground } from 'react-native'

const LoginContainer = () => {
    return (
        <SafeAreaView style={styles.container}>
          <ScrollView style={styles.scrollView}>
            <View style={styles.loginContainer}>
                <View style={styles.nav}>
                    <View style={styles.navInicia}>
                        <Text style={styles.navInicia}>INICIA SESION</Text>
                    </View>
                    <View style={styles.navCambia}>
                        <Text style={styles.navCambia}>CAMBIAR CUENTA</Text>
                    </View>
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