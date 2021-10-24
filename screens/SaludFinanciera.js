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
  Dimensions
} from 'react-native'

import PieChartWithDynamicSlices from '../graphics/pieChart'
import ProgressBars from '../graphics/progressBars'

const deviceWidth = Dimensions.get('window').width

const SaludFinanciera = ({ navigation }) => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.tabProfileStyle}>
        <View style={styles.columns}>
          <Text style={{ color: '#999999' }}>Mi salud</Text>
          <Text style={{ color: '#072146', fontSize: 18 }}>Financiera</Text>
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
      <View style={{ flex: 5, height: 50, top: 60 }}>
        <PieChartWithDynamicSlices />
      </View>
      <View style={{ flex: 2 }}>
        <Image
          source={require('../Front_Design/Salud/Asset_53.png')}
          style={{ width: deviceWidth - 60, height: 100,
            marginHorizontal: 30, justifyContent: 'center' }}
        />
      </View>
      <View style={{ backgroundColor: 'pink', flex: 4, height: 60 }}>
          
      </View>
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
  tabProfileStyle: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: 'rgba(213,236,252,1)',
    position: 'absolute',
    top: 60,
    left: 10,
    right: 10,

    borderRadius: 15,
    height: 80,
    padding: 15,
    shadowColor: '#072146',
    shadowOffset: {
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
