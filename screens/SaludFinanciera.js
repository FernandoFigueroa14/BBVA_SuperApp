import React from 'react'
import { StyleSheet, Text, View, SafeAreaView } from 'react-native'

import PieChartWithDynamicSlices from '../graphics/pieChart'

const SaludFinanciera = () => {
  return (
    <SafeAreaView style={styles.container}>
      <View>
        <Text>Hola Mundo Soy Salud financiera</Text>
        <PieChartWithDynamicSlices />
      </View>
    </SafeAreaView>
  )
}

export default SaludFinanciera

const styles = StyleSheet.create({
  container: {
    flex: 1,
    //backgroundColor: '#004481',
    alignItems: 'center',
    justifyContent: 'center',
  },
})
