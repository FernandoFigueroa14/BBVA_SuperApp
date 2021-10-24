import React from 'react'
import { SafeAreaViewComponent, StyleSheet, Text, View, StatusBar, TouchableOpacity, ScrollView, Image, SafeAreaView} from 'react-native'

const LoginButtons = ({navigation}) => {
    return (
        <SafeAreaView style={styles.container}>
            <ScrollView style={styles.scrollView2}>
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
        
          </ScrollView>
        </SafeAreaView>
    )
}

export default LoginButtons;

const styles = StyleSheet.create({
    containerButton:{
        flex: 0.5,
        //paddingTop: StatusBar.currentHeight,
    },
    scrollView2: {
        flex: 1,
        backgroundColor: 'white',
        paddingHorizontal: 20,
        marginVertical: 0,
      },
      botones1: {
        flexDirection: "row",
        marginBottom: 10,
        justifyContent: "center",
      },
})