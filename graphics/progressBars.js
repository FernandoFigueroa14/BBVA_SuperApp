import * as React from 'react'
import { View } from 'react-native'
import { ProgressBar, Colors } from 'react-native-paper'

var income = 1.0
var expenses = 0.6

const ProgressBars = () => (
  <View style={{
        flex: 1,
        justifyContent: 'space-around',
        alignItems: 'center',
        padding: 20,
        flexWrap: 'nowrap',
  }}>
    <ProgressBar
      style={{ 
        marginHorizontal: 15,
        height: 15,
        width: 300,
        borderRadius:15
        }}
      progress={income}
      color={Colors.red800}
    />
    <ProgressBar 
    style={{ 
        marginHorizontal: 15,
        height: 15,
        width: 300,
        borderRadius:15
        }}
    progress={expenses} color="#FFAE00" />
  </View>
)

export default ProgressBars
