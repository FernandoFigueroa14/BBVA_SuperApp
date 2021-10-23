import React from 'react'
import { SafeAreaView, StyleSheet, Text, View } from 'react-native'

//import Pie from 'react-native-pie';

//console.disableYellowBox = true;

const SaludFinanciera = () => {
  return (
   <Text>Hola</Text>
    
  )
}

export default SaludFinanciera

const styles = StyleSheet.create({
 
    MainContainer: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor:'white'
    },
   
    text: {
      fontSize: 24,
      textAlign: 'center',
      fontWeight: 'bold'
    },
   
    row: {
      paddingVertical: 17,
      flexDirection: 'row',
      width: 330,
      justifyContent: 'space-between',
    },
   
    gauge: {
      position: 'absolute',
      width: 100,
      height: 160,
      alignItems: 'center',
      justifyContent: 'center',
    },
    
    gaugeText: {
      backgroundColor: 'transparent',
      color: '#000',
      fontSize: 24,
    },
   
  });
