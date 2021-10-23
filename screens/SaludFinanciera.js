import React from 'react'
import { SafeAreaView, StyleSheet, Text, View } from 'react-native'

import Pie from 'react-native-pie';

console.disableYellowBox = true;

const SaludFinanciera = () => {
  return (
    <SafeAreaView style={{ flex: 1 }}>
        <View style={styles.row}>
      <Pie
            radius={80}
            sections={[
              { percentage: 10, color: '#C70039' },
              { percentage: 20, color: '#44CD40' },
              { percentage: 30, color: '#404FCD' },
              { percentage: 40, color: '#EBD22F' }]}
            strokeCap={'butt'}
            innerRadius={60}
          />
    </View>
    </SafeAreaView>
    
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
