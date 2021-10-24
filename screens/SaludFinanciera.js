import React from 'react'
import {
  StyleSheet,
  Text,
  SafeAreaView,
  ScrollView,
  StatusBar,
  View,
  TouchableOpacity,
  Image,
} from 'react-native'

import PieChartWithDynamicSlices from '../graphics/pieChart'

const SaludFinanciera = ({ navigation }) => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.tabProfileStyle}>
        <View style={styles.columns}>
          <Text style={{ color: '#999999' }}>Bienvenido a la superApp</Text>
          <Text style={{ color: '#072146', fontSize: 18 }}>
            Supper App lista para{' '}
            <Text style={{ fontWeight: 'bold', fontSize: 20 }}>Carlos</Text>
          </Text>
        </View>

        <View>
          <TouchableOpacity onPress={() => navigation.navigate('Perfil')}>
            <Image
              source={require('../Front_Design/Images/Asset7.png')}
              style={{ width: 100, height: 100, marginRight: -18 }}
            />
          </TouchableOpacity>
        </View>
      </View>
      <View style={{ flex: 5, height: 50, top:60}}>
        <PieChartWithDynamicSlices />
      </View>
      <View style={{ backgroundColor: 'blue', flex: 3, height: 50 }} />
      <View style={{ backgroundColor: 'pink', flex: 3, height: 50 }} />
    </SafeAreaView>
  )
}

export default SaludFinanciera

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: StatusBar.currentHeight,
    backgroundColor: 'rgba(213,236,252,0.25)',
    flexDirection: 'column',
    alignContent: 'flex-start',
    justifyContent: 'center',
    alignItems: 'stretch',
    margin: 0,
  },
  tabProfileStyle:{
    flex: 1,
    flexDirection:"row",
    justifyContent:"space-between",
    alignItems: "center",
    backgroundColor:"rgba(213,236,252,1)",
    position: 'absolute',
    top: 60,
    left: 10,
    right: 10,
    
    
    borderRadius: 15,
    height:80,
    padding: 15,
    shadowColor: '#072146',
    shadowOffset:{
        width: 0,
        height: 6,
    },
    shadowOpacity: 0.05,
    shadowRadius: 1.5,
},
  columns: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'space-around',
  },
})
